import React from 'react'

export default function FeaturesSection() {
    return (
        <div>

            <section className="about-section" id="about">
                <div className="container">
                {/* Features */}
                <div className="academy-features">
                    <h3 className="features-title">Why Choose Vijay Academy?</h3>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-laptop-code" />
                                </div>
                                <h4 className="feature-title">Practical Training</h4>
                                <p className="feature-description">
                                    Hands-on learning with real-world projects and modern software
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-rupee-sign" />
                                </div>
                                <h4 className="feature-title">Affordable Fees</h4>
                                <p className="feature-description">
                                    Quality education at reasonable fees with flexible payment options
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-clock" />
                                </div>
                                <h4 className="feature-title">Flexible Timings</h4>
                                <p className="feature-description">
                                    Morning, evening, and weekend batches available
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-award" />
                                </div>
                                <h4 className="feature-title">Certified Programs</h4>
                                <p className="feature-description">
                                    Government-recognized certifications accepted nationwide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        </div>
    )
}
