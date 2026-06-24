import React from 'react'

export default function OurVisionPage() {
    return (
        <div>
            {/* Our Vision Section */}
            <section className="mission-section" id="vision">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Vision</h2>
                        <p className="section-subtitle text-white">Building a Digitally Skilled Rural India</p>
                    </div>
                    <div className="mission-container">
                        <div className="row g-5 align-items-center">
                            {/* Left Side: Content */}
                            <div className="col-lg-6">
                                <div className="mission-content">
                                    <h3 className="mission-heading">Creating Future Leaders</h3>
                                    <p className="mission-description">
                                        At Vijay Academy, our vision is to create a future where every rural student has access
                                        to modern computer education, digital skills, and career opportunities. We aim to build
                                        a digitally empowered society by helping students gain confidence, knowledge, and
                                        practical
                                        experience for a successful future.
                                    </p>
                                    <div className="mission-points">
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-laptop-code" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Digital Empowerment</h4>
                                                <p>Encouraging students to become confident in technology and modern digital
                                                    tools.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-briefcase" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Career Growth</h4>
                                                <p>Preparing students for jobs, freelancing, and entrepreneurship opportunities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-school" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Modern Learning</h4>
                                                <p>Providing practical and industry-oriented education for real-world success.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-globe" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Rural Development</h4>
                                                <p>Creating a strong, educated, and digitally connected rural community.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mission-cta">
                                        <a href="./computer-course.html" className="btn btn-primary">Explore Course</a>
                                        <a href="./contact.html" className="btn btn-outline-secondary">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side: Image */}
                            <div className="col-lg-6">
                                <div className="mission-image-wrapper">
                                    <div className="mission-image">
                                        <img src="assets/logo/logo.png" alt="Our Vision" className="img-fluid" />
                                    </div>
                                    <div className="mission-image-overlay">
                                        <div className="overlay-content">
                                            <h4>Future Ready</h4>
                                            <p>Empowering Rural Students</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
