document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.cinematic-hero');

    if (!hero) {
        return;
    }

    const splitHeadline = () => {
        const title = hero.querySelector('[data-split-text]');
        if (!title) {
            return;
        }

        const text = title.getAttribute('data-split-text') || title.textContent.trim();
        const words = text.split(/\s+/);
        title.textContent = '';

        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'hero-word';
            wordSpan.style.setProperty('--word-index', index);
            wordSpan.textContent = word;
            title.appendChild(wordSpan);
            if (index < words.length - 1) {
                title.appendChild(document.createTextNode(' '));
            }
        });
    };

    const animateCounter = (element, targetValue, duration = 1600) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            element.textContent = `${targetValue.toLocaleString('en-US')}+`;
            return;
        }

        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(targetValue * eased);
            element.textContent = `${currentValue.toLocaleString('en-US')}+`;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    };

    const buildParticles = () => {
        const layer = hero.querySelector('.hero-particles');
        if (!layer) {
            return;
        }

        const particleCount = window.matchMedia('(max-width: 768px)').matches ? 10 : 18;
        layer.innerHTML = '';

        for (let index = 0; index < particleCount; index += 1) {
            const particle = document.createElement('span');
            particle.className = `particle ${index % 3 === 0 ? 'triangle' : ''}`.trim();
            particle.style.setProperty('--left', `${Math.random() * 100}%`);
            particle.style.setProperty('--duration', `${10 + Math.random() * 8}s`);
            particle.style.setProperty('--delay', `${Math.random() * 6}s`);
            particle.style.setProperty('--drift', `${(Math.random() * 80 - 40).toFixed(1)}px`);
            particle.style.setProperty('--opacity', (0.2 + Math.random() * 0.35).toFixed(2));
            particle.style.animationDelay = particle.style.getPropertyValue('--delay');
            layer.appendChild(particle);
        }
    };

    const setupTilt = () => {
        const tiltWrap = hero.querySelector('#heroTiltCard');
        const tiltCard = hero.querySelector('.hero-tilt-card');
        if (!tiltWrap || !tiltCard) {
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        let animationFrameId = null;

        const animateTilt = () => {
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;
            tiltCard.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

            if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
                animationFrameId = requestAnimationFrame(animateTilt);
            } else {
                animationFrameId = null;
            }
        };

        const startAnimation = () => {
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animateTilt);
            }
        };

        const resetTilt = () => {
            targetX = 0;
            targetY = 0;
            startAnimation();
        };

        hero.querySelector('.hero-visual')?.addEventListener('pointermove', (event) => {
            const rect = tiltWrap.getBoundingClientRect();
            const relativeX = (event.clientX - rect.left) / rect.width;
            const relativeY = (event.clientY - rect.top) / rect.height;
            targetX = (relativeX - 0.5) * 18;
            targetY = (0.5 - relativeY) * 14;
            startAnimation();
        });

        hero.querySelector('.hero-visual')?.addEventListener('pointerleave', resetTilt);
    };

    splitHeadline();
    buildParticles();
    setupTilt();

    hero.querySelectorAll('.stat-number[data-target]').forEach((element) => {
        const targetValue = Number(element.getAttribute('data-target') || 0);
        animateCounter(element, targetValue);
    });

    window.addEventListener('resize', () => {
        buildParticles();
    });
});

// Text Slider Functionality
let currentTextSlide = 0;
const textSlides = document.querySelectorAll('.slide-text');
const totalTextSlides = textSlides.length;

function showTextSlide(index) {
    // Remove active class from all slides
    textSlides.forEach(slide => slide.classList.remove('active'));

    // Update current slide index
    currentTextSlide = (index + totalTextSlides) % totalTextSlides;

    // Add active class to new slide
    textSlides[currentTextSlide].classList.add('active');
}

function autoTextSlide() {
    showTextSlide(currentTextSlide + 1);
}

// Initialize text slider
document.addEventListener('DOMContentLoaded', () => {
    // Start auto-slide
    setInterval(autoTextSlide, 4000);

    // Show first slide
    showTextSlide(0);
});

// Simple Counter Animation
const counters = document.querySelectorAll('.counter-number');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const animate = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animate, 1);
            } else {
                counter.innerText = target;
                // Add formatting
                if (target >= 1000) {
                    counter.innerText = target.toLocaleString() + '+';
                } else if (target === 100) {
                    counter.innerText = target + '%';
                }
            }
        };
        animate();
    });
};

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe counter section
const counterSection = document.querySelector('.counter-section');
if (counterSection) {
    observer.observe(counterSection);
}

// All Services Section JavaScript
class AllServicesManager {
    constructor() {
        this.serviceCards = document.querySelectorAll('.service-card');
        this.enrollButtons = document.querySelectorAll('.enroll-btn');
        this.ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAnimations();
        this.setupInteractions();
    }

    setupEventListeners() {
        // Service card hover effects
        this.serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => this.handleCardHover(card, true));
            card.addEventListener('mouseleave', () => this.handleCardHover(card, false));

