import React from 'react'

export default function TitutionClassesSection() {
    return (
        <div>
            <section className="all-services-section" id="all-services">
                <div className="container">
                {/* Tuition Classes */}
                <div className="service-category-expanded">
                    <div className="category-header">
                        <div className="category-icon">
                            <i className="fas fa-graduation-cap" />
                        </div>
                        <div className="category-info">
                            <h3 className="category-title">Tuition Classes</h3>
                            <p className="category-description">Complete academic support for 1st to 8th grade students</p>
                        </div>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">1st to 8th Grade</h4>
                                <span className="service-level education">Education</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Complete academic support for all classes</p>
                                <div className="service-meta">
                                    <span className="duration">Yearly</span>
                                    <span className="price">?1,000/month</span>
                                </div>
                                <ul className="service-features">
                                    <li>All subjects covered</li>
                                    <li>Regular tests</li>
                                    <li>Homework help</li>
                                    <li>Progress tracking</li>
                                </ul>
                                <button className="enroll-btn">Enroll Now</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Mathematics</h4>
                                <span className="service-level subject">Subject</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Specialized mathematics coaching</p>
                                <div className="service-meta">
                                    <span className="duration">Yearly</span>
                                    <span className="price">?800/month</span>
                                </div>
                                <ul className="service-features">
                                    <li>Concept clarity</li>
                                    <li>Problem solving</li>
                                    <li>Practice worksheets</li>
                                    <li>Exam preparation</li>
                                </ul>
                                <button className="enroll-btn">Enroll Now</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Science</h4>
                                <span className="service-level subject">Subject</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Comprehensive science education</p>
                                <div className="service-meta">
                                    <span className="duration">Yearly</span>
                                    <span className="price">?800/month</span>
                                </div>
                                <ul className="service-features">
                                    <li>Physics, Chemistry, Biology</li>
                                    <li>Practical knowledge</li>
                                    <li>Experiments</li>
                                    <li>Concept building</li>
                                </ul>
                                <button className="enroll-btn">Enroll Now</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">English</h4>
                                <span className="service-level subject">Subject</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">English language and grammar</p>
                                <div className="service-meta">
                                    <span className="duration">Yearly</span>
                                    <span className="price">?600/month</span>
                                </div>
                                <ul className="service-features">
                                    <li>Grammar fundamentals</li>
                                    <li>Reading &amp; writing</li>
                                    <li>Comprehension</li>
                                    <li>Communication skills</li>
                                </ul>
                                <button className="enroll-btn">Enroll Now</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Hindi</h4>
                                <span className="service-level subject">Subject</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Hindi language and literature</p>
                                <div className="service-meta">
                                    <span className="duration">Yearly</span>
                                    <span className="price">?600/month</span>
                                </div>
                                <ul className="service-features">
                                    <li>Hindi grammar</li>
                                    <li>Literature</li>
                                    <li>Writing skills</li>
                                    <li>Reading practice</li>
                                </ul>
                                <button className="enroll-btn">Enroll Now</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">All Subjects</h4>
                                <span className="service-level all">Complete</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Complete subject package for all classes</p>
                                <div className="service-meta">
                                    <span className="duration">Yearly</span>
                                    <span className="price">?1,500/month</span>
                                </div>
                                <ul className="service-features">
                                    <li>All subjects included</li>
                                    <li>Personal attention</li>
                                    <li>Weekly assessments</li>
                                    <li>Parent meetings</li>
                                </ul>
                                <button className="enroll-btn">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </div>
    )
}
