import React from 'react'

export default function ProgrammingCourseSection() {
    return (
        <>
            <section className="all-services-section" id="all-services">
                <div className="container">
                    {/* Programming Courses */}
                    <div className="service-category-expanded">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-code" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Programming Courses</h3>
                                <p className="category-description">Modern web development and programming technologies</p>
                            </div>
                        </div>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">HTML</h4>
                                    <span className="service-level web">Web</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">HyperText Markup Language - Web structure fundamentals</p>
                                    <div className="service-meta">
                                        <span className="duration">1 Month</span>
                                        <span className="price">?1,500</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>HTML5 semantics</li>
                                        <li>Forms &amp; validation</li>
                                        <li>Media elements</li>
                                        <li>SEO basics</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">CSS</h4>
                                    <span className="service-level web">Web</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Cascading Style Sheets - Web styling and design</p>
                                    <div className="service-meta">
                                        <span className="duration">1.5 Months</span>
                                        <span className="price">?2,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>CSS3 properties</li>
                                        <li>Responsive design</li>
                                        <li>Animations</li>
                                        <li>Grid &amp; Flexbox</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">JavaScript</h4>
                                    <span className="service-level programming">Programming</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">JavaScript Programming - Interactive web development</p>
                                    <div className="service-meta">
                                        <span className="duration">3 Months</span>
                                        <span className="price">?4,500</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>ES6+ features</li>
                                        <li>DOM manipulation</li>
                                        <li>Async programming</li>
                                        <li>Modern frameworks</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Python</h4>
                                    <span className="service-level programming">Programming</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Python Programming - Versatile programming language</p>
                                    <div className="service-meta">
                                        <span className="duration">4 Months</span>
                                        <span className="price">?5,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Python fundamentals</li>
                                        <li>Data structures</li>
                                        <li>Web frameworks</li>
                                        <li>Data science basics</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Web Development</h4>
                                    <span className="service-level advanced">Advanced</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Full Stack Web Development - Complete web mastery</p>
                                    <div className="service-meta">
                                        <span className="duration">6 Months</span>
                                        <span className="price">?8,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Frontend development</li>
                                        <li>Backend development</li>
                                        <li>Database design</li>
                                        <li>Deployment &amp; hosting</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Programming</h4>
                                    <span className="service-level programming">Programming</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">General Programming - Multiple languages &amp; concepts</p>
                                    <div className="service-meta">
                                        <span className="duration">5 Months</span>
                                        <span className="price">?6,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>C/C++ programming</li>
                                        <li>Java basics</li>
                                        <li>Algorithm design</li>
                                        <li>Problem solving</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
