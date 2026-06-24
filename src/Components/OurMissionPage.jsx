import React from 'react'

export default function OurMissionPage() {
    return (
        <div>
            {/* Our Mission Section */}
            <section className="mission-section" id="mission">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="section-subtitle text-white">Empowering Rural Students Through Technology</p>
                    </div>
                    <div className="mission-container">
                        <div className="row g-5 align-items-center">
                            {/* Left Side: Content */}
                            <div className="col-lg-6">
                                <div className="mission-content">
                                    <h3 className="mission-heading">Empowering Rural India</h3>
                                    <p className="mission-description">
                                        At Vijay Academy, our mission is to bridge the digital divide by providing quality
                                        computer education to students in rural areas. We believe that every student deserves
                                        access to modern technology and practical skills that can transform their lives and
                                        communities.
                                    </p>
                                    <div className="mission-points">
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-graduation-cap" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Quality Education</h4>
                                                <p>Providing industry-standard computer education with practical training and
                                                    real-world projects.</p>
                                            </div>
                                        </div>
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-hand-holding-heart" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Affordable Learning</h4>
                                                <p>Offering affordable courses to ensure financial constraints don't hinder
                                                    educational opportunities.</p>
                                            </div>
                                        </div>
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-lightbulb" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Skill Development</h4>
                                                <p>Focusing on practical skills that lead to employment and entrepreneurship
                                                    opportunities.</p>
                                            </div>
                                        </div>
                                        <div className="mission-point">
                                            <div className="point-icon">
                                                <i className="fas fa-users" />
                                            </div>
                                            <div className="point-content">
                                                <h4>Community Building</h4>
                                                <p>Creating a network of skilled professionals who contribute to rural
                                                    development.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mission-cta">
                                        <a href="#admission" className="btn btn-primary">Join Our Mission</a>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side: Image */}
                            <div className="col-lg-6">
                                <div className="mission-image-wrapper">
                                    <div className="mission-image">
                                        <img src="assets/logo/logo.png" alt="Our Mission" className="img-fluid" />
                                    </div>
                                    <div className="mission-image-overlay">
                                        <div className="overlay-content">
                                            <h4>Since 2015</h4>
                                            <p>Serving Rural Communities</p>
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
