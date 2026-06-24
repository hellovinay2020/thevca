import React from 'react'

export default function LibrarySection() {
    return (
        <div>
            {/* Smart Library  Section */}
            <section className="all-services-section library-page" id="all-services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Smart Library</h2>
                        <p className="section-subtitle">
                            Get complete educational information, admission guidance,
                            exam details, and online learning support services easily in one place.
                        </p>
                    </div>
                    {/* Library Facilities Grid */}
                    <div className="service-category-expanded">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-graduation-cap" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">
                                    Educational &amp; Online Services
                                </h3>
                                <p className="category-description">
                                    Admission, scholarship, exam forms, and digital education support services
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Library Facilities Grid */}
                    <div className="service-category-expanded">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-star" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Library Facilities</h3>
                                <p className="category-description">
                                    All essential facilities available for better study and learning
                                </p>
                            </div>
                        </div>
                        <div className="services-grid">
                            {/* 24 Hours */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">24 Hours Facility</h4>
                                    <span className="service-level professional">24/7 Access</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Study anytime with uninterrupted access
                                    </p>
                                    <ul className="service-features">
                                        <li>24x7 Study Support</li>
                                        <li>Comfortable Seating</li>
                                        <li>Peaceful Environment</li>
                                        <li>Student Friendly Space</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Join Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Free WiFi */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Free Wi-Fi Facility</h4>
                                    <span className="service-level advanced">High Speed</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        High-speed internet for online study
                                    </p>
                                    <ul className="service-features">
                                        <li>Unlimited Internet</li>
                                        <li>5G Connectivity</li>
                                        <li>Fast Browsing Speed</li>
                                        <li>Online Learning Support</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Connect Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Books */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Book Facility</h4>
                                    <span className="service-level basic">Resources</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Educational books and study materials
                                    </p>
                                    <ul className="service-features">
                                        <li>Competitive Exam Books</li>
                                        <li>Reference Materials</li>
                                        <li>Latest Editions</li>
                                        <li>Daily Study Resources</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Explore Books <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Parking */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Free Parking Facility</h4>
                                    <span className="service-level basic">Parking</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Safe and secure vehicle parking
                                    </p>
                                    <ul className="service-features">
                                        <li>Two-Wheeler Parking</li>
                                        <li>Safe Parking Area</li>
                                        <li>Easy Accessibility</li>
                                        <li>Security Support</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        View Map <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Water */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Pure Drinking Water</h4>
                                    <span className="service-level basic">RO Water</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Clean and healthy drinking water
                                    </p>
                                    <ul className="service-features">
                                        <li>RO Purified Water</li>
                                        <li>Cold Water Facility</li>
                                        <li>Hygienic Environment</li>
                                        <li>Available All Day</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Stay Hydrated <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Magazine */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Magazine &amp; Newspaper</h4>
                                    <span className="service-level basic">Reading</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Daily news and educational reading materials
                                    </p>
                                    <ul className="service-features">
                                        <li>Daily Newspapers</li>
                                        <li>Current Affairs</li>
                                        <li>Educational Magazines</li>
                                        <li>Career Updates</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Read Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Environment */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Peaceful Environment</h4>
                                    <span className="service-level professional">Zen Zone</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Calm and focused study atmosphere
                                    </p>
                                    <ul className="service-features">
                                        <li>Silent Study Area</li>
                                        <li>Comfortable Seating</li>
                                        <li>Focused Learning Space</li>
                                        <li>Positive Environment</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Reserve Desk <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Charging */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Charging Facility</h4>
                                    <span className="service-level basic">Power</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Convenient charging points for devices
                                    </p>
                                    <ul className="service-features">
                                        <li>Mobile Charging Points</li>
                                        <li>Laptop Support</li>
                                        <li>Power Backup</li>
                                        <li>Easy Access</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Power Up <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact CTA */}
                    <div className="services-contact-cta">
                        <div className="cta-content">
                            <h3 className="cta-title">
                                Start Your Learning Journey With Us
                            </h3>
                            <p className="cta-description">
                                Join our modern library and study center for focused learning, comfort, and success.
                            </p>
                            <div className="cta-buttons">
                                <button className="cta-primary">
                                    <i className="fas fa-phone" />
                                    Call Now: +91 8858381213 | +91 9889747645
                                </button>
                                <button className="cta-secondary">
                                    <i className="fas fa-envelope" />
                                    vijaycomputeracademy25@gmail.com
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