            // Click to expand details
            card.addEventListener('click', () => this.expandCardDetails(card));
        });

        // Enroll button interactions
        this.enrollButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleEnrollClick(e, button));
        });

        // CTA button interactions
        this.ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleCTAClick(e, button));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateServiceCard(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.serviceCards.forEach(card => {
            observer.observe(card);
        });

        // Category header animations
        const categoryHeaders = document.querySelectorAll('.category-header');
        categoryHeaders.forEach((header, index) => {
            setTimeout(() => {
                this.animateCategoryHeader(header);
            }, index * 200);
        });
    }

    setupInteractions() {
        // Add ripple effect to buttons
        this.enrollButtons.forEach(button => {
            button.addEventListener('click', (e) => this.createRippleEffect(e, button));
        });

        this.ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => this.createRippleEffect(e, button));
        });

        // Add loading simulation
        this.simulateLoading();
    }

    handleCardHover(card, isHovering) {
        if (isHovering) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            const header = card.querySelector('.service-header');
            if (header) {
                header.style.transform = 'translateY(-2px)';
            }
        } else {
            card.style.transform = '';
            const header = card.querySelector('.service-header');
            if (header) {
                header.style.transform = '';
            }
        }
    }

    expandCardDetails(card) {
        const serviceName = card.querySelector('.service-name').textContent;
        const serviceDesc = card.querySelector('.service-desc').textContent;
        const features = Array.from(card.querySelectorAll('.service-features li')).map(li => li.textContent);

        this.showServiceDetails(serviceName, serviceDesc, features);
    }

    handleEnrollClick(event, button) {
        event.stopPropagation();

        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);

        // Get service information
        const card = button.closest('.service-card');
        const serviceName = card.querySelector('.service-name').textContent;
        const price = card.querySelector('.price').textContent;

        // Show enrollment confirmation
        this.showEnrollmentConfirmation(serviceName, price);
    }

    handleCTAClick(event, button) {
        event.stopPropagation();

        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);

        if (button.classList.contains('cta-primary')) {
            // Phone call action
            this.showContactInfo('phone');
        } else if (button.classList.contains('cta-secondary')) {
            // Email action
            this.showContactInfo('email');
        }
    }

    handleKeyboardNavigation(e) {
        if (e.key === 'Tab') {
            // Add focus styles for accessibility
            this.serviceCards.forEach(card => {
                card.addEventListener('focus', () => {
                    card.style.outline = '2px solid #ffd700';
                    card.style.outlineOffset = '4px';
                });

                card.addEventListener('blur', () => {
                    card.style.outline = '';
                });
            });
        }
    }

    animateServiceCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }

    animateCategoryHeader(header) {
        header.style.opacity = '0';
        header.style.transform = 'translateX(-30px)';

        setTimeout(() => {
            header.style.transition = 'all 0.6s ease-out';
            header.style.opacity = '1';
            header.style.transform = 'translateX(0)';
        }, 100);
    }

    showServiceDetails(serviceName, serviceDesc, features) {
        // Create a detailed service popup
        const popup = document.createElement('div');
        popup.className = 'service-details-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <div class="popup-header">
                    <h3>${serviceName}</h3>
                    <button class="popup-close">&times;</button>
                </div>
                <div class="popup-body">
                    <p class="popup-description">${serviceDesc}</p>
                    <div class="popup-features">
                        <h4>Course Features:</h4>
                        <ul>
                            ${features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="popup-actions">
                        <button class="popup-enroll">Enroll Now</button>
                        <button class="popup-inquire">Inquire</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        // Style popup
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100%';
        popup.style.height = '100%';
        popup.style.background = 'rgba(0, 0, 0, 0.8)';
        popup.style.display = 'flex';
        popup.style.alignItems = 'center';
        popup.style.justifyContent = 'center';
        popup.style.zIndex = '2000';
        popup.style.animation = 'fadeIn 0.3s ease-out';

        const popupContent = popup.querySelector('.popup-content');
        popupContent.style.background = 'rgba(255, 255, 255, 0.95)';
        popupContent.style.color = '#1e3c72';
        popupContent.style.padding = '30px';
        popupContent.style.borderRadius = '20px';
        popupContent.style.maxWidth = '500px';
        popupContent.style.width = '90%';
        popupContent.style.maxHeight = '80vh';
        popupContent.style.overflow = 'auto';
        popupContent.style.animation = 'slideInUp 0.3s ease-out';

        // Close popup handlers
        const closeBtn = popup.querySelector('.popup-close');
        closeBtn.addEventListener('click', () => this.closePopup(popup));

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                this.closePopup(popup);
            }
        });

        // Action button handlers
        const enrollBtn = popup.querySelector('.popup-enroll');
        enrollBtn.addEventListener('click', () => {
            this.closePopup(popup);
            this.showEnrollmentConfirmation(serviceName, 'Contact for pricing');
        });

        const inquireBtn = popup.querySelector('.popup-inquire');
        inquireBtn.addEventListener('click', () => {
            this.closePopup(popup);
            this.showContactInfo('inquiry');
        });
    }

    showEnrollmentConfirmation(serviceName, price) {
        const popup = document.createElement('div');
        popup.className = 'enrollment-confirmation';
        popup.innerHTML = `
            <div class="confirmation-content">
                <div class="confirmation-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Enrollment Initiated!</h3>
                <p>You have initiated enrollment for:</p>
                <div class="course-info">
                    <strong>${serviceName}</strong>
                    <span>${price}</span>
                </div>
                <p>Our team will contact you shortly to complete the enrollment process.</p>
                <button class="confirmation-close">Continue</button>
            </div>
        `;

        document.body.appendChild(popup);

        // Style confirmation popup
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(255, 255, 255, 0.95)';
        popup.style.color = '#1e3c72';
        popup.style.padding = '30px';
        popup.style.borderRadius = '20px';
        popup.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        popup.style.zIndex = '2000';
        popup.style.textAlign = 'center';
        popup.style.animation = 'modalSlideIn 0.3s ease-out';

        // Close confirmation
        const closeBtn = popup.querySelector('.confirmation-close');
        closeBtn.addEventListener('click', () => {
            popup.style.animation = 'fadeOutDown 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 300);
        });

        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(popup)) {
                popup.style.animation = 'fadeOutDown 0.3s ease-out';
                setTimeout(() => {
                    if (document.body.contains(popup)) {
                        document.body.removeChild(popup);
                    }
                }, 300);
            }
        }, 5000);
    }

    showContactInfo(type) {
        let message = '';
        if (type === 'phone') {
            message = '📞 Call us at: +91 1234567890\n\nOur team is available:\nMonday - Saturday: 9:00 AM - 6:00 PM\nSunday: 10:00 AM - 2:00 PM';
        } else if (type === 'email') {
            message = '📧 Email us at: info@vijayacademy.com\n\nWe typically respond within 24 hours.\nFor urgent inquiries, please call us.';
        } else if (type === 'inquiry') {
            message = '📋 For course inquiries:\n\n📞 Phone: +91 1234567890\n📧 Email: info@vijayacademy.com\n🏢 Visit: Vijay Academy, Main Road, City\n\nWe\'ll be happy to help you choose the right course!';
        }

        // Create a styled contact popup
        const popup = document.createElement('div');
        popup.className = 'contact-popup';
        popup.innerHTML = `
            <div class="contact-content">
                <div class="contact-icon">
                    <i class="fas fa-${type === 'phone' ? 'phone' : 'envelope'}"></i>
                </div>
                <h3>Contact Information</h3>
                <pre>${message}</pre>
                <button class="contact-close">Got it!</button>
            </div>
        `;

        document.body.appendChild(popup);

        // Style contact popup
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(255, 255, 255, 0.95)';
        popup.style.color = '#1e3c72';
        popup.style.padding = '30px';
        popup.style.borderRadius = '20px';
        popup.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        popup.style.zIndex = '2000';
        popup.style.textAlign = 'center';
        popup.style.maxWidth = '400px';
        popup.style.animation = 'modalSlideIn 0.3s ease-out';

        const pre = popup.querySelector('pre');
        pre.style.textAlign = 'left';
        pre.style.background = 'rgba(255, 255, 255, 0.5)';
        pre.style.padding = '15px';
        pre.style.borderRadius = '10px';
        pre.style.fontSize = '0.9rem';
        pre.style.lineHeight = '1.5';
        pre.style.margin = '15px 0';

        // Close contact popup
        const closeBtn = popup.querySelector('.contact-close');
        closeBtn.addEventListener('click', () => {
            popup.style.animation = 'fadeOutDown 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 300);
        });
    }

    closePopup(popup) {
        popup.style.animation = 'fadeOutDown 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(popup)) {
                document.body.removeChild(popup);
            }
        }, 300);
    }

    createRippleEffect(event, element) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 215, 0, 0.3)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - 10;
        const y = event.clientY - rect.top - 10;

        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
            element.removeChild(ripple);
        }, 600);
    }

    simulateLoading() {
        // Simulate loading state for demonstration
        this.serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loading');
                setTimeout(() => {
                    card.classList.remove('loading');
                }, 800);
            }, index * 100);
        });
    }

    // Filter services by category
    filterServices(category) {
        const serviceCategories = document.querySelectorAll('.service-category-expanded');

        serviceCategories.forEach(serviceCategory => {
            const title = serviceCategory.querySelector('.category-title').textContent.toLowerCase();

            if (category === 'all' || title.includes(category.toLowerCase())) {
                serviceCategory.style.display = 'block';
                serviceCategory.style.animation = 'fadeInUp 0.4s ease-out';
            } else {
                serviceCategory.style.display = 'none';
            }
        });
    }
}

