import React from 'react'

export default function CscJanSewaSection() {
    return (
        <div>
            <section className="all-services-section" id="all-services">
                <div className="container">
                {/* CSC / Jan Sewa */}
                <div className="service-category-expanded">
                    <div className="category-header">
                        <div className="category-icon">
                            <i className="fas fa-id-card" />
                        </div>
                        <div className="category-info">
                            <h3 className="category-title">CSC / Jan Sewa</h3>
                            <p className="category-description">Government authorized digital services center</p>
                        </div>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Aadhar Services</h4>
                                <span className="service-level government">Govt.</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Complete Aadhar card services</p>
                                <div className="service-meta">
                                    <span className="duration">Same Day</span>
                                    <span className="price">?50-100</span>
                                </div>
                                <ul className="service-features">
                                    <li>New enrollment</li>
                                    <li>Update details</li>
                                    <li>Address change</li>
                                    <li>Mobile linking</li>
                                </ul>
                                <button className="enroll-btn">Book Service</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">PAN Card</h4>
                                <span className="service-level government">Govt.</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">PAN card application and services</p>
                                <div className="service-meta">
                                    <span className="duration">3-7 Days</span>
                                    <span className="price">?150-200</span>
                                </div>
                                <ul className="service-features">
                                    <li>New PAN card</li>
                                    <li>Correction services</li>
                                    <li>Reprint services</li>
                                    <li>Change details</li>
                                </ul>
                                <button className="enroll-btn">Book Service</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Certificates</h4>
                                <span className="service-level government">Govt.</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Various government certificates</p>
                                <div className="service-meta">
                                    <span className="duration">Varies</span>
                                    <span className="price">?100-500</span>
                                </div>
                                <ul className="service-features">
                                    <li>Birth certificate</li>
                                    <li>Death certificate</li>
                                    <li>Marriage certificate</li>
                                    <li>Income certificate</li>
                                </ul>
                                <button className="enroll-btn">Book Service</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Banking Services</h4>
                                <span className="service-level banking">Banking</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Banking and financial services</p>
                                <div className="service-meta">
                                    <span className="duration">Same Day</span>
                                    <span className="price">?50-200</span>
                                </div>
                                <ul className="service-features">
                                    <li>Account opening</li>
                                    <li>Loan applications</li>
                                    <li>Insurance services</li>
                                    <li>Financial planning</li>
                                </ul>
                                <button className="enroll-btn">Book Service</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Digital Services</h4>
                                <span className="service-level digital">Digital</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Digital India services</p>
                                <div className="service-meta">
                                    <span className="duration">Same Day</span>
                                    <span className="price">?30-150</span>
                                </div>
                                <ul className="service-features">
                                    <li>Digital locker</li>
                                    <li>e-KYC services</li>
                                    <li>Online forms</li>
                                    <li>Digital signatures</li>
                                </ul>
                                <button className="enroll-btn">Book Service</button>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-header">
                                <h4 className="service-name">Government Schemes</h4>
                                <span className="service-level government">Govt.</span>
                            </div>
                            <div className="service-details">
                                <p className="service-desc">Government scheme applications</p>
                                <div className="service-meta">
                                    <span className="duration">Varies</span>
                                    <span className="price">?100-300</span>
                                </div>
                                <ul className="service-features">
                                    <li>PM schemes</li>
                                    <li>State schemes</li>
                                    <li>Scholarship applications</li>
                                    <li>Subsidy applications</li>
                                </ul>
                                <button className="enroll-btn">Book Service</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            </section>
        </div>
    )
}
