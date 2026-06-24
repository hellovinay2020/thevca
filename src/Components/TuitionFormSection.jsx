import React from 'react'

export default function TuitionFormSection() {
    return (
        <div>
            {/* Tuition Admission Form Section */}
            <section className="verification-section" id="tuition-admission-form">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">1st to 8th Tuition Admission Form</h2>
                        <p className="section-subtitle">
                            Register your child for quality tuition classes at VIJAY COMPUTER ACADEMY.
                        </p>
                    </div>
                    <div className="premium-form-container p-4 p-lg-5">
                        <div className="row g-5">
                            {/* Left Side */}
                            <div className="col-lg-4">
                                <div className="verification-image-box h-100">
                                    <div className="text-center mb-4">
                                        <div className="shield-container mb-3">
                                            <i className="fas fa-user-graduate shield-icon text-warning" />
                                            <div className="pulse-ring ring-1" />
                                            <div className="pulse-ring ring-2" />
                                        </div>
                                        <div className="secure-tag">
                                            <i className="fas fa-book-reader me-2 text-success" />
                                            VCA Tuition Department
                                        </div>
                                    </div>
                                    {/* Photo Upload */}
                                    <div className="drag-drop-zone" onclick="document.getElementById('tuitionPhotoInput').click()">
                                        <div id="tuitionPreviewPlaceholder">
                                            <i className="fas fa-cloud-upload-alt text-success fs-1 mb-3" />
                                            <h6 className="text-white">
                                                Upload Student Photo
                                            </h6>
                                            <p className="text-white-50 small">
                                                JPG/JPEG only (Max 1MB)
                                            </p>
                                        </div>
                                        <img id="tuitionStudentPreview" className="d-none img-fluid rounded border border-success mb-2" style={{ maxHeight: 180, width: 140, objectFit: 'cover', margin: 'auto' }} alt="Student Photo" />
                                        <p id="tuitionPreviewFileName" className="small text-white-50 mb-0 mt-2">No file chosen</p>
                                    </div>
                                    <input type="file" id="tuitionPhotoInput" className="d-none" accept=".jpg,.jpeg" onchange="handleTuitionPhotoChange(this)" />
                                    {/* Guidelines */}
                                    <div className="guidelines-card bg-black bg-opacity-25 p-3 rounded mt-4">
                                        <h6 className="text-warning mb-3">
                                            <i className="fas fa-info-circle me-2" />
                                            Admission Guidelines
                                        </h6>
                                        <ul className="list-unstyled text-white-50 small mb-0">
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2" />
                                                Fill all details correctly.
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle text-success me-2" />
                                                Bring previous class marksheet.
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle text-success me-2" />
                                                Student photo is mandatory.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side */}
                            <div className="col-lg-8">
                                <div className="verification-form-box">
                                    <h3 className="portal-heading text-white fw-bold mb-3">
                                        <i className="fas fa-school text-warning me-2" />
                                        Tuition Admission Portal
                                    </h3>
                                    <p className="text-white-50 mb-4">
                                        Fill student details carefully for tuition admission.
                                    </p>
                                    <form id="tuitionForm" onsubmit="return handleTuitionFormSubmit(event)">
                                        {/* Student Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom pb-2">
                                            Student Details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Student Name
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="studentname" id="studentname" className="form-control form-control-premium" placeholder="Enter student name" required />
                                                    <i className="fas fa-user" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Father Name
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="fathername" id="fathername" className="form-control form-control-premium" placeholder="Enter father name" required />
                                                    <i className="fas fa-user-friends" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Mother Name
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="mothername" id="mothername" className="form-control form-control-premium" placeholder="Enter mother name" required />
                                                    <i className="fas fa-female" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Mobile Number
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="tel" name="mobileno" id="mobileno" pattern="[0-9]{10}" title="10 digit mobile" className="form-control form-control-premium" placeholder="Enter mobile number" required />
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Class
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <select name="studentclass" id="studentclass" className="form-select form-select-premium" required>
                                                        <option value selected disabled>
                                                            -- Select Class --
                                                        </option>
                                                        <option>Class 1</option>
                                                        <option>Class 2</option>
                                                        <option>Class 3</option>
                                                        <option>Class 4</option>
                                                        <option>Class 5</option>
                                                        <option>Class 6</option>
                                                        <option>Class 7</option>
                                                        <option>Class 8</option>
                                                    </select>
                                                    <i className="fas fa-school" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Date of Birth
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="date" name="dob" id="dob" className="form-control form-control-premium" required />
                                                    <i className="fas fa-calendar-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Academic Details */}
                                        <div className="form-section-title mb-4 text-warning border-bottom pb-2">
                                            Academic Details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    School Name
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="schoolname" id="schoolname" className="form-control form-control-premium" placeholder="Enter school name" required />
                                                    <i className="fas fa-university" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Previous Percentage
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="number" name="previouspercentage" id="previouspercentage" className="form-control form-control-premium" placeholder="Enter percentage" />
                                                    <i className="fas fa-percent" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label-premium">
                                                    Subjects Required
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="subjectsRequired" id="subjectsRequired" className="form-control form-control-premium" placeholder="Example: Math, English, Science" />
                                                    <i className="fas fa-book" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Address */}
                                        <div className="form-section-title mb-4 text-warning border-bottom pb-2">
                                            Address Details
                                        </div>
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-12">
                                                <label className="form-label-premium">
                                                    Address
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <textarea name="address" id="address" rows={3} className="form-control form-control-premium" placeholder="Enter full address" required defaultValue={""} />
                                                    <i className="fas fa-home" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    District
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="district" id="district" className="form-control form-control-premium" defaultValue="Ballia" required />
                                                    <i className="fas fa-city" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label-premium">
                                                    Pin Code
                                                </label>
                                                <div className="input-icon-wrapper">
                                                    <input type="text" name="pincode" id="pincode" pattern="[0-9]{6}" title="6 digit pincode" className="form-control form-control-premium" placeholder="Enter pin code" required />
                                                    <i className="fas fa-map-pin" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Submit */}
                                        <button type="submit" className="btn btn-verify w-100 py-3 rounded-3">
                                            <span>Submit Tuition Admission</span>
                                            <i className="fas fa-paper-plane ms-2" />
                                        </button>
                                    </form>
                                    <div id="tuitionResult" className="verification-result-box mt-4 d-none">
                                        <div className="result-details">
                                            <div className="verified-header text-success mb-3 text-center">
                                                <i className="fas fa-check-circle me-2 fs-3" /> Admission Submitted
                                            </div>
                                            <div className="p-3 bg-black bg-opacity-20 rounded">
                                                <p className="text-white small mb-1">Student:</p>
                                                <h5 className="text-white fw-bold" id="receiptStudent">-</h5>
                                                <p className="text-white small mb-1 mt-2">Class:</p>
                                                <h6 className="text-white" id="receiptClass">-</h6>
                                                <div className="mt-3 text-center">
                                                    <img id="receiptTuitionPhoto" src alt="Photo" style={{ width: 100, height: 120, objectFit: 'cover', borderRadius: 6 }} />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <button className="btn btn-verify w-100 py-2" onclick="window.print()">
                                                    <i className="fas fa-print me-2" />Print Receipt
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