// Add CSS for animations
const additionalCSS = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeOutDown {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(30px); opacity: 0; }
}

.service-card.loading {
    pointer-events: none;
    opacity: 0.7;
}

.service-card.loading .service-details {
    animation: loadingPulse 0.8s ease-in-out infinite;
}

@keyframes loadingPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.popup-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #1e3c72;
}

.popup-features h4 {
    margin: 15px 0 10px 0;
    color: #1e3c72;
}

.popup-features ul {
    list-style: none;
    padding: 0;
}

.popup-features li {
    padding: 5px 0;
    color: #333;
}

.popup-features li::before {
    content: '✓ ';
    color: #51cf66;
    font-weight: bold;
}

.popup-actions {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.popup-enroll,
.popup-inquire {
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.popup-enroll {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1e3c72;
}

.popup-inquire {
    background: transparent;
    color: #1e3c72;
    border: 2px solid #1e3c72;
}

.popup-enroll:hover,
.popup-inquire:hover {
    transform: translateY(-2px);
}

.confirmation-icon {
    font-size: 3rem;
    color: #51cf66;
    margin-bottom: 15px;
}

.course-info {
    background: rgba(255, 255, 255, 0.5);
    padding: 15px;
    border-radius: 10px;
    margin: 15px 0;
}

.course-info strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 5px;
}

.course-info span {
    color: #ffd700;
    font-weight: 700;
}

.confirmation-close {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1e3c72;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s ease;
}

.confirmation-close:hover {
    transform: translateY(-2px);
}

.contact-icon {
    font-size: 2.5rem;
    color: #ffd700;
    margin-bottom: 15px;
}

.contact-close {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1e3c72;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s ease;
}

.contact-close:hover {
    transform: translateY(-2px);
}
`;

// Inject CSS
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalCSS;
document.head.appendChild(additionalStyleSheet);

// About Section Counter Manager
class AboutCounterManager {
    constructor() {
        this.counters = document.querySelectorAll('.about-stats .stat-number');
        this.animated = false;
        this.init();
    }

    init() {
        if (this.counters.length > 0) {
            this.setupIntersectionObserver();
        }
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateCounters();
                    this.animated = true;
                }
            });
        }, observerOptions);

        const aboutSection = document.querySelector('.about-stats');
        if (aboutSection) {
            observer.observe(aboutSection);
        }
    }

    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Manual control methods
    resetCounters() {
        this.counters.forEach(counter => {
            counter.textContent = '0';
        });
        this.animated = false;
    }

    animateCountersNow() {
        this.resetCounters();
        setTimeout(() => {
            this.animateCounters();
            this.animated = true;
        }, 100);
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupEventListeners();
            this.setupValidation();
        }
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Add input animations
        const inputs = this.form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }

    setupValidation() {
        const inputs = this.form.querySelectorAll('.form-control[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldGroup = field.closest('.form-group');

        // Remove existing error
        const existingError = fieldGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Remove error class
        field.classList.remove('error');

        // Validate based on field type
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value.replace(/[^0-9]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        if (!isValid) {
            field.classList.add('error');
            this.showError(fieldGroup, errorMessage);
        }

        return isValid;
    }

    showError(fieldGroup, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff6b6b';
        errorDiv.style.fontSize = '0.85rem';
        errorDiv.style.marginTop = '5px';
        fieldGroup.appendChild(errorDiv);
    }

    handleSubmit() {
        const inputs = this.form.querySelectorAll('.form-control[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        // Check terms checkbox
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            isValid = false;
            this.showError(termsCheckbox.parentElement, 'You must agree to the terms and conditions');
        }

        if (isValid) {
            this.submitForm();
        }
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = this.form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            this.form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showSuccessMessage() {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
        `;

        // Style the success message
        successDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.9), rgba(255, 215, 0, 0.8));
            color: #1e3c72;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            min-width: 300px;
            animation: slideInUp 0.5s ease-out;
        `;

        const successContent = successDiv.querySelector('.success-content');
        successContent.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        `;

        const icon = successDiv.querySelector('i');
        icon.style.cssText = `
            font-size: 3rem;
            color: #1e3c72;
        `;

        const h4 = successDiv.querySelector('h4');
        h4.style.cssText = `
            margin: 0;
            font-size: 1.3rem;
            font-weight: 700;
            color: #1e3c72;
        `;

        const p = successDiv.querySelector('p');
        p.style.cssText = `
            margin: 0;
            font-size: 0.95rem;
            color: #1e3c72;
        `;

        document.body.appendChild(successDiv);

        // Remove message after 3 seconds
        setTimeout(() => {
            successDiv.style.animation = 'fadeOutDown 0.5s ease-out';
            setTimeout(() => {
                document.body.removeChild(successDiv);
            }, 500);
        }, 3000);
    }
}

