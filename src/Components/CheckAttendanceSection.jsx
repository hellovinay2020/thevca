import React from 'react'

export default function CheckAttendanceSection() {
    return (
        <div>
            {/* Attendance Portal Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Attendance Verification</h2>
                        <p className="section-subtitle">Verify your attendance details securely and instantly</p>
                    </div>
                    <div className="verification-card">
                        <div className="row align-items-center g-5">
                            {/* Left Side: Image / Illustration */}
                            <div className="col-lg-6">
                                <div className="verification-image-box">
                                    <div className="glow-orb" />
                                    <div className="shield-container">
                                        <i className="fas fa-user-shield shield-icon" />
                                        <div className="pulse-ring ring-1" />
                                        <div className="pulse-ring ring-2" />
                                    </div>
                                    <div className="secure-tag">
                                        <i className="fas fa-lock me-2 text-success" />
                                        Secure Verification Portal, VCA SSL Protected
                                    </div>
                                    <h4 className="info-title">
                                        Vijay Computer Academy attendance authentication protocol.
                                    </h4>
                                    <p className="info-desc">
                                        Check your attendance status instantly. Enter your secure Attendance ID
                                        to view verified attendance details.
                                    </p>
                                </div>
                            </div>
                            {/* Right Side: Form */}
                            <div className="col-lg-6">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading">
                                        <i className="fas fa-user-check text-warning me-3" />
                                        Attendance Verification
                                    </h3>
                                    <p className="portal-subheading">
                                        Enter your details below to fetch your official attendance status.
                                    </p>
                                    <form id="verifyForm" className="mt-4" onsubmit="return false;">
                                        <div className="form-group mb-4">
                                            <label htmlFor="regNo" className="form-label">
                                                Attendance ID / Registration Number:
                                            </label>
                                            <div className="input-wrapper">
                                                <i className="fas fa-id-card input-icon" />
                                                <input type="text" id="regNo" className="form-control text-uppercase" placeholder="EXAMPLE: VCA/2026/1001" required autoComplete="off" />
                                            </div>
                                            <span className="form-help">
                                                Enter your official attendance ID
                                            </span>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="mobileNo" className="form-label">
                                                Registered Mobile Number:
                                            </label>
                                            <div className="input-wrapper">
                                                <i className="fas fa-phone-alt input-icon" />
                                                <input type="tel" id="mobileNo" name="mobileNo" className="form-control" placeholder="EXAMPLE: 9876543210" pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" required autoComplete="off" />
                                            </div>
                                            <span className="form-help">
                                                Enter the mobile number linked with your record
                                            </span>
                                        </div>
                                        <button type="submit" id="btnVerify" className="btn btn-verify w-100">
                                            <span>Verify Attendance</span>
                                            <i className="fas fa-shield-alt ms-2" />
                                        </button>
                                    </form>
                                    {/* Live Interactive Results Box */}
                                    <div id="verifyResult" className="verification-result-box mt-4 d-none">
                                        <div className="result-loader text-center py-4">
                                            <div className="spinner-border text-success" role="status" />
                                            <p className="mt-3 text-white-50">
                                                Verifying attendance details, please wait...
                                            </p>
                                        </div>
                                        <div className="result-details d-none">
                                            <div className="verified-header">
                                                <i className="fas fa-check-circle text-success me-2 fs-4" />
                                                Verified Attendance Record
                                            </div>
                                            <div className="student-details-grid">
                                                <div className="detail-row">
                                                    <span className="detail-label">Student Name:</span>
                                                    <span className="detail-value text-warning" id="resName">
                                                        Rahul Kumar
                                                    </span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Father's Name:</span>
                                                    <span className="detail-value text-white" id="resFather">
                                                        Suresh Kumar
                                                    </span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Registration Number:</span>
                                                    <span className="detail-value text-white-50" id="resReg">
                                                        VCA/ADM/2026/01
                                                    </span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Course Name:</span>
                                                    <span className="detail-value text-white" id="resCourse">
                                                        Computer Course
                                                    </span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Date:</span>
                                                    <span className="detail-value text-white-50" id="resDate">
                                                        12 Jan 2026
                                                    </span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="detail-label">Attendance Status:</span>
                                                    <span className="detail-value badge bg-success-subtle text-success border border-success" id="resStatus">
                                                        Attendance Verified
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="result-footer mt-4">
                                                <button className="btn btn-sm btn-outline-success w-100" onclick="window.print()">
                                                    <i className="fas fa-print me-2" />
                                                    Print Attendance Details
                                                </button>
                                            </div>
                                        </div>
                                        {/* Error Message */}
                                        <div className="result-error d-none text-center py-3">
                                            <i className="fas fa-exclamation-triangle text-danger fs-3 mb-2" />
                                            <h5 className="text-white">
                                                Attendance Record Not Found
                                            </h5>
                                            <p className="text-white-50 small mb-0">
                                                Please check your Attendance number and try again.
                                                Contact the admin desk if the issue persists.
                                            </p>
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
