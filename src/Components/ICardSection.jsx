import React from 'react'

export default function ICardSection() {
    return (
        <div>
            {/* Verification Portal Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Student I-Card</h2>
                        <p className="section-subtitle">Download your official student Identity Card securely online.</p>
                    </div>
                    <div className="verification-card">
                        <div className="row align-items-center g-5">
                            {/* Left Side: Image / Illustration */}
                            <div className="col-lg-6">
                                <div className="verification-image-box">
                                    <div className="glow-orb" />
                                    <div className="shield-container">
                                        <i className="fas fa-id-card shield-icon text-success" />
                                        <div className="pulse-ring ring-1" />
                                        <div className="pulse-ring ring-2" />
                                    </div>
                                    <div className="secure-tag">
                                        <i className="fas fa-user-check me-2 text-success" /> Verified Student Identity Card
                                    </div>
                                    <h4 className="info-title">Vijay Academy student pass.</h4>
                                    <p className="info-desc">Verify your digital profile and generate your high-resolution student
                                        identity card instantly. You can print and carry this badge to gain campus-wide resource
                                        access.</p>
                                </div>
                            </div>
                            {/* Right Side: Form */}
                            <div className="col-lg-6">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading"><i className="fas fa-address-card text-warning me-3" />I-Card
                                        Generator</h3>
                                    <p className="portal-subheading">Enter your Admission / Registration ID below to generate your
                                        card.</p>
                                    <form id="verifyForm" className="mt-4" onsubmit="return false;">
                                        <div className="form-group mb-4">
                                            <label htmlFor="regNo" className="form-label">Enter Your Admission / ID No.:</label>
                                            <div className="input-wrapper">
                                                <i className="fas fa-id-badge input-icon" />
                                                <input type="text" id="regNo" className="form-control text-uppercase" placeholder="EXAMPLE: VCA/2026/1001" required autoComplete="off" />
                                            </div>
                                            <span className="form-help">Ensure correct format including slashes.</span>
                                        </div>
                                        <button type="submit" id="btnVerify" className="btn btn-verify w-100">
                                            <span>Generate Identity Card</span>
                                            <i className="fas fa-cog fa-spin ms-2" />
                                        </button>
                                    </form>
                                    {/* Live Interactive Results Box */}
                                    <div id="verifyResult" className="verification-result-box mt-4 d-none">
                                        <div className="result-loader text-center py-4">
                                            <div className="spinner-border text-success" role="status" />
                                            <p className="mt-3 text-white-50">Connecting to digital student portal...</p>
                                        </div>
                                        <div className="result-details d-none">
                                            <div className="verified-header text-success">
                                                <i className="fas fa-check-circle me-2 fs-4" /> Identity Card Verified
                                            </div>
                                            <div className="student-details-grid">
                                                <div className="detail-row">
                                                    <span className="detail-label">Student Name:</span>
                                                    <span className="detail-value text-warning" id="resName">Rahul Kumar</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Father's Name:</span>
                                                    <span className="detail-value text-white" id="resFather">Suresh Kumar</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Enrollment No:</span>
                                                    <span className="detail-value text-white-50" id="resReg">VCA/ID/2026/01</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Course Name:</span>
                                                    <span className="detail-value text-white" id="resCourse">Web Development</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Date of Birth:</span>
                                                    <span className="detail-value text-white" id="resDOB">12 Aug 2004</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Contact / Mobile:</span>
                                                    <span className="detail-value text-success font-monospace" id="resMobile">+91
                                                        8858381213</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Status:</span>
                                                    <span className="detail-value badge bg-success-subtle text-success border border-success" id="resStatus">VERIFIED STUDENT</span>
                                                </div>
                                            </div>
                                            <div className="result-footer mt-4">
                                                <button className="btn btn-sm btn-success w-100 animate-pulse" onclick="window.print()">
                                                    <i className="fas fa-print me-2" />Print Student ID Card
                                                </button>
                                            </div>
                                        </div>
                                        {/* Error Message */}
                                        <div className="result-error d-none text-center py-3">
                                            <i className="fas fa-exclamation-triangle text-danger fs-3 mb-2" />
                                            <h5 className="text-white">Record Not Found</h5>
                                            <p className="text-white-50 small mb-0">Please check your Admission number and try
                                                again. Contact the admin desk if your profile is incomplete.</p>
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
