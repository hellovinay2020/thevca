import React from 'react'

export default function MissionVision() {
    return (
        <div>
            <section className="about-section" id="about">
                <div className="container">
                {/* Mission Vision */}
                <div className="mission-vision">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="mission-card">
                                <div className="card-icon">
                                    <i className="fas fa-bullseye" />
                                </div>
                                <h3 className="card-title">Our Mission</h3>
                                <p className="card-text">
                                    To provide quality computer education and digital literacy to rural
                                    students and help them build successful careers in the modern digital era.
                                </p>
                                <div className="mission-vision-link">
                                    <a href="./our-mission.html" className="read-more-link">
                                        <span>Read More</span>
                                        <i className="fas fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vision-card">
                                <div className="card-icon">
                                    <i className="fas fa-eye" />
                                </div>
                                <h3 className="card-title">Our Vision</h3>
                                <p className="card-text">
                                    To become one of the most trusted computer education institutes in
                                    rural India through innovation, quality teaching, and student success.
                                </p>
                                <div className="mission-vision-link">
                                    <a href="./our-vision.html" className="read-more-link">
                                        <span>Read More</span>
                                        <i className="fas fa-arrow-right" />
                                    </a>
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
