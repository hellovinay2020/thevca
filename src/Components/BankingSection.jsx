import React from 'react'

export default function BankingSection() {
    return (
        <div>
            {/* Banking ?????? Section */}
            <section className="all-services-section banking-page" id="all-services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Banking Services</h2>
                        <p className="section-subtitle">
                            Banking services including money transfer, cash withdrawal,
                            account opening, and other financial facilities.
                        </p>
                    </div>
                    {/* Main Banking Highlights */}
                    <div className="banking-highlight-card">
                        <div className="highlight-flex">
                            <div className="highlight-icon-wrapper">
                                <i className="fas fa-fingerprint" />
                            </div>
                            <div className="highlight-text">
                                <h3>Banking Services</h3>
                                <p>Secure and convenient banking services available at your fingertips.
                                    With our advanced ATM network and AEPS (Aadhar Enabled Payment System),
                                    you can perform various transactions anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                    {/* Banking Services Grid */}
                    <div className="service-category-expanded">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-university" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Banking Services</h3>
                                <p className="category-description">Secure and convenient banking services available at your
                                    fingertips.
                                    With our advanced ATM network and AEPS (Aadhar Enabled Payment System),
                                    you can perform various transactions anytime, anywhere.</p>
                            </div>
                        </div>
                        <div className="services-grid">
                            {/* Balance Check */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Balance Enquiry</h4>
                                    <span className="service-level basic">Balance</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Check your bank account balance instantly
                                    </p>
                                    <ul className="service-features">
                                        <li>All Bank Balance Check</li>
                                        <li>Instant Balance Information</li>
                                        <li>Biometric Authentication</li>
                                        <li>Fast Service</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Check Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Money Transfer */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Money Transfer</h4>
                                    <span className="service-level professional">Transfer</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Send money securely from one bank to another
                                    </p>
                                    <ul className="service-features">
                                        <li>IMPS/NEFT Transfer</li>
                                        <li>24x7 Money Transfer</li>
                                        <li>Secure Transactions</li>
                                        <li>Instant Confirmation</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Send Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Cash Deposit */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Cash Deposit</h4>
                                    <span className="service-level advanced">Deposit</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Deposit cash directly into bank accounts
                                    </p>
                                    <ul className="service-features">
                                        <li>Direct Bank Deposit</li>
                                        <li>Quick Service</li>
                                        <li>Safe Transactions</li>
                                        <li>Instant Deposit Receipt</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Deposit Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Cash Withdrawal */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Cash Withdrawal</h4>
                                    <span className="service-level basic">Withdrawal</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Withdraw cash using biometric authentication
                                    </p>
                                    <ul className="service-features">
                                        <li>AEPS Service</li>
                                        <li>Biometric Verification</li>
                                        <li>Withdraw From Any Bank</li>
                                        <li>Instant Service</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Withdraw Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Mini Statement */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Mini Statement</h4>
                                    <span className="service-level basic">Statement</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Get your recent bank transaction details
                                    </p>
                                    <ul className="service-features">
                                        <li>Last 10 Transactions</li>
                                        <li>Instant Statement</li>
                                        <li>Printed Receipt Available</li>
                                        <li>Fast Banking Service</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Get Statement <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Account Opening */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Account Opening</h4>
                                    <span className="service-level advanced">Account</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Open a new bank account easily
                                    </p>
                                    <ul className="service-features">
                                        <li>Zero Balance Account</li>
                                        <li>Easy Documentation</li>
                                        <li>Instant Registration</li>
                                        <li>DBT Enabled Account</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Open Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
