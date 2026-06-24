import React from 'react'

export default function CscSection() {
    return (
        <div>
            {/* All Section */}
            <section className="all-services-section" id="all-services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Common Service Center (CSC)</h2>
                        <p className="section-subtitle">
                            Common Service Center (CSC) provides various digital,
                            government, online, and citizen-related services from one place.
                        </p>
                    </div>
                    {/* CSC Highlight Card */}
                    <div className="banking-highlight-card mb-5">
                        <div className="highlight-flex">
                            <div className="highlight-icon-wrapper">
                                <i className="fas fa-microchip" />
                            </div>
                            <div className="highlight-text">
                                <h3>Digital Services - Smart Solutions</h3>
                                <p>
                                    We provide fast and reliable CSC services including
                                    Aadhaar services, passport applications, online forms,
                                    bill payments, insurance services, and many more digital solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Category 1: Digital & Online ?????? */}
                    <div className="service-category-expanded">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-laptop-code" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">
                                    Digital &amp; Online Services
                                </h3>
                                <p className="category-description">
                                    Aadhaar, passport, online forms, and digital services
                                </p>
                            </div>
                        </div>
                        <div className="services-grid">
                            {/* Aadhaar */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Aadhaar Services</h4>
                                    <span className="service-level basic">Aadhaar</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Aadhaar Services - Aadhaar update and related services
                                    </p>
                                    <ul className="service-features">
                                        <li>New Aadhaar Registration</li>
                                        <li>E-Aadhaar Download</li>
                                        <li>Name/Address Update</li>
                                        <li>Biometric Update</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Passport */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Passport Services</h4>
                                    <span className="service-level advanced">Passport</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Passport Services - Apply for international travel documents
                                    </p>
                                    <ul className="service-features">
                                        <li>New Passport Apply</li>
                                        <li>Passport Renewal</li>
                                        <li>Document Verification</li>
                                        <li>Appointment Booking</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Online Form */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Online Forms</h4>
                                    <span className="service-level professional">Online</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Online Forms - Government and private online applications
                                    </p>
                                    <ul className="service-features">
                                        <li>Government Form Filling</li>
                                        <li>Scholarship Forms</li>
                                        <li>Admission Forms</li>
                                        <li>Online Registration</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Voter ID */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Voter ID Services</h4>
                                    <span className="service-level advanced">Voter ID</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Voter Services - Apply and update voter card
                                    </p>
                                    <ul className="service-features">
                                        <li>New Voter Registration</li>
                                        <li>Name Correction</li>
                                        <li>Address Change</li>
                                        <li>Duplicate Voter Card</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Driving License */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Driving License</h4>
                                    <span className="service-level advanced">License</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        DL Services - Driving license related services
                                    </p>
                                    <ul className="service-features">
                                        <li>New Driving License</li>
                                        <li>License Renewal</li>
                                        <li>Duplicate License</li>
                                        <li>Learning License</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Kisan Registration */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Farmer Registration</h4>
                                    <span className="service-level education">Farmer</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Farmer Services - Farmer registration and schemes
                                    </p>
                                    <ul className="service-features">
                                        <li>Farmer Registration</li>
                                        <li>PM Kisan Scheme</li>
                                        <li>Farmer Card</li>
                                        <li>DBT Service</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Crop Insurance */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Crop Insurance</h4>
                                    <span className="service-level education">Scheme</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Crop Insurance - Insurance services for farmers
                                    </p>
                                    <ul className="service-features">
                                        <li>Crop Damage Claim</li>
                                        <li>Insurance Registration</li>
                                        <li>Farmer Assistance</li>
                                        <li>Online Status Check</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Category 2: Utility & Bill Payments */}
                    <div className="service-category-expanded mt-5">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-file-invoice-dollar" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Utility &amp; Bill Payment Services</h3>
                                <p className="category-description">
                                    Recharge, electricity bills, insurance, and online payment services
                                </p>
                            </div>
                        </div>
                        <div className="services-grid">
                            {/* Recharge */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Mobile &amp; DTH Recharge</h4>
                                    <span className="service-level diploma">Recharge</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Quick Recharge - Mobile and DTH recharge services
                                    </p>
                                    <ul className="service-features">
                                        <li>All Mobile Recharge</li>
                                        <li>All DTH Recharge</li>
                                        <li>Instant Recharge</li>
                                        <li>Online Payment</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Electricity Bill */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Electricity Bill</h4>
                                    <span className="service-level basic">Bills</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Electricity - Pay electricity bills online
                                    </p>
                                    <ul className="service-features">
                                        <li>Online Bill Payment</li>
                                        <li>Instant Payment Receipt</li>
                                        <li>Bill Status Check</li>
                                        <li>Secure Payment</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* LIC & Insurance */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">LIC &amp; Insurance</h4>
                                    <span className="service-level professional">Insurance</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Insurance - All types of insurance services
                                    </p>
                                    <ul className="service-features">
                                        <li>LIC Premium Payment</li>
                                        <li>Health Insurance</li>
                                        <li>Vehicle Insurance</li>
                                        <li>Policy Renewal</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Other Bills */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Other Bill Payments</h4>
                                    <span className="service-level basic">Payment</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Payments - Water, gas, and other utility bill services
                                    </p>
                                    <ul className="service-features">
                                        <li>Water Bill Payment</li>
                                        <li>Gas Cylinder Booking</li>
                                        <li>Municipal Tax</li>
                                        <li>Online Transactions</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Ayushman Card */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Ayushman Card</h4>
                                    <span className="service-level education">Health</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Health Card - Ayushman Bharat health card services
                                    </p>
                                    <ul className="service-features">
                                        <li>New Health Card</li>
                                        <li>Eligibility Verification</li>
                                        <li>Beneficiary Search</li>
                                        <li>Card Download</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Jeevan Pramaan */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Jeevan Pramaan Patra</h4>
                                    <span className="service-level diploma">Certificate</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Life Certificate - Digital life certificate for pensioners
                                    </p>
                                    <ul className="service-features">
                                        <li>Biometric Authentication</li>
                                        <li>Digital Certificate</li>
                                        <li>Instant Processing</li>
                                        <li>Online Verification</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Category 3: Printing & Travel ?????? */}
                    <div className="service-category-expanded mt-5">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fas fa-shuttle-van" />
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Printing &amp; Travel Services</h3>
                                <p className="category-description">
                                    Printing, digital work, and travel booking services
                                </p>
                            </div>
                        </div>
                        <div className="services-grid">
                            {/* Printing & Lamination */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Print &amp; Lamination</h4>
                                    <span className="service-level basic">Print</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Quality printing and lamination services
                                    </p>
                                    <ul className="service-features">
                                        <li>Color/B&amp;W Printing</li>
                                        <li>Document Lamination</li>
                                        <li>ID Card Printing</li>
                                        <li>Fast Service</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Print & Email */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Print &amp; E-Mail Services</h4>
                                    <span className="service-level basic">Digital</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Digital document and email services
                                    </p>
                                    <ul className="service-features">
                                        <li>PDF Print Service</li>
                                        <li>E-Mail Send/Receive</li>
                                        <li>Document Scanning</li>
                                        <li>Online Documentation</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                            {/* Travel Tickets */}
                            <div className="service-card">
                                <div className="service-header">
                                    <h4 className="service-name">Bus, Train &amp; Air Ticket</h4>
                                    <span className="service-level advanced">Booking</span>
                                </div>
                                <div className="service-details">
                                    <p className="service-desc">
                                        Easy travel ticket booking services
                                    </p>
                                    <ul className="service-features">
                                        <li>Railway Ticket Booking</li>
                                        <li>Bus Ticket Booking</li>
                                        <li>Flight Ticket Booking</li>
                                        <li>Instant Booking</li>
                                    </ul>
                                    <button className="enroll-btn">
                                        Apply Now <i className="fas fa-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact CTA */}
                    <div className="services-contact-cta">
                        <div className="cta-content">
                            <h3 className="cta-title">
                                Need Help With Any Service?
                            </h3>
                            <p className="cta-description">
                                Contact our CSC support center for fast and reliable assistance
                                with all online and government services.
                            </p>
                            <div className="cta-buttons">
                                <button className="cta-primary">
                                    <i className="fas fa-phone" />
                                    Call Now: +91 8858381213, +91 9889747645
                                </button>
                                <button className="cta-secondary">
                                    <i className="fas fa-envelope" />
                                    vijaycomputeracdemy25@gmail.com
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
