import React from 'react'

export default function AdmitCardSection() {
    return (
        <div>
            {/* Verification Portal Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Admit Card Download</h2>
                        <p className="section-subtitle">
                            Download your official examination admit card securely online.
                        </p>
                    </div>
                    <div className="verification-card">
                        <div className="row align-items-center g-5">
                            {/* Left Side: Image / Illustration */}
                            <div className="col-lg-6">
                                <div className="verification-image-box">
                                    <div className="glow-orb" />
                                    <div className="shield-container">
                                        <i className="fas fa-id-badge shield-icon" />
                                        <div className="pulse-ring ring-1" />
                                        <div className="pulse-ring ring-2" />
                                    </div>
                                    <div className="secure-tag">
                                        <i className="fas fa-shield me-2 text-success" />
                                        Official Exam Hall Ticket
                                    </div>
                                    <h4 className="info-title">
                                        Vijay Academy digital ticket generator.
                                    </h4>
                                    <p className="info-desc">
                                        Verify your eligibility and download your printable admit card
                                        for the upcoming semester examinations. Ensure you carry a
                                        physical printout to the examination center.
                                    </p>
                                </div>
                            </div>
                            {/* Right Side: Form */}
                            <div className="col-lg-6">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading">
                                        <i className="fas fa-print text-warning me-3" />
                                        Hall Ticket Generator
                                    </h3>
                                    <p className="portal-subheading">
                                        Enter your Admit Card / Registration ID below to download.
                                    </p>
                                    <form id="verifyForm" className="mt-4" onsubmit="return false;">
                                        <div className="form-group mb-4">
                                            <label htmlFor="regNo" className="form-label">
                                                Enter Your Registration / Roll No.:
                                            </label>
                                            <div className="input-wrapper">
                                                <i className="fas fa-id-card input-icon" />
                                                <input type="text" id="regNo" className="form-control text-uppercase" placeholder="EXAMPLE: VCA/2026/1001" required autoComplete="off" />
                                            </div>
                                            <span className="form-help">
                                                Ensure correct format including slashes.
                                            </span>
                                        </div>
                                        <button type="submit" id="btnVerify" className="btn btn-verify w-100">
                                            <span>Download Admit Card</span>
                                            <i className="fas fa-download ms-2" />
                                        </button>
                                    </form>
                                    {/* Result shown in modal (moved to body level below) */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
