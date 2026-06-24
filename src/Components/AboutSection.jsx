import React from 'react'

export default function AboutSection() {
    return (
        <>
            {/* About Section */}
            <section className="about-section" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">About Vijay Computer Academy</h2>
                        <p className="section-subtitle text-white">
                            Empowering Rural Students with Quality Computer Education
                        </p>
                    </div>
                    <div className="about-content">
                        <div className="row align-items-center">
                            {/* Left Side */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="about-text">
                                    <h3 className="about-heading">
                                        Transforming Lives Through Digital Education
                                    </h3>
                                    <p className="about-description">
                                        Vijay Academy is a leading computer education institute dedicated to
                                        providing quality digital literacy and technical skills to rural students.
                                        Since 2009, we have been helping students from villages and small towns
                                        build successful careers through modern computer education.
                                    </p>
                                    <p className="about-description">
                                        Our mission is to make computer education affordable, practical, and
                                        career-oriented so that every student can gain confidence, improve
                                        technical knowledge, and achieve better career opportunities in the
                                        digital world.
                                    </p>
                                    <div className="about-highlights">
                                        <div className="highlight-item">
                                            <div className="highlight-icon">
                                                <i className="fas fa-graduation-cap" />
                                            </div>
                                            <div className="highlight-content">
                                                <h4>15+ Years of Excellence</h4>
                                                <p>Successfully trained more than 5000 students</p>
                                            </div>
                                        </div>
                                        <div className="highlight-item">
                                            <div className="highlight-icon">
                                                <i className="fas fa-certificate" />
                                            </div>
                                            <div className="highlight-content">
                                                <h4>Certified Courses</h4>
                                                <p>Industry-recognized and career-oriented programs</p>
                                            </div>
                                        </div>
                                        <div className="highlight-item">
                                            <div className="highlight-icon">
                                                <i className="fas fa-users" />
                                            </div>
                                            <div className="highlight-content">
                                                <h4>Expert Faculty</h4>
                                                <p>Experienced trainers dedicated to student success</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side */}
                            <div className="col-lg-6">
                                <div className="about-visual">
                                    <div className="academy-image">
                                        <img src="./assets/logo/about_logo.png" alt="Vijay Academy Campus" className="img-fluid rounded-3" />
                                    </div>
                                    <div className="about-stats">
                                        <div className="stat-card">
                                            <div className="stat-icon">
                                                <i className="fas fa-user-graduate" />
                                            </div>
                                            <div className="stat-number" data-target={5000}>5000</div>
                                            <div className="stat-label">Happy Students</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon">
                                                <i className="fas fa-book-open" />
                                            </div>
                                            <div className="stat-number" data-target={50}>50</div>
                                            <div className="stat-label">Courses</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon">
                                                <i className="fas fa-clock" />
                                            </div>
                                            <div className="stat-number" data-target={15}>15</div>
                                            <div className="stat-label">Years Experience</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon">
                                                <i className="fas fa-trophy" />
                                            </div>
                                            <div className="stat-number" data-target={100}>100</div>
                                            <div className="stat-label">Success Rate %</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
