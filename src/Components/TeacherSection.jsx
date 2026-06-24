import React from 'react'

export default function TeacherSection() {
    return (
        <div>
            {/* Expert Team Section */}
            <section className="team-section" id="our-team">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Our Expert Team</h2>
                        <p className="section-subtitle text-white">Dedicated Professionals Shaping Your Future</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {/* Team Member 1 - Director */}
                        <div className="col-lg-3 col-md-6">
                            <div className="team-card">
                                <div className="team-image-wrapper">
                                    <img src="assets/logo/logo.png" alt="Director" className="team-img" />
                                    <div className="team-social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="member-name">Director Name</h4>
                                    <p className="member-role">Founder &amp; Director</p>
                                    <p className="member-exp">10+ Years Experience</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="team-card">
                                <div className="team-image-wrapper">
                                    <img src="assets/logo/logo.png" alt="Instructor" className="team-img" />
                                    <div className="team-social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="member-name">Vinay Verma</h4>
                                    <p className="member-role">Senior IT Instructor</p>
                                    <p className="member-exp">8+ Years Experience</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="team-card">
                                <div className="team-image-wrapper">
                                    <img src="assets/logo/logo.png" alt="Developer" className="team-img" />
                                    <div className="team-social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="member-name">Expert Faculty</h4>
                                    <p className="member-role">Software Specialist</p>
                                    <p className="member-exp">6+ Years Experience</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="team-card">
                                <div className="team-image-wrapper">
                                    <img src="assets/logo/logo.png" alt="Support" className="team-img" />
                                    <div className="team-social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="member-name">Support Staff</h4>
                                    <p className="member-role">Admin Coordinator</p>
                                    <p className="member-exp">5+ Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
