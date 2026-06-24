import React from 'react'

export default function DirectorSection() {
    return (
        <div>
            {/* Director Message Section */}
            <section className="director-message-section" id="director-message">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Director's Message</h2>
                        <p className="section-subtitle text-white">A Message from Our Visionary Leader</p>
                    </div>
                    <div className="director-message-container">
                        <div className="row g-5 align-items-center">
                            {/* Left Side: Director Image */}
                            <div className="col-lg-4">
                                <div className="director-image-wrapper">
                                    <div className="director-image">
                                        <img src="assets/logo/logo.png" alt="Director" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="director-info">
                                        <h4 className="director-name">Director Name</h4>
                                        <p className="director-designation">Founder &amp; Director</p>
                                        <p className="director-experience">10+ Years in Education &amp; Technology</p>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side: Message Content */}
                            <div className="col-lg-8">
                                <div className="director-message-content">
                                    <h3 className="message-heading">A Vision for Rural Transformation</h3>
                                    <p className="message-text">
                                        <strong>Dear Students, Parents, and Well-wishers,</strong>
                                    </p>
                                    <p className="message-text">
                                        I am proud to say that Vijay Academy's journey began in 2015 with the goal of providing
                                        digital education to rural students. Today, thousands of students have studied here and
                                        given wings to their dreams and touched the heights of success.
                                    </p>
                                    <p className="message-text">
                                        When I started Vijay Academy, my dream was simple yet powerful ? to bridge the digital
                                        divide in rural India. Today, I am proud to see our students not just learning
                                        technology, but becoming change-makers in their communities. Every certificate they
                                        earn, every skill they master, and every business they start is a testament to what's
                                        possible when passion meets opportunity.
                                    </p>
                                    <p className="message-text">
                                        <strong>Our commitment is unwavering:</strong> We believe in quality over quantity,
                                        practical learning over theoretical knowledge, and student success over everything else.
                                        Our faculty members are not just teachers; they are mentors who care deeply about each
                                        student's journey.
                                    </p>
                                    <div className="message-highlights">
                                        <div className="highlight-item">
                                            <i className="fas fa-check-circle" />
                                            <span>Industry-focused curriculum designed for real-world success</span>
                                        </div>
                                        <div className="highlight-item">
                                            <i className="fas fa-check-circle" />
                                            <span>Expert faculty with hands-on industry experience</span>
                                        </div>
                                        <div className="highlight-item">
                                            <i className="fas fa-check-circle" />
                                            <span>100% placement support and career guidance</span>
                                        </div>
                                        <div className="highlight-item">
                                            <i className="fas fa-check-circle" />
                                            <span>Affordable courses making quality education accessible to all</span>
                                        </div>
                                    </div>
                                    <p className="message-text message-closing">
                                        I invite you to join Vijay Academy and be part of this transformative journey. Together,
                                        we can create a rural India that is digitally empowered, economically strong, and ready
                                        for the future. Your success is our mission. Your growth is our vision.
                                    </p>
                                    <p className="message-signature">
                                        <strong>With best wishes,</strong><br />
                                        <strong>Director, Vijay Academy</strong>
                                    </p>
                                    <div className="message-cta">
                                        <a href="#admission" className="btn btn-primary">Start Your Journey Today</a>
                                        <a href="#contact" className="btn btn-outline-secondary">Contact Us</a>
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