// Image Gallery Manager
class GalleryManager {
    constructor() {
        this.filters = document.querySelectorAll('.filter-btn');
        this.items = document.querySelectorAll('.gallery-item-wrapper');
        this.lightbox = document.querySelector('.gallery-lightbox');
        this.lightboxImg = document.querySelector('.lightbox-img');
        this.closeBtn = document.querySelector('.lightbox-close');
        this.prevBtn = document.querySelector('.lightbox-prev');
        this.nextBtn = document.querySelector('.lightbox-next');

        this.currentIndex = 0;
        this.visibleItems = [];

        this.init();
    }

    init() {
        if (!document.querySelector('.gallery-section')) {
            return; // Not on gallery page
        }

        this.setupFiltering();
        this.setupLightbox();
    }

    setupFiltering() {
        this.filters.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state in buttons
                this.filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Filter elements
                this.items.forEach(item => {
                    const category = item.getAttribute('data-category');

                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.remove('hide');
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hide');
                    }
                });

                this.updateVisibleItems();
            });
        });
    }

    setupLightbox() {
        // Build the list of active elements
        this.updateVisibleItems();

        this.items.forEach((item, index) => {
            const card = item.querySelector('.gallery-img-box');
            if (!card) return;

            card.addEventListener('click', () => {
                this.updateVisibleItems();
                const itemWrapper = card.closest('.gallery-item-wrapper');
                this.currentIndex = this.visibleItems.indexOf(itemWrapper);
                this.openLightbox(itemWrapper);
            });
        });

        // Close Lightbox
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.closeLightbox();
                }
            });
        }

        // Navigate Left/Right
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateLightbox(-1);
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateLightbox(1);
            });
        }

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox || !this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
            if (e.key === 'ArrowRight') this.navigateLightbox(1);
        });
    }

    updateVisibleItems() {
        this.visibleItems = Array.from(this.items).filter(item => !item.classList.contains('hide'));
    }

    openLightbox(itemWrapper) {
        if (!itemWrapper) return;

        const img = itemWrapper.querySelector('.gallery-img');

        if (this.lightboxImg && img) {
            this.lightboxImg.src = img.src;
        }

        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scrolling

        const content = this.lightbox.querySelector('.lightbox-content');
        if (content) {
            content.classList.remove('lightbox-fade-in');
            void content.offsetWidth; // Trigger reflow
            content.classList.add('lightbox-fade-in');
        }
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scrolling
    }

    navigateLightbox(direction) {
        this.updateVisibleItems();
        if (this.visibleItems.length <= 1) return;

        this.currentIndex = (this.currentIndex + direction + this.visibleItems.length) % this.visibleItems.length;
        const nextItem = this.visibleItems[this.currentIndex];

        // Animated transition during switch
        const content = this.lightbox.querySelector('.lightbox-content');
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.openLightbox(nextItem);
                content.style.opacity = '1';
                content.style.transform = 'scale(1)';
            }, 150);
        } else {
            this.openLightbox(nextItem);
        }
    }
}

