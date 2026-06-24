import React from 'react'

export default function ContactCTASection() {
    return (
        <div>
            <section className="all-services-section" id="all-services">
                <div className="container">
                {/* Contact CTA */}
                <div className="services-contact-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">Need Help Choosing the Right Course?</h3>
                        <p className="cta-description">Our experts are here to guide you through your educational journey</p>
                        <div className="cta-buttons">
                            <button className="cta-primary">
                                <i className="fas fa-phone" />
                                Call Now: +91 1234567890
                            </button>
                            <button className="cta-secondary">
                                <i className="fas fa-envelope" />
                                Email Us
                            </button>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </div>
    )
}
