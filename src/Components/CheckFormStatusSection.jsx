import React from 'react'

export default function CheckFormStatusSection() {
    return (
        <div>
            {/* Status Portal Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Check Application Status</h2>
                        <p className="section-subtitle">Monitor and verify the progress of your academy registrations and admissions
                            in real time.</p>
                    </div>
                    {/* Glassmorphic Search Dashboard Card */}
                    <div className="premium-form-container p-4 p-lg-5">
                        <div className="row g-5 align-items-center">
                            {/* Left Side: Informative Progress Grid */}
                            <div className="col-lg-5">
                                <div className="verification-image-box h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="glow-orb" />
                                        <div className="shield-container mb-4">
                                            <i className="fas fa-eye shield-icon text-success" />
                                            <div className="pulse-ring ring-1" />
                                            <div className="pulse-ring ring-2" />
                                        </div>
                                        <div className="secure-tag mb-4">
                                            <i className="fas fa-history me-2 text-warning" /> Real-time Application Tracking
                                        </div>
                                        <h4 className="text-white fw-bold">Keep track of your submissions.</h4>
                                        <p className="text-white-50 small mb-4" style={{ lineHeight: '1.6' }}>
                                            Verify whether your admission application, competition form, or scholarship registry
                                            has been reviewed by the VCA administration desk.
                                        </p>
                                    </div>
                                    {/* Interactive Progress Steps Demonstration */}
                                    <div className="steps-progress-demo bg-black bg-opacity-30 p-3 rounded border border-secondary border-opacity-25 mt-2">
                                        <h6 className="text-warning small mb-3"><i className="fas fa-info-circle me-2" />Status
                                            Indicators:</h6>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="d-flex align-items-center gap-2 small">
                                                <span className="badge bg-success-subtle text-success border border-success rounded-circle" style={{ width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-check" /></span>
                                                <span className="text-white">Form Received &amp; Logged</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 small">
                                                <span className="badge bg-warning-subtle text-warning border border-warning rounded-circle" style={{ width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-spinner" /></span>
                                                <span className="text-white-50">Under Academic Board Review</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 small">
                                                <span className="badge bg-danger bg-opacity-25 text-danger border border-danger border-opacity-50 rounded-circle" style={{ width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-times" /></span>
                                                <span className="text-white-50">Action Needed (Documents / Fees)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side: Search Form & Results */}
                            <div className="col-lg-7">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading text-white fw-bold d-flex align-items-center gap-2">
                                        <i className="fas fa-search text-warning" /> Application Status Search
                                    </h3>
                                    <p className="portal-subheading text-white-50 mb-4">Select your form type and enter your
                                        Application Number or Registered Mobile Number.</p>
                                    {/* Search form */}
                                    <form id="statusForm" onsubmit="return handleStatusSearch(event)">
                                        <div className="row g-3 mb-4">
                                            <div className="col-12 form-group-custom">
                                                <label className="form-label-premium">Application Type <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select id="formTypeSelect" className="form-select form-select-premium" required>
                                                        <option value disabled selected>-- Select Form Type --</option>
                                                        <option value="Admission">Computer Course Admission Form</option>
                                                        <option value="Competition">Competition Registration Form</option>
                                                        <option value="Scholarship">Scholarship Application Form</option>
                                                    </select>
                                                    <i className="fas fa-list-alt" />
                                                </div>
                                            </div>
                                            <div className="col-12 form-group-custom">
                                                <label className="form-label-premium">Application Number / Mobile Number <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" id="statusSearchInput" className="form-control form-control-premium" placeholder="Enter Registration No (e.g. VCA/...) or 10-digit Phone" required />
                                                    <i className="fas fa-fingerprint" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="btnSearchStatus" className="btn btn-verify w-100 py-3 rounded-3" style={{ fontSize: '1.05rem' }}>
                                            <span>Track Application Status</span>
                                            <i className="fas fa-radar ms-2" />
                                        </button>
                                    </form>
                                    {/* Premium Interactive Results Container */}
                                    <div id="statusResultBox" className="verification-result-box mt-4 d-none">
                                        {/* Loading Spinner */}
                                        <div className="result-loader text-center py-5">
                                            <div className="spinner-border text-warning" style={{ width: '3rem', height: '3rem' }} role="status" />
                                            <p className="mt-3 text-white fw-bold">Querying Secure Academy Servers...</p>
                                            <p className="text-white-50 small">Validating digital credentials against enrollment
                                                keys...</p>
                                        </div>
                                        {/* Dynamic Status Display */}
                                        <div className="result-details d-none">
                                            <div className="premium-receipt-card border border-secondary border-opacity-50">
                                                {/* Header banner */}
                                                <div className="receipt-header-vca bg-gradient bg-opacity-75" id="statusHeaderBanner">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="bg-white p-1 rounded-circle" style={{ width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <i className="fas fa-info-circle text-primary fs-4" id="statusHeaderIcon" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-white mb-0 fw-bold font-monospace" style={{ fontSize: '0.95rem', letterSpacing: '0.5px' }} id="statusHeaderTitle">VIJAY COMPUTER ACADEMY</h5>
                                                            <span className="text-success small fw-bold" style={{ fontSize: '0.72rem', letterSpacing: 1 }} id="statusFormLabel">APPLICATION STATUS REPORT</span>
                                                        </div>
                                                    </div>
                                                    <span className="badge" id="statusBadge">PENDING REVIEW</span>
                                                </div>
                                                {/* Details grid */}
                                                <div className="p-4 bg-black bg-opacity-20">
                                                    <div className="row g-4">
                                                        {/* Record Details */}
                                                        <div className="col-12">
                                                            <div className="student-details-grid" style={{ rowGap: 12 }}>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-fingerprint text-warning me-2" />Registration
                                                                        No:</span>
                                                                    <span className="detail-value text-warning fw-bold font-monospace" id="statusRegNo">VCA/2026/TMP-1049</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-user text-white-50 me-2" />Applicant
                                                                        Name:</span>
                                                                    <span className="detail-value text-white fw-semibold" id="statusName">Rahul Kumar</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-user-friends text-white-50 me-2" />Father's
                                                                        Name:</span>
                                                                    <span className="detail-value text-white-50" id="statusFather">Suresh Kumar</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-graduation-cap text-white-50 me-2" />Applied
                                                                        Field:</span>
                                                                    <span className="detail-value text-white fw-semibold" id="statusAppliedField">ADCA Course</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-calendar-alt text-white-50 me-2" />Date
                                                                        Registered:</span>
                                                                    <span className="detail-value text-white-50" id="statusDate">May
                                                                        15, 2026</span>
                                                                </div>
                                                            </div>
                                                            {/* Visual progress step bar */}
                                                            <div className="status-tracker-container mt-4 pt-3 border-top border-secondary border-opacity-25">
                                                                <h6 className="text-white small mb-3"><i className="fas fa-tasks me-2 text-warning" />Registration
                                                                    Step Tracker:</h6>
                                                                <div className="row text-center g-2 position-relative">
                                                                    {/* Step 1 */}
                                                                    <div className="col-3">
                                                                        <div className="d-flex flex-column align-items-center">
                                                                            <div className="rounded-circle bg-success text-white mb-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: '0.85rem' }} id="stepCircle1">
                                                                                <i className="fas fa-check" />
                                                                            </div>
                                                                            <span className="text-white" style={{ fontSize: '0.68rem' }} id="stepLabel1">Submitted</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* Step 2 */}
                                                                    <div className="col-3">
                                                                        <div className="d-flex flex-column align-items-center">
                                                                            <div className="rounded-circle bg-success text-white mb-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: '0.85rem' }} id="stepCircle2">
                                                                                <i className="fas fa-check" />
                                                                            </div>
                                                                            <span className="text-white-50" style={{ fontSize: '0.68rem' }} id="stepLabel2">Verified</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* Step 3 */}
                                                                    <div className="col-3">
                                                                        <div className="d-flex flex-column align-items-center">
                                                                            <div className="rounded-circle bg-warning text-dark mb-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: '0.85rem' }} id="stepCircle3">
                                                                                <i className="fas fa-spinner fa-spin" />
                                                                            </div>
                                                                            <span className="text-white-50" style={{ fontSize: '0.68rem' }} id="stepLabel3">Approved</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* Step 4 */}
                                                                    <div className="col-3">
                                                                        <div className="d-flex flex-column align-items-center">
                                                                            <div className="rounded-circle bg-secondary text-white-50 mb-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: '0.85rem' }} id="stepCircle4">
                                                                                <i className="fas fa-id-card" />
                                                                            </div>
                                                                            <span className="text-white-50" style={{ fontSize: '0.68rem' }} id="stepLabel4">Card
                                                                                Issued</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Alert Box with description of status */}
                                                            <div className="alert bg-black bg-opacity-30 border border-secondary border-opacity-25 mt-4 mb-0 text-white-50 small p-3 rounded" id="statusMessageAlert">
                                                                <i className="fas fa-info-circle text-warning me-2" />
                                                                <span id="statusMessageText">Your application has been verified
                                                                    successfully. Standard processing is under approval and
                                                                    course credentials will be dispatched via email/SMS
                                                                    shortly.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="result-footer mt-4 d-flex gap-2">
                                                <button className="btn btn-verify flex-grow-1 py-3 rounded-3" onclick="window.print()">
                                                    <i className="fas fa-print me-2" />Print Official Report
                                                </button>
                                                <button className="btn btn-outline-secondary py-3 px-4 rounded-3 text-white" onclick="resetStatusSearch()">
                                                    Search Another
                                                </button>
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