// Video Gallery Manager
class VideoGalleryManager {
    constructor() {
        this.filters = document.querySelectorAll('.filter-btn');
        this.items = document.querySelectorAll('.gallery-item-wrapper');
        this.lightbox = document.querySelector('.video-lightbox');
        this.lightboxVideo = document.querySelector('.lightbox-video');
        this.closeBtn = document.querySelector('.video-lightbox .lightbox-close');
        this.prevBtn = document.querySelector('.video-lightbox .lightbox-prev');
        this.nextBtn = document.querySelector('.video-lightbox .lightbox-next');

        this.currentIndex = 0;
        this.visibleItems = [];

        this.init();
    }

    init() {
        if (!this.lightbox || !document.querySelector('.gallery-grid')) {
            return; // Not on video gallery page
        }

        this.setupFiltering();
        this.setupLightbox();
    }

    setupFiltering() {
        this.filters.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                this.items.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.remove('hide');
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hide');
                    }
                });

                this.updateVisibleItems();
            });
        });
    }

    setupLightbox() {
        this.updateVisibleItems();

        this.items.forEach(item => {
            const thumbnailBox = item.querySelector('.video-thumbnail-box');
            if (!thumbnailBox) return;

            thumbnailBox.addEventListener('click', () => {
                this.updateVisibleItems();
                this.currentIndex = this.visibleItems.indexOf(item);
                this.openLightbox(item);
            });
        });

        // Close controls
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) this.closeLightbox();
            });
        }

        // Navigate prev/next
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateLightbox(-1);
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateLightbox(1);
            });
        }

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox || !this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
            if (e.key === 'ArrowRight') this.navigateLightbox(1);
        });
    }

    updateVisibleItems() {
        this.visibleItems = Array.from(this.items).filter(item => !item.classList.contains('hide'));
    }

    openLightbox(itemWrapper) {
        if (!itemWrapper || !this.lightboxVideo) return;

        const thumbnailBox = itemWrapper.querySelector('.video-thumbnail-box');
        if (!thumbnailBox) return;

        const videoUrl = thumbnailBox.getAttribute('data-video-url');
        if (!videoUrl) return;

        // Set video src with autoplay parameter
        this.lightboxVideo.src = `${videoUrl}?autoplay=1&rel=0&showinfo=0&modestbranding=1`;

        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop page scroll

        const content = this.lightbox.querySelector('.lightbox-content');
        if (content) {
            content.classList.remove('lightbox-fade-in');
            void content.offsetWidth; // Force browser reflow
            content.classList.add('lightbox-fade-in');
        }
    }

    closeLightbox() {
        if (this.lightbox) this.lightbox.classList.remove('active');
        if (this.lightboxVideo) this.lightboxVideo.src = ''; // Kill video audio instantly
        document.body.style.overflow = ''; // Restore page scroll
    }

    navigateLightbox(direction) {
        this.updateVisibleItems();
        if (this.visibleItems.length <= 1) return;

        this.currentIndex = (this.currentIndex + direction + this.visibleItems.length) % this.visibleItems.length;
        const nextItem = this.visibleItems[this.currentIndex];

        const content = this.lightbox.querySelector('.lightbox-content');
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.openLightbox(nextItem);
                content.style.opacity = '1';
                content.style.transform = 'scale(1)';
            }, 150);
        } else {
            this.openLightbox(nextItem);
        }
    }
}

