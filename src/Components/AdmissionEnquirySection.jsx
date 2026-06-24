import React from 'react'

const courses = [
  'Computer Basics',
  'ADCA',
  'DCA',
  'CCC',
  'Tally ERP 9 / Prime',
  'Web Development',
  'Programming Course',
  'Tuition Classes',
]

export default function AdmissionEnquirySection() {
  return (
    <div>
      <section className="contact-section" id="admission-enquiry">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Admission Enquiry</h2>
            <p className="section-subtitle text-white">
              Fill the enquiry form and our team will contact you with course details and admission guidance.
            </p>
          </div>

          <div className="contact-container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="contact-info-wrapper">
                  <div className="contact-info-card">
                    <div className="info-header">
                      <h3 className="info-title">Need Admission Help?</h3>
                      <p className="info-subtitle">Talk to Vijay Computer Academy</p>
                    </div>

                    <div className="info-items">
                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-graduation-cap" />
                        </div>
                        <div className="info-content">
                          <h4>Courses</h4>
                          <p>Computer, Programming, Tally, CCC and Tuition classes</p>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="info-content">
                          <h4>Call Us</h4>
                          <p>
                            +91 8858381213 <br />
                            +91 9889747645
                          </p>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="info-content">
                          <h4>Email</h4>
                          <p>vijaycomputeracademy25@gmail.com</p>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info-content">
                          <h4>Address</h4>
                          <p>
                            Firojpur, Masoompur, Ballia,<br />
                            Uttar Pradesh - 277303
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="contact-form-wrapper">
                  <form className="contact-form" id="admissionEnquiryForm">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="studentName" className="form-label">
                            <i className="fas fa-user" /> Student Name
                          </label>
                          <input type="text" className="form-control" id="studentName" name="studentName" placeholder="Enter student full name" required />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="guardianName" className="form-label">
                            <i className="fas fa-user-friends" /> Guardian Name
                          </label>
                          <input type="text" className="form-control" id="guardianName" name="guardianName" placeholder="Enter father / guardian name" required />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">
                            <i className="fas fa-phone" /> Mobile Number
                          </label>
                          <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter 10 digit mobile number" pattern="[0-9]{10}" title="Please enter 10 digit mobile number" required />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            <i className="fas fa-envelope" /> Email Address
                          </label>
                          <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="course" className="form-label">
                            <i className="fas fa-book-open" /> Course Interested
                          </label>
                          <select className="form-control" id="course" name="course" required defaultValue="">
                            <option value="" disabled>Select a course</option>
                            {courses.map((course) => (
                              <option key={course} value={course}>{course}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="qualification" className="form-label">
                            <i className="fas fa-school" /> Qualification / Class
                          </label>
                          <input type="text" className="form-control" id="qualification" name="qualification" placeholder="Example: 10th, 12th, Graduate" required />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="preferredTime" className="form-label">
                            <i className="fas fa-clock" /> Preferred Time
                          </label>
                          <select className="form-control" id="preferredTime" name="preferredTime" defaultValue="">
                            <option value="" disabled>Select batch time</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="village" className="form-label">
                            <i className="fas fa-location-dot" /> Village / City
                          </label>
                          <input type="text" className="form-control" id="village" name="village" placeholder="Enter village or city" required />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="message" className="form-label">
                            <i className="fas fa-comment" /> Message
                          </label>
                          <textarea className="form-control" id="message" name="message" rows={5} placeholder="Write your question or admission requirement" />
                        </div>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-submit">
                          <i className="fas fa-paper-plane" />
                          Submit Enquiry
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
