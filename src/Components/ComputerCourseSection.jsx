import React from 'react'

export default function ComputerCourseSection() {
    return (
        <>
            <section className="all-services-section" id="all-services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">All Our Services</h2>
                        <p className="section-subtitle">Complete range of educational and technical solutions</p>
                    </div>
                    {/* Computer  */}
                    <div className="service-category-expanded">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-laptop" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Computer Courses</h3>
                                <p className="category-description">Basic to advanced computer education with ACSM certification</p>
                            </div>
                        </div>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">CCC</h4>
                                    <span className="service-level basic">Basic</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Course on Computer Concepts - Fundamental computer knowledge</p>
                                    <div className="service-meta">
                                        <span className="duration">3 Months</span>
                                        <span className="price">?2,500</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Basic computer operations</li>
                                        <li>Internet &amp; email</li>
                                        <li>MS Office basics</li>
                                        <li>Digital literacy</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">BCC</h4>
                                    <span className="service-level basic">Basic</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Basic Computer Course - Entry level computer training</p>
                                    <div className="service-meta">
                                        <span className="duration">2 Months</span>
                                        <span className="price">?2,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Computer fundamentals</li>
                                        <li>Operating systems</li>
                                        <li>Office applications</li>
                                        <li>File management</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">DCA</h4>
                                    <span className="service-level diploma">Diploma</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Diploma in Computer Applications - Comprehensive computer training
                                    </p>
                                    <div className="service-meta">
                                        <span className="duration">6 Months</span>
                                        <span className="price">?5,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Advanced computer concepts</li>
                                        <li>Programming basics</li>
                                        <li>Database management</li>
                                        <li>Web fundamentals</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">ADCA</h4>
                                    <span className="service-level advanced">Advanced</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Advanced Diploma in Computer Applications - Professional training
                                    </p>
                                    <div className="service-meta">
                                        <span className="duration">12 Months</span>
                                        <span className="price">?8,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Advanced programming</li>
                                        <li>Software development</li>
                                        <li>Network concepts</li>
                                        <li>Project management</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Tally</h4>
                                    <span className="service-level professional">Professional</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Tally ERP 9 - Complete accounting software training</p>
                                    <div className="service-meta">
                                        <span className="duration">3 Months</span>
                                        <span className="price">?3,500</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Accounting fundamentals</li>
                                        <li>Inventory management</li>
                                        <li>GST taxation</li>
                                        <li>Financial reporting</li>
                                    </ul>
                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">DTP</h4>
                                    <span className="service-level diploma">Diploma</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">Desktop Publishing - Design and publishing training</p>
                                    <div className="service-meta">
                                        <span className="duration">4 Months</span>
                                        <span className="price">?4,000</span>
                                    </div>
                                    <ul className="service-features">
                                        <li>Page design software</li>
                                        <li>Image editing</li>
                                        <li>Layout design</li>
                                        <li>Print production</li>
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