// Verification Portal Manager
class VerificationPortalManager {
    constructor() {
        this.form = document.getElementById('verifyForm');
        this.input = document.getElementById('regNo');
        this.resultBox = document.getElementById('verifyResult');

        // Mock secure educational database supporting both Admissions, Marksheets, and Scholarships
        this.studentsDb = {
            // Universal Master Key for quick verification testing (all fields mapped)
            'VCA/2026/1001': {
                name: 'Rahul Kumar',
                father: 'Suresh Kumar',
                course: 'Web Development & Modern Programming',
                date: '12 Aug 2004',
                grade: 'A+',
                score: '94 / 100',
                award: '100% Scholarship (Free Web Dev Course)',
                examDate: '24 May 2026 (10:00 AM - 01:00 PM)',
                center: 'Vijay Academy Main Campus, Ballia, UP',
                dob: '12 Aug 2004',
                mobile: '+91 8858381213',
                status: 'VERIFIED / ACTIVE / QUALIFIED'
            },
            // Scholarship Test Records
            'VCA/SCH/2026/01': {
                name: 'Rahul Kumar',
                father: 'Suresh Kumar',
                score: '94 / 100',
                award: '100% Scholarship (Free Web Dev Course)',
                status: 'QUALIFIED'
            },
            'VCA/SCH/2026/02': {
                name: 'Priya Singh',
                father: 'Rajesh Singh',
                score: '91 / 100',
                award: '75% Scholarship Fee Waiver',
                status: 'QUALIFIED'
            },
            'VCA/SCH/2026/03': {
                name: 'Amit Sharma',
                father: 'Ramesh Sharma',
                score: '88 / 100',
                award: '50% Scholarship Fee Waiver',
                status: 'QUALIFIED'
            },
            'VCA/SCH/2026/04': {
                name: 'Vinay Verma',
                father: 'Omprakash Verma',
                score: '96 / 100',
                award: '100% Scholarship (Free Python Course)',
                status: 'QUALIFIED'
            },
            // Identity Card Records
            'VCA/ID/2026/01': {
                name: 'Rahul Kumar',
                father: 'Suresh Kumar',
                course: 'Web Development & Modern Programming',
                dob: '12 Aug 2004',
                mobile: '+91 8858381213',
                status: 'VERIFIED STUDENT'
            },
            'VCA/ID/2026/02': {
                name: 'Priya Singh',
                father: 'Rajesh Singh',
                course: 'Advanced Programming & Software Engineering',
                dob: '05 Mar 2005',
                mobile: '+91 9889747645',
                status: 'VERIFIED STUDENT'
            },
            'VCA/ID/2026/03': {
                name: 'Amit Sharma',
                father: 'Ramesh Sharma',
                course: 'Computer Basics & Professional Office Productivity',
                dob: '20 Oct 2003',
                mobile: '+91 7654321098',
                status: 'VERIFIED STUDENT'
            },
            'VCA/ID/2026/04': {
                name: 'Vinay Verma',
                father: 'Omprakash Verma',
                course: 'Full Stack App Development & Cloud Systems',
                dob: '15 Dec 2004',
                mobile: '+91 8765432109',
                status: 'VERIFIED STUDENT'
            },
            // Admit Card Records
            'VCA/AC/2026/01': {
                name: 'Rahul Kumar',
                father: 'Suresh Kumar',
                course: 'Web Development & Modern Programming',
                examDate: '24 May 2026 (10:00 AM - 01:00 PM)',
                center: 'Vijay Academy Main Campus, Ballia, UP',
                status: 'ADMIT CARD GENERATED'
            },
            'VCA/AC/2026/02': {
                name: 'Priya Singh',
                father: 'Rajesh Singh',
                course: 'Advanced Programming & Software Engineering',
                examDate: '24 May 2026 (10:00 AM - 01:00 PM)',
                center: 'Vijay Academy Main Campus, Ballia, UP',
                status: 'ADMIT CARD GENERATED'
            },
            'VCA/AC/2026/03': {
                name: 'Amit Sharma',
                father: 'Ramesh Sharma',
                course: 'Computer Basics & Professional Office Productivity',
                examDate: '25 May 2026 (02:00 PM - 05:00 PM)',
                center: 'Vijay Academy IT Lab-B, Ballia, UP',
                status: 'ADMIT CARD GENERATED'
            },
            'VCA/AC/2026/04': {
                name: 'Vinay Verma',
                father: 'Omprakash Verma',
                course: 'Full Stack App Development & Cloud Systems',
                examDate: '26 May 2026 (10:00 AM - 01:00 PM)',
                center: 'Vijay Academy Main Campus, Ballia, UP',
                status: 'ADMIT CARD GENERATED'
            },
            // Admission Records
            'VCA/ADM/2026/01': {
                name: 'Rahul Kumar',
                father: 'Suresh Kumar',
                course: 'Web Development & Modern Programming',
                date: '10 Jan 2026',
                status: 'ACTIVE & CONFIRMED'
            },
            'VCA/ADM/2026/02': {
                name: 'Priya Singh',
                father: 'Rajesh Singh',
                course: 'Advanced Programming & Software Engineering',
                date: '12 Jan 2026',
                status: 'ACTIVE & CONFIRMED'
            },
            'VCA/ADM/2026/03': {
                name: 'Amit Sharma',
                father: 'Ramesh Sharma',
                course: 'Computer Basics & Professional Office Productivity',
                date: '15 Jan 2026',
                status: 'ACTIVE & CONFIRMED'
            },
            'VCA/ADM/2026/04': {
                name: 'Vinay Verma',
                father: 'Omprakash Verma',
                course: 'Full Stack App Development & Cloud Systems',
                date: '18 Jan 2026',
                status: 'ACTIVE & CONFIRMED'
            },
            // Registration Formats
            'VCA/2026/101': {
                name: 'Rahul Kumar',
                father: 'Suresh Kumar',
                course: 'Web Development & Modern Programming',
                date: '10 Jan 2026',
                grade: 'A+',
                status: 'VERIFIED'
            },
            'VCA/2026/102': {
                name: 'Priya Singh',
                father: 'Rajesh Singh',
                course: 'Advanced Programming & Software Engineering',
                date: '12 Jan 2026',
                grade: 'A+',
                status: 'VERIFIED'
            },
            'VCA/2026/103': {
                name: 'Amit Sharma',
                father: 'Ramesh Sharma',
                course: 'Computer Basics & Professional Office Productivity',
                date: '15 Jan 2026',
                grade: 'A',
                status: 'VERIFIED'
            },
            'VCA/2026/104': {
                name: 'Vinay Verma',
                father: 'Omprakash Verma',
                course: 'Full Stack App Development & Cloud Systems',
                date: '18 Jan 2026',
                grade: 'A++',
                status: 'VERIFIED'
            }
        };

        this.init();
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => this.handleVerification(e));
    }

    handleVerification(e) {
        e.preventDefault();
        const regVal = this.input.value.trim().toUpperCase();
        if (!regVal) return;

        const isModalResult = this.resultBox.classList.contains('modal');
        let resultModal = null;
        if (isModalResult && window.bootstrap?.Modal) {
            resultModal = bootstrap.Modal.getOrCreateInstance(this.resultBox);
            resultModal.show();
        } else {
            // Show result box and loader, hide others
            this.resultBox.classList.remove('d-none');
        }
        const loader = this.resultBox.querySelector('.result-loader');
        const details = this.resultBox.querySelector('.result-details');
        const error = this.resultBox.querySelector('.result-error');

        loader.classList.remove('d-none');
        details.classList.add('d-none');
        error.classList.add('d-none');

        // Simulate secure server & database handshake delay (1.2 seconds)
        setTimeout(() => {
            loader.classList.add('d-none');
            const record = this.studentsDb[regVal];

            if (record) {
                // Populate result layout safely checking existence of elements
                const elName = document.getElementById('resName');
                if (elName) elName.textContent = record.name || '';

                const elFather = document.getElementById('resFather');
                if (elFather) elFather.textContent = record.father || 'N/A';

                const elReg = document.getElementById('resReg');
                if (elReg) elReg.textContent = regVal;

                const elCourse = document.getElementById('resCourse');
                if (elCourse) elCourse.textContent = record.course || '';

                const elDate = document.getElementById('resDate');
                if (elDate) elDate.textContent = record.date || 'N/A';

                const elGrade = document.getElementById('resGrade');
                if (elGrade) elGrade.textContent = record.grade || 'A+';

                const elStatus = document.getElementById('resStatus');
                if (elStatus) elStatus.textContent = record.status || 'VERIFIED';

                const elScore = document.getElementById('resScore');
                if (elScore) elScore.textContent = record.score || '';

                const elAward = document.getElementById('resAward');
                if (elAward) elAward.textContent = record.award || '';

                const elExamDate = document.getElementById('resExamDate');
                if (elExamDate) elExamDate.textContent = record.examDate || '';

                const elCenter = document.getElementById('resCenter');
                if (elCenter) elCenter.textContent = record.center || '';

                const elDOB = document.getElementById('resDOB');
                if (elDOB) elDOB.textContent = record.dob || '';

                const elMobile = document.getElementById('resMobile');
                if (elMobile) elMobile.textContent = record.mobile || '';

                // Show details container
                details.classList.remove('d-none');
            } else {
                // Show secure fallback error screen
                error.classList.remove('d-none');
            }
        }, 1200);
    }
}

