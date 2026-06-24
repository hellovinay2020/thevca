
export default function TopHeaderSection() {
    return (
        <div>
            {/* Top Header */}
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side: Contact Info */}
                        <div className="col-md-6">
                            <div className="contact-info">
                                <a href="tel:+918858381213">
                                    <i className="fas fa-phone-alt me-2" />
                                    +91 8858381213 | +91 9889747645
                                </a>
                                <a href="mailto:vijaycomputeracdemy25@gmail.com">
                                    <i className="fas fa-envelope me-2" />
                                    vijaycomputeracdemy25@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* Right Side: Social Media & Login */}
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end align-items-center ">
                                <div className="dropdown">
                                    <button className="header-login-btn ms-3" type="button" id="loginDropdown">
                                        <i className="fas fa-user me-2" />
                                        Login
                                    </button>
                                </div>
                                <a href="./development-portal.html" className="dev-portal-link ms-3">
                                    <i className="fas fa-code me-1" /> Development Portal
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
