import React from 'react'

export default function ComputerFormSection() {
    return (
        <div>
            {/* Admission Form Section */}
            <section className="verification-section" id="verification-portal">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Computer Admission Form</h2>
                        <p className="section-subtitle">Enroll in our premium computer courses online. Complete your registration
                            below.</p>
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
                                <div className="fs-3 text-success"><i className="fas fa-graduation-cap" /></div>
                                <div>
                                    <h6 className="text-white mb-0">2. Academy Course</h6>
                                    <span className="text-white-50 small">Class &amp; course allocation</span>
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
                                            <i className="fas fa-user-graduate shield-icon text-success" />
                                            <div className="pulse-ring ring-1" />
                                            <div className="pulse-ring ring-2" />
                                        </div>
                                        <div className="secure-tag mb-4">
                                            <i className="fas fa-lock me-2 text-success" /> Secure Student Enrollment Portal
                                        </div>
                                        {/* Interactive Drag & Drop Photo Upload Zone */}
                                        <div className="drag-drop-zone" id="photoDropZone" onclick="document.getElementById('photoInput').click()">
                                            <div id="previewPlaceholder">
                                                <i className="fas fa-cloud-upload-alt text-success fs-1 mb-3 animate-bounce" />
                                                <h6 className="text-white">Drag &amp; Drop Student Photo</h6>
                                                <p className="text-white-50 small mb-0" style={{ fontSize: '0.8rem' }}>or click to
                                                    browse from device</p>
                                                <span className="badge bg-secondary bg-opacity-25 text-warning mt-2" style={{ fontSize: '0.72rem' }}>JPG or JPEG, Max 1MB</span>
                                            </div>
                                            <img id="studentPhotoPreview" className="d-none img-fluid rounded border border-success mb-2" style={{ maxHeight: 180, width: 140, objectFit: 'cover', margin: '0 auto' }} alt="Student Photo" />
                                            <p id="previewFileName" className="small text-success d-none mb-0 mt-2" />
                                        </div>
                                        {/* Hidden Photo Input */}
                                        <input type="file" name="photo" id="photoInput" className="d-none" accept=".jpg, .jpeg" required onchange="handlePhotoChange(this)" />
                                    </div>
                                    {/* Admission Guidelines */}
                                    <div className="guidelines-card bg-black bg-opacity-30 p-3 rounded border border-secondary border-opacity-25 mt-4">
                                        <h5 className="text-warning small mb-3"><i className="fas fa-info-circle me-2" />Admission
                                            Guidelines:</h5>
                                        <ul className="text-white-50 list-unstyled small mb-0" style={{ lineHeight: '1.7' }}>
                                            <li className="mb-2"><i className="fas fa-check-circle text-success me-2" /> Details must
                                                match 10th Metric Certificate.</li>
                                            <li className="mb-2"><i className="fas fa-check-circle text-success me-2" /> Active mobile
                                                number required for OTP / SMS.</li>
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
                                        <i className="fas fa-file-signature text-warning" /> Online Enrollment Form
                                    </h3>
                                    <p className="portal-subheading text-white-50 mb-4">Complete student enrollment details. Fields
                                        marked with <span className="text-danger">*</span> are mandatory.</p>
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
                                                    <input type="text" name="fullname" className="form-control form-control-premium" placeholder="Enter student full name" required />
                                                    <i className="fas fa-user" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Father's Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="fathername" className="form-control form-control-premium" placeholder="Enter father's name" required />
                                                    <i className="fas fa-user-friends" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Mother's Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="mothername" className="form-control form-control-premium" placeholder="Enter mother's name" required />
                                                    <i className="fas fa-female" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Date of Birth <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="date" name="dob" className="form-control form-control-premium text-uppercase" required />
                                                    <i className="fas fa-calendar-alt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Gender <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select name="gender" className="form-select form-select-premium" required>
                                                        <option value disabled selected>Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <i className="fas fa-venus-mars" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Nationality <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="nationality" className="form-control form-control-premium" defaultValue="Indian" placeholder="Enter nationality" required />
                                                    <i className="fas fa-flag" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Section 2: Contact & Course Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom border-secondary border-opacity-50 pb-2 small fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '1.5px' }}>
                                            <i className="fas fa-graduation-cap me-2" /> Section 2: Academic &amp; Course details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Email Address <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="email" name="email" className="form-control form-control-premium" placeholder="Enter email" required />
                                                    <i className="fas fa-envelope" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Phone Number <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="tel" name="phone" className="form-control form-control-premium" placeholder="Enter phone number" pattern="[0-9]{10}" title="Ten digits mobile number" required />
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Admission Date <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="date" name="admdate" className="form-control form-control-premium text-uppercase" required />
                                                    <i className="fas fa-calendar-check" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Select Class <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select name="class" className="form-select form-select-premium" required>
                                                        <option value disabled selected>Select Class</option>
                                                        <option value="10th">10th</option>
                                                        <option value="12th">12th</option>
                                                        <option value="Graduate">Graduate</option>
                                                        <option value="Post Graduate">Post Graduate</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <i className="fas fa-school" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group-custom">
                                                <label className="form-label-premium">Course Name <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <select name="course" className="form-select form-select-premium" required>
                                                        <option value disabled selected>Select Course Name</option>
                                                        <option value="Computer Basic">Computer Basic</option>
                                                        <option value="ADCA">ADCA (Advance Diploma in Computer Application)
                                                        </option>
                                                        <option value="DCA">DCA (Diploma in Computer Application)</option>
                                                        <option value="CCC">CCC (Course on Computer Concepts)</option>
                                                        <option value="Tally ERP 9 / Prime">Tally ERP 9 / Prime (Accounting)
                                                        </option>
                                                        <option value="Web Development">Web Development (HTML/CSS/JS/React)
                                                        </option>
                                                        <option value="Programming in Python / Java">Programming Language Core
                                                        </option>
                                                    </select>
                                                    <i className="fas fa-book-open" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Section 3: Address Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom border-secondary border-opacity-50 pb-2 small fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '1.5px' }}>
                                            <i className="fas fa-map-marked-alt me-2" /> Section 3: Permanent Address Details
                                        </div>
                                        <div className="row g-3 mb-4">
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
                                                <label className="form-label-premium">Full Address <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <textarea name="address" rows={3} className="form-control form-control-premium" placeholder="Enter full permanent address" required defaultValue={""} />
                                                    <i className="fas fa-home" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group-custom">
                                                <label className="form-label-premium">Pin Code <span className="text-danger">*</span></label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="pincode" className="form-control form-control-premium" placeholder="Enter 6 digit pin code" pattern="[0-9]{6}" title="6 digit pin code" required />
                                                    <i className="fas fa-map-pin" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="btnSubmitAdmission" className="btn btn-verify w-100 py-3 rounded-3" style={{ fontSize: '1.05rem' }}>
                                            <span>Submit Admission Application</span>
                                            <i className="fas fa-paper-plane ms-2" />
                                        </button>
                                    </form>
                                    {/* Ultra-Premium ID Card Receipt Generator */}
                                    <div id="admissionResult" className="verification-result-box mt-4 d-none">
                                        {/* Loader */}
                                        <div className="result-loader text-center py-5">
                                            <div className="spinner-border text-success" style={{ width: '3rem', height: '3rem' }} role="status" />
                                            <p className="mt-3 text-white fw-bold">Synchronizing with Academy Database...</p>
                                            <p className="text-white-50 small">Generating secure digital enrollment certificate...
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
                                                            <i className="fas fa-graduation-cap text-primary fs-4" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-white mb-0 fw-bold font-monospace" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>VIJAY COMPUTER
                                                                ACADEMY</h5>
                                                            <span className="text-success small fw-bold" style={{ fontSize: '0.72rem', letterSpacing: 1 }}>STUDENT
                                                                ENROLLMENT SLIP</span>
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
                                                                    <span className="detail-label text-white-50"><i className="fas fa-id-card text-warning me-2" />Temp
                                                                        Reg No:</span>
                                                                    <span className="detail-value text-warning fw-bold font-monospace" id="receiptReg">VCA/2026/TMP-1049</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-user text-white-50 me-2" />Student
                                                                        Name:</span>
                                                                    <span className="detail-value text-white fw-semibold" id="receiptName">Rahul Kumar</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-user-friends text-white-50 me-2" />Father's
                                                                        Name:</span>
                                                                    <span className="detail-value text-white-50" id="receiptFather">Suresh Kumar</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-book-open text-success me-2" />Course
                                                                        Applied:</span>
                                                                    <span className="detail-value text-success fw-bold" id="receiptCourse">Computer Basic</span>
                                                                </div>
                                                                <div className="detail-row d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                                                                    <span className="detail-label text-white-50"><i className="fas fa-phone-alt text-white-50 me-2" />Phone
                                                                        Number:</span>
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