/* ========================================================================
   Login Page Functionality
   ======================================================================== */

// Tab switching functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Set Admin tab as active by default (first tab, index 0)
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
    }
    if (tabContents.length > 0) {
        tabContents[0].classList.add('active');
    }
}

// Student Login Form Handler
function setupStudentLogin() {
    const form = document.getElementById('studentLoginForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('studentEmail').value;
        const password = document.getElementById('studentPassword').value;

        if (!email || !password) {
            showAlert('Please fill in all fields', 'danger');
            return;
        }

        // Show loading state
        const btn = this.querySelector('.btn-login');
        btn.classList.add('loading');
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            showAlert('✓ Successfully logged in! Redirecting to dashboard...', 'success');

            this.reset();
            btn.classList.remove('loading');
            btn.disabled = false;

            setTimeout(() => {
                window.location.href = './index.html';
            }, 2000);
        }, 1500);
    });
}

// Admin Login Form Handler
function setupAdminLogin() {
    const form = document.getElementById('adminLoginForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        const securityCode = document.getElementById('adminSecurityCode').value;

        if (!username || !password || !securityCode) {
            showAlert('Please fill in all fields', 'danger');
            return;
        }

        // Show loading state
        const btn = this.querySelector('.btn-login');
        btn.classList.add('loading');
        btn.disabled = true;

        // Simulate API call with security verification
        setTimeout(() => {
            // Check credentials (demo: admin/admin123/2026)
            if (username === 'admin' && password === 'admin123' && securityCode === '2026') {
                showAlert('✓ Welcome Admin! Redirecting to admin panel...', 'success');

                setTimeout(() => {
                    window.location.href = './index.html';
                }, 2000);
            } else {
                showAlert('✗ Invalid credentials. Please try again.', 'danger');
                btn.classList.remove('loading');
                btn.disabled = false;
                this.reset();
            }
        }, 1500);
    });
}

