import React from 'react'

export default function ResultSection() {
    return (
        <div>
            {/* Verification Portal Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Student Result</h2>
                        <p className="section-subtitle">Check your VCA student results securely online.</p>
                    </div>
                    <div className="verification-card">
                        <div className="row align-items-center g-5">
                            {/* Left Side: Image / Illustration */}
                            <div className="col-lg-6">
                                <div className="verification-image-box">
                                    <div className="glow-orb" />
                                    <div className="shield-container">
                                        <i className="fas fa-award shield-icon text-warning" />
                                        <div className="pulse-ring ring-1" />
                                        <div className="pulse-ring ring-2" />
                                    </div>
                                    <div className="secure-tag">
                                        <i className="fas fa-trophy me-2 text-warning" />Secure Student Result Verification
                                        Powered by VCA SSL
                                    </div>
                                    <h4 className="info-title">Vijay Computer Academy result portal.</h4>
                                    <p className="info-desc">Verify your test scores, course status, scholarship award, and result
                                        summary in one place. Enter your Result / Roll Number to fetch official records.</p>
                                </div>
                            </div>
                            {/* Right Side: Form */}
                            <div className="col-lg-6">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading"><i className="fas fa-medal text-warning me-3" />Student Result
                                        Check</h3>
                                    <p className="portal-subheading">Enter your Result / Roll Number below to see your full result
                                        summary.</p>
                                    <form id="verifyForm" className="mt-4" onsubmit="return false;">
                                        <div className="form-group mb-4">
                                            <label htmlFor="regNo" className="form-label">Enter Your Result / Roll No.:</label>
                                            <div className="input-wrapper">
                                                <i className="fas fa-id-badge input-icon" />
                                                <input type="text" id="regNo" className="form-control text-uppercase" placeholder="EXAMPLE: VCA/2026/1001" required autoComplete="off" />
                                            </div>
                                            <span className="form-help">Use the roll number provided by the academy.</span>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="mobileNo" className="form-label">Enter Your Mobile No.:</label>
                                            <div className="input-wrapper">
                                                <i className="fas fa-phone-alt input-icon" />
                                                <input type="tel" id="mobileNo" name="mobileNo" className="form-control" placeholder="EXAMPLE: 9876543210" pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" required autoComplete="off" />
                                            </div>
                                            <span className="form-help">Use the mobile number registered with the academy.</span>
                                        </div>
                                        <button type="submit" id="btnVerify" className="btn btn-verify w-100">
                                            <span>View Result</span>
                                            <i className="fas fa-shield-alt ms-2" />
                                        </button>
                                    </form>
                                    {/* Live Interactive Results Box */}
                                    <div className="modal fade" id="verifyResult" tabIndex={-1} aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                                            <div className="modal-content bg-black border border-warning border-opacity-25">
                                                <div className="modal-header border-0 pb-0">
                                                    <h5 className="modal-title text-white fw-bold">
                                                        <i className="fas fa-id-card text-warning me-2" /> Admit Card Generated
                                                    </h5>
                                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body pt-3">
                                                    <div className="result-loader text-center py-4">
                                                        <div className="spinner-border text-warning" role="status" />
                                                        <p className="mt-3 text-white-50">Generating official admit card...</p>
                                                    </div>
                                                    <div className="result-details d-none">
                                                        <div className="verified-header">
                                                            <i className="fas fa-id-card text-warning me-2 fs-4" /> Admit Card
                                                            Details
                                                        </div>
                                                        <div className="student-details-grid">
                                                            <div className="detail-row">
                                                                <span className="detail-label">Student Name:</span>
                                                                <span className="detail-value text-warning" id="resName">Rahul
                                                                    Kumar</span>
                                                            </div>
                                                            <div className="detail-row">
                                                                <span className="detail-label">Father's Name:</span>
                                                                <span className="detail-value text-white" id="resFather">Suresh
                                                                    Kumar</span>
                                                            </div>
                                                            <div className="detail-row">
                                                                <span className="detail-label">Roll Number:</span>
                                                                <span className="detail-value text-white-50" id="resReg">VCA/SCH/2026/01</span>
                                                            </div>
                                                            <div className="detail-row">
                                                                <span className="detail-label">Course Name:</span>
                                                                <span className="detail-value text-white" id="resCourse">Web
                                                                    Development &amp; Modern Programming</span>
                                                            </div>
                                                            <div className="detail-row">
                                                                <span className="detail-label">Exam Date &amp; Time:</span>
                                                                <span className="detail-value text-white-50" id="resExamDate">24 May
                                                                    2026 (10:00 AM - 01:00 PM)</span>
                                                            </div>
                                                            <div className="detail-row">
                                                                <span className="detail-label">Exam Center:</span>
                                                                <span className="detail-value text-white-50" id="resCenter">Vijay
                                                                    Academy Main Campus, Ballia, UP</span>
                                                            </div>
                                                            <div className="detail-row">
                                                                <span className="detail-label">Status:</span>
                                                                <span className="detail-value badge bg-success-subtle text-success border border-success" id="resStatus">VERIFIED / ACTIVE / QUALIFIED</span>
                                                            </div>
                                                        </div>
                                                        <div className="result-footer mt-4">
                                                            <button className="btn btn-sm btn-outline-warning w-100" onclick="window.print()">
                                                                <i className="fas fa-print me-2" />Print Admit Card
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Error Message */}
                                                    <div className="result-error d-none text-center py-3">
                                                        <i className="fas fa-exclamation-triangle text-danger fs-3 mb-2" />
                                                        <h5 className="text-white">Admit Card Not Found</h5>
                                                        <p className="text-white-50 small mb-0">Please check your Result / Roll
                                                            number and try again. Contact the admin desk for any queries.</p>
                                                    </div>
                                                </div>
                                            </div>
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
