import React from 'react'

export default function FooterSection() {
    return (
        <div>
            {/* Footer Section */}
            <footer className="footer-section" id="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="row g-4">
                            {/* About Footer */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h4 className="footer-title">About Vijay Academy</h4>
                                    <img src="./assets/logo/logo.png" alt="Vijay Academy Logo" className="footer-logo mb-3" width={150} />
                                    <p className="footer-description">
                                        We are dedicated to providing quality computer education to rural students,
                                        helping them gain practical skills and build a bright future.
                                    </p>
                                    <div className="footer-social">
                                        <a href="https://facebook.com" target="_blank" className="social-link">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="https://twitter.com" target="_blank" className="social-link">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="https://instagram.com" target="_blank" className="social-link">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" className="social-link">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="https://youtube.com" target="_blank" className="social-link">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Quick Links */}
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Quick Links</h4>
                                    <ul className="footer-links">
                                        <li><a href="./index.html">Home</a></li>
                                        <li><a href="./our-mission.html">Our Mission</a></li>
                                        <li><a href="./our-vision.html">Our Vision</a></li>
                                        <li><a href="director-message.html">Director Message</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="./check-form-status.html">Check Form Status</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Courses */}
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Popular Courses</h4>
                                    <ul className="footer-links">
                                        <li><a href="./computer-course.html">Computer Course</a></li>
                                        <li><a href="./programming-course.html">Programming Course</a></li>
                                        <li><a href="./tution-classes.html">Tuition Course</a></li>
                                        <li><a href="./result.html">Result</a></li>
                                        <li><a href="./marksheet-download.html">Download Marksheet</a></li>
                                        <li><a href="./i-card-download.html">Download I-Card</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Services */}
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Services</h4>
                                    <ul className="footer-links">
                                        <li><a href="./jan-sewa-kendra.html">Jan Sewa Kendra</a></li>
                                        <li><a href="./csc.html">CSC</a></li>
                                        <li><a href="./banking.html">Banking</a></li>
                                        <li><a href="./smart-library.html">Smart Library</a></li>
                                        <li><a href="sitemap.html">Sitemap</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="view-testimonials.html">Testimonials</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Contact Info */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Contact Info</h4>
                                    <div className="footer-contact">
                                        <div className="contact-item">
                                            <i className="fas fa-map-marker-alt" />
                                            <span>Firojpur, Masoompur, Ballia, Uttar Pradesh - 277303</span>
                                        </div>
                                        <div className="contact-item">
                                            <i className="fas fa-phone-alt" />
                                            <span>+91 8858381213 | +91 9889747645</span>
                                        </div>
                                        <div className="contact-item">
                                            <i className="fas fa-envelope" />
                                            <span>vijaycomputeracademy25@gmail.com</span>
                                        </div>
                                        {/* Google Map Embed */}
                                        <div className="map-container">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.438004789385!2d84.05951597486356!3d25.990144899128815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992430d3f634fd3%3A0x7bf2e957459fc6e6!2sVIJAY%20COMPUTER%20JAN%20SEWA%20KENDRA!5e1!3m2!1sen!2sin!4v1779620110217!5m2!1sen!2sin" style={{ border: 0, width: '100%', maxWidth: '100%', height: 110 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 text-center academy-tagline-wrapper">
                                    <p className="academy-tagline">
                                        आओ मिलकर कदम बढ़ाये ! | "ज्योत से ज्योत जागते चलो, ज्ञान की गंगा बहाते चलो |"
                                    </p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 text-center">
                                    <p className="copyright">
                                        2026 Vijay Computer Academy | Developed By: Vinay Verma | All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
