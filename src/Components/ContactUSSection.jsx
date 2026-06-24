import React from 'react'

export default function ContactUSSection() {
    return (
        <div>
            {/* Contact Us Section */}
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Contact Us</h2>
                        <p className="section-subtitle text-white">
                            Feel free to contact us for any course information or guidance
                        </p>
                    </div>
                    <div className="contact-container">
                        <div className="row g-4">
                            {/* Contact Info */}
                            <div className="col-lg-4">
                                <div className="contact-info-wrapper">
                                    <div className="contact-info-card">
                                        <div className="info-header">
                                            <h3 className="info-title">Get In Touch</h3>
                                            <p className="info-subtitle">We're here to help you</p>
                                        </div>
                                        <div className="info-items">
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
                                            <div className="info-item">
                                                <div className="info-icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="info-content">
                                                    <h4>Phone</h4>
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
                                                    <i className="fas fa-clock" />
                                                </div>
                                                <div className="info-content">
                                                    <h4>Working Hours</h4>
                                                    <p>
                                                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                                                        Sunday: Closed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Social Links */}
                                        <div className="social-links">
                                            <h4>Follow Us</h4>
                                            <div className="social-icons">
                                                <a href="https://facebook.com" target="_blank" className="social-icon">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="https://twitter.com" target="_blank" className="social-icon">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="https://instagram.com" target="_blank" className="social-icon">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="https://linkedin.com" target="_blank" className="social-icon">
                                                    <i className="fab fa-linkedin-in" />
                                                </a>
                                                <a href="https://youtube.com" target="_blank" className="social-icon">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Contact Form */}
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <form className="contact-form" id="contactForm">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstName" className="form-label">
                                                        <i className="fas fa-user" /> First Name
                                                    </label>
                                                    <input type="text" className="form-control" id="firstName" name="firstName" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastName" className="form-label">
                                                        <i className="fas fa-user" /> Last Name
                                                    </label>
                                                    <input type="text" className="form-control" id="lastName" name="lastName" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">
                                                        <i className="fas fa-envelope" /> Email Address
                                                    </label>
                                                    <input type="email" className="form-control" id="email" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone" className="form-label">
                                                        <i className="fas fa-phone" /> Phone Number
                                                    </label>
                                                    <input type="tel" className="form-control" id="phone" name="phone" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="course" className="form-label">
                                                        <i className="fas fa-graduation-cap" /> Course Interested
                                                    </label>
                                                    <select className="form-control" id="course" name="course" required>
                                                        <option value>Select a Course</option>
                                                        <option value="web-development">Web Development</option>
                                                        <option value="programming">Programming</option>
                                                        <option value="computer-basics">Computer Basics</option>
                                                        <option value="ms-office">MS Office</option>
                                                        <option value="advanced-programming">Advanced Programming</option>
                                                        <option value="data-science">Data Science</option>
                                                        <option value="digital-marketing">Digital Marketing</option>
                                                        <option value="graphic-design">Graphic Design</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="subject" className="form-label">
                                                        <i className="fas fa-tag" /> Subject
                                                    </label>
                                                    <input type="text" className="form-control" id="subject" name="subject" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="message" className="form-label">
                                                        <i className="fas fa-comment" /> Message
                                                    </label>
                                                    <textarea className="form-control" id="message" name="message" rows={5} required defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="terms" required />
                                                    <label className="form-check-label" htmlFor="terms">
                                                        I agree to the terms and conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-submit">
                                                    <i className="fas fa-paper-plane" />
                                                    Send Message
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