// Show Alert Function
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert-login alert-${type}-login`;
    alertDiv.innerHTML = message;

    const container = document.querySelector('.login-container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
    }

    setTimeout(() => {
        alertDiv.style.animation = 'slideUp 0.3s ease-out forwards';
        setTimeout(() => alertDiv.remove(), 300);
    }, 5000);
}

// Scroll to Top Button
function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Setup Login Button (on index page)
function setupLoginButton() {
    const loginBtn = document.getElementById('loginDropdown');
    if (!loginBtn) return;

    loginBtn.addEventListener('click', () => {
        window.location.href = './login.html';
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    setupLoginButton();
    initTabs();
    setupStudentLogin();
    setupAdminLogin();
    setupScrollToTop();
});

// Initialize All Managers Safely
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AboutCounterManager !== 'undefined') {
        try { new AboutCounterManager(); } catch (e) { console.error('AboutCounterManager init failed:', e); }
    }
    if (typeof HeroOrbitManager !== 'undefined') {
        try { new HeroOrbitManager(); } catch (e) { console.error('HeroOrbitManager init failed:', e); }
    }
    if (typeof MobileMenuManager !== 'undefined') {
        try { new MobileMenuManager(); } catch (e) { console.error('MobileMenuManager init failed:', e); }
    }
    if (typeof TestimonialSlider !== 'undefined') {
        try { new TestimonialSlider(); } catch (e) { console.error('TestimonialSlider init failed:', e); }
    }
    if (typeof ContactFormManager !== 'undefined') {
        try { new ContactFormManager(); } catch (e) { console.error('ContactFormManager init failed:', e); }
    }
    if (typeof GalleryManager !== 'undefined') {
        try { new GalleryManager(); } catch (e) { console.error('GalleryManager init failed:', e); }
    }
    if (typeof VideoGalleryManager !== 'undefined') {
        try { new VideoGalleryManager(); } catch (e) { console.error('VideoGalleryManager init failed:', e); }
    }
    if (typeof VerificationPortalManager !== 'undefined') {
        try { new VerificationPortalManager(); } catch (e) { console.error('VerificationPortalManager init failed:', e); }
    }
    console.log('All available managers checked and initialized safely');
});

/* ==========================================
   🎬 TESTIMONIALS SLIDER & FAQ ACCORDION INIT
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Testimonials Swiper Initialization
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonials-swiper')) {
        try {
            new Swiper('.testimonials-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
            });
        } catch (e) {
            console.error('Testimonials Swiper initialization failed:', e);
        }
    }


});

/* ==========================================
   🎯 FLOATING BUTTONS FUNCTIONALITY
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to Top Button Handler
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        // Show/Hide button on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top on button click
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Enhanced Click Animation for Floating Buttons
    const floatingBtns = document.querySelectorAll('.float-btn');
    floatingBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Tooltip-like text on hover
    floatingBtns.forEach(btn => {
        const tooltip = btn.getAttribute('title');
        if (tooltip) {
            btn.addEventListener('mouseenter', function () {
                // Could add tooltip styling here
            });
        }
    });
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .float-btn {
        position: relative;
        overflow: hidden;
    }
    
    .float-btn .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @media (prefers-reduced-motion: reduce) {
        .float-btn {
            transition: none;
        }
        
        .float-btn:hover {
            transform: none;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const modalBtns = document.querySelectorAll('.certificate-modal-btn');

    // Open modal when view button is clicked
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const imageUrl = this.getAttribute('data-image');
            modalImage.src = imageUrl;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

// Topper Popup - auto show on page load
document.addEventListener('DOMContentLoaded', function () {
    const topperPopup = document.getElementById('topperPopup');
    const topperClose = document.getElementById('topperPopupClose');

    if (!topperPopup) return;

    // Show popup after 1 second delay
    setTimeout(function () {
        topperPopup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 1000);

    function closeTopperPopup() {
        topperPopup.classList.remove('show');
        document.body.style.overflow = '';
    }

    topperClose.addEventListener('click', closeTopperPopup);

    topperPopup.addEventListener('click', function (e) {
        if (e.target === topperPopup) {
            closeTopperPopup();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && topperPopup.classList.contains('show')) {
            closeTopperPopup();
        }
    });
});
