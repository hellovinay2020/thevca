import React from 'react'

export default function CTASection() {
    return (
        <div>
            <section className="about-section" id="about">
                <div className="container">
                {/* CTA */}
                <div className="about-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Start Your Journey with Vijay Academy
                        </h3>
                        <p className="cta-description">
                            Join thousands of students who transformed their future through
                            quality computer education
                        </p>
                        <div className="cta-buttons">
                            <a href="#admission" className="btn btn-primary">Enroll Now</a>
                            <a href="#contact" className="btn btn-outline-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </div>
    )
}
