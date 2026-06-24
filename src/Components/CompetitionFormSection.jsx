import React from 'react'

export default function CompetitionFormSection() {
    return (
        <div>
            {/* Admission Form Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Competition Registration Form</h2>
                        <p className="section-subtitle">Enroll in our premium academy competitions online. Complete your
                            registration below.</p>
                    </div>
                    {/* Multi-Step Header Indicator */}
                    <div className="row g-4 mb-5">
                        <div className="col-md-4">
                            <div className="p-3 rounded bg-black bg-opacity-25 step-indicator-card border-start border-3 border-warning d-flex align-items-center gap-3">
                                <div className="fs-3 text-warning"><i className="fas fa-user-shield" /></div>
                                <div>
                                    <h6 className="text-white mb-0">1. Personal Info</h6>
                                    <span className="text-white-50 small">Basic student records</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 rounded bg-black bg-opacity-25 step-indicator-card border-start border-3 border-success d-flex align-items-center gap-3">
                                <div className="fs-3 text-success"><i className="fas fa-trophy" /></div>
                                <div>
                                    <h6 className="text-white mb-0">2. School &amp; Event</h6>
                                    <span className="text-white-50 small">Class &amp; event selection</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 rounded bg-black bg-opacity-25 step-indicator-card border-start border-3 border-info d-flex align-items-center gap-3">
                                <div className="fs-3 text-info"><i className="fas fa-map-marked-alt" /></div>
                                <div>
                                    <h6 className="text-white mb-0">3. Contact &amp; Address</h6>
                                    <span className="text-white-50 small">Permanent residence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Premium Glassmorphic Form Card */}
                    <div className="premium-form-container p-4 p-lg-5">
                        <div className="row g-5">
                            {/* Left Side: Graphic Guide & Interactive Photo Upload */}
                            <div className="col-lg-4">
                                <div className="verification-image-box h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="glow-orb" />
                                        <div className="shield-container mb-4">
                                            <i className="fas fa-trophy shield-icon text-warning" />
                                            <div className="pulse-ring ring-1" />
                                            <div className="pulse-ring ring-2" />
                                        </div>
                                        <div className="secure-tag mb-4">
                                            <i className="fas fa-lock me-2 text-success" /> Secure Competition Portal
                                        </div>
                                        {/* Interactive Drag & Drop Photo Upload Zone */}
                                        <div className="drag-drop-zone" id="photoDropZone" onclick="document.getElementById('photoInput').click()">
                                            <div id="previewPlaceholder">
                                                <i className="fas fa-cloud-upload-alt text-success fs-1 mb-3 animate-bounce" />
                                                <h6 className="text-white">Upload Photo</h6>
                                                <p className="text-white-50 small mb-0" style={{ fontSize: '0.8rem' }}>Drag &amp; drop photo
                                                    or click to browse</p>
                                                <span className="badge bg-secondary bg-opacity-25 text-warning mt-2" style={{ fontSize: '0.72rem' }}>JPG or JPEG, Max 1MB</span>
                                            </div>
                                            <img id="studentPhotoPreview" className="d-none img-fluid rounded border border-success mb-2" style={{ maxHeight: 180, width: 140, objectFit: 'cover', margin: '0 auto' }} alt="Student Photo" />
                                            <p id="previewFileName" className="small text-white-50 mb-0 mt-2">No file chosen</p>
                                        </div>
                                        {/* Hidden Photo Input */}
                                        <input type="file" name="photo" id="photoInput" className="d-none" accept=".jpg, .jpeg" required onchange="handlePhotoChange(this)" />
                                    </div>
                                    {/* Competition Guidelines */}
                                    <div className="guidelines-card bg-black bg-opacity-30 p-3 rounded border border-secondary border-opacity-25 mt-4">
                                        <h5 className="text-warning small mb-3"><i className="fas fa-info-circle me-2" />Registration
                                            Guidelines:</h5>
                                        <ul className="text-white-50 list-unstyled small mb-0" style={{ lineHeight: '1.7' }}>
                                            <li className="mb-2"><i className="fas fa-check-circle text-success me-2" /> Details must
                                                match official school records.</li>
                                            <li className="mb-2"><i className="fas fa-check-circle text-success me-2" /> Active mobile
                                                number required for updates.</li>
                                            <li><i className="fas fa-check-circle text-success me-2" /> Maximum photo size is 1MB
                                                in JPG/JPEG.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side: Admission Form Fields */}
                            <div className="col-lg-8">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading text-white fw-bold d-flex align-items-center gap-2">
                                        <i className="fas fa-trophy text-warning" /> Competition Registration Form
                                    </h3>
                                    <p className="portal-subheading text-white-50 mb-4">Complete student registration details.
                                        Fields marked with <span className="text-danger">*</span> are mandatory.</p>
                                    {/* Live Interactive Form */}
                                    <form id="admissionForm" className="mt-2" onsubmit="return handleFormSubmit(event)">
                                        {/* Section 1: Personal Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom border-secondary border-opacity-50 pb-2 small fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '1.5px' }}>
                                            <i className="fas fa-user-circle me-2" /> Section 1: Personal Details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Full Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="fullname" className="form-control form-control-premium" placeholder="Enter full name" required />
                                                    <i className="fas fa-user" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Father Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="fathername" className="form-control form-control-premium" placeholder="Enter father name" required />
                                                    <i className="fas fa-user-friends" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Mother Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="mothername" className="form-control form-control-premium" placeholder="Enter mother name" required />
                                                    <i className="fas fa-female" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Date of Birth <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="date" name="dob" className="form-control form-control-premium text-uppercase" placeholder="dd-mm-yyyy" required />
                                                    <i className="fas fa-calendar-alt" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group-custom">
                                                <label className="form-label-premium">Gender <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select name="gender" className="form-select form-select-premium" required>
                                                        <option value disabled selected>-- Select --</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <i className="fas fa-venus-mars" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Section 2: School & Competition Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom border-secondary border-opacity-50 pb-2 small fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '1.5px' }}>
                                            <i className="fas fa-graduation-cap me-2" /> Section 2: School &amp; Competition Details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Class (1?12) <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select name="class" className="form-select form-select-premium" required>
                                                        <option value disabled selected>-- Select --</option>
                                                        <option value={1}>Class 1</option>
                                                        <option value={2}>Class 2</option>
                                                        <option value={3}>Class 3</option>
                                                        <option value={4}>Class 4</option>
                                                        <option value={5}>Class 5</option>
                                                        <option value={6}>Class 6</option>
                                                        <option value={7}>Class 7</option>
                                                        <option value={8}>Class 8</option>
                                                        <option value={9}>Class 9</option>
                                                        <option value={10}>Class 10</option>
                                                        <option value={11}>Class 11</option>
                                                        <option value={12}>Class 12</option>
                                                    </select>
                                                    <i className="fas fa-school" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">School Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="schoolname" className="form-control form-control-premium" placeholder="Enter school name" required />
                                                    <i className="fas fa-university" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group-custom">
                                                <label className="form-label-premium">Competition Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select name="competition" id="competitionSelect" className="form-select form-select-premium" required onchange="handleCompetitionChange(this)">
                                                        <option value disabled selected>-- Select Competition --</option>
                                                        <option value="Computer Quiz Competition">Computer Quiz Competition
                                                        </option>
                                                        <option value="Typing Speed Championship">Typing Speed Championship
                                                        </option>
                                                        <option value="Essay Writing Competition">Essay Writing Competition
                                                        </option>
                                                        <option value="Painting & Drawing Competition">Painting &amp; Drawing
                                                            Competition</option>
                                                        <option value="Coding & Web Design Battle">Coding &amp; Web Design Battle
                                                        </option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <i className="fas fa-trophy" />
                                                </div>
                                            </div>
                                            {/* Hidden dynamic Input for Other Competition */}
                                            <div className="col-md-12 form-group-custom d-none" id="otherCompetitionGroup">
                                                <label className="form-label-premium text-warning">Enter Competition Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="othercompetition" id="otherCompetitionInput" className="form-control form-control-premium" placeholder="Specify competition name" />
                                                    <i className="fas fa-pen-fancy" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Section 3: Contact & Address Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom border-secondary border-opacity-50 pb-2 small fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '1.5px' }}>
                                            <i className="fas fa-map-marked-alt me-2" /> Section 3: Contact &amp; Address Details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Mobile No <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="tel" name="phone" className="form-control form-control-premium" placeholder="Enter mobile number" pattern="[0-9]{10}" title="Ten digits mobile number" required />
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Email <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="email" name="email" className="form-control form-control-premium" placeholder="Enter email" required />
                                                    <i className="fas fa-envelope" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">State <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="state" className="form-control form-control-premium" defaultValue="Uttar Pradesh" placeholder="Enter state" required />
                                                    <i className="fas fa-map" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">District <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="district" className="form-control form-control-premium" defaultValue="Ballia" placeholder="Enter district" required />
                                                    <i className="fas fa-city" />
                                                </div>
                                            </div>
                                            <div className="col-12 form-group-custom">
                                                <label className="form-label-premium">Address <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <textarea name="address" rows={3} className="form-control form-control-premium" placeholder="Enter full address" required defaultValue={""} />
                                                    <i className="fas fa-home" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Pincode <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="pincode" className="form-control form-control-premium" placeholder="Enter 6 digit pincode" pattern="[0-9]{6}" title="6 digit pincode" required />
                                                    <i className="fas fa-map-pin" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="btnSubmitAdmission" className="btn btn-verify w-100 py-3 rounded-3" style={{ fontSize: '1.05rem' }}>
                                            <span>Submit Competition Registration</span>
                                            <i className="fas fa-paper-plane ms-2" />
                                        </button>
                                    </form>
                                    {/* Ultra-Premium ID Card Receipt Generator */}
                                    <div id="admissionResult" className="verification-result-box mt-4 d-none">
                                        {/* Loader */}
                                        <div className="result-loader text-center py-5">
                                            <div className="spinner-border text-success" style={{ width: '3rem', height: '3rem' }} role="status" />
                                            <p className="mt-3 text-white fw-bold">Synchronizing with Academy Database...</p>
                                            <p className="text-white-50 small">Generating secure digital registration certificate...
                                            </p>
                                        </div>
                                        {/* Digital ID-Card Slip */}
                                        <div className="result-details d-none">
                                            <div className="verified-header text-success mb-4 text-center">
                                                <i className="fas fa-check-circle me-2 fs-3" /> Registration Completed
                                                Successfully!
                                            </div>
                                            <div className="premium-receipt-card">
                                                {/* Card Header */}
                                                <div className="receipt-header-vca">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="bg-white p-1 rounded-circle" style={{ width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <i className="fas fa-trophy text-warning fs-4" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-white mb-0 fw-bold font-monospace" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>VIJAY COMPUTER
                                                                ACADEMY</h5>
                                                            <span className="text-success small fw-bold" style={{ fontSize: '0.72rem', letterSpacing: 1 }}>COMPETITION
                                                                REGISTRATION SLIP</span>
                                                        </div>
                                                    </div>
                                                    <span className="badge bg-success-subtle text-success border border-success">ACTIVE
                                                        &amp; SECURED</span>
                                                </div>
                                                {/* Card Body */}
                                                <div className="p-4 bg-black bg-opacity-20">
                                                    <div className="row g-4 align-items-center">
                                                        {/* Student Portrait */}
                                                        <div className="col-md-4 text-center">
                                                            <div className="p-2 border border-secondary border-opacity-50 rounded bg-black bg-opacity-40 d-inline-block shadow-sm">
                                                                <img id="receiptPhoto" src alt="Student Photo" style={{ width: 125, height: 155, objectFit: 'cover', borderRadius: 6 }} />
                                                            </div>
                                                            <div className="receipt-barcode mx-auto" style={{ width: 125 }} />
                                                        </div>
                                                        {/* Record Details */}
                                                        <div className="col-md-8">
                                                            <div className="student-details-grid" style={{ rowGap: 12 }}>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-id-card text-warning me-2" />Reg
                                                                        No:</span>
                                                                    <span className="detail-value text-warning fw-bold font-monospace" id="receiptReg">VCA/COMP/2026-9041</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-user text-white-50 me-2" />Student
                                                                        Name:</span>
                                                                    <span className="detail-value text-white fw-semibold" id="receiptName">Rahul Kumar</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-user-friends text-white-50 me-2" />Father
                                                                        Name:</span>
                                                                    <span className="detail-value text-white-50" id="receiptFather">Suresh Kumar</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-school text-white-50 me-2" />School
                                                                        Name:</span>
                                                                    <span className="detail-value text-white fw-semibold" id="receiptSchool">ABC Public School</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-graduation-cap text-white-50 me-2" />Class:</span>
                                                                    <span className="detail-value text-white fw-semibold" id="receiptClass">Class 10</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-trophy text-success me-2" />Competition:</span>
                                                                    <span className="detail-value text-success fw-bold" id="receiptCompetition">Coding Battle</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-phone-alt text-white-50 me-2" />Mobile
                                                                        No:</span>
                                                                    <span className="detail-value text-white-50" id="receiptPhone">+91 8858381213</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-info-circle text-white-50 me-2" />Status:</span>
                                                                    <span className="detail-value badge bg-warning-subtle text-warning border border-warning" style={{ fontSize: '0.75rem' }}>PENDING REVIEW</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="result-footer mt-4">
                                                <button className="btn btn-verify w-100 py-3 rounded-3 animate-pulse" onclick="window.print()">
                                                    <i className="fas fa-print me-2" />Print Official Registration Slip
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
