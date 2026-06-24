import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarSection() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="assets/logo/logo.png" alt="Vijay Academy Logo" className="navbar-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="./about.html" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us <i className="fas fa-chevron-down ms-1" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                <li><Link className="dropdown-item" to="/our-mission">
                                    Our Mission
                                </Link></li>
                                <li><Link className="dropdown-item" to="/our-vision">
                                    Our Vision
                                </Link></li>
                                <li><Link className="dropdown-item" to="/director-message">
                                    Director Message
                                </Link></li>
                                <li><Link className="dropdown-item" to="/teachers">
                                    Teachers
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/courses" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses <i className="fas fa-chevron-down ms-1" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                                <li><Link className="dropdown-item" to="/computer-course">
                                    Computer Course
                                </Link></li>
                                <li><Link className="dropdown-item" to="/programming-course">
                                    Programming Course
                                </Link></li>
                                <li><Link className="dropdown-item" to="/tution-classes">
                                    Tuition Classes
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="studentZoneDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Student Zone <i className="fas fa-chevron-down ms-1" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="studentZoneDropdown">
                                <li><Link className="dropdown-item" to="/check-attendance">
                                    Check Attendance
                                </Link></li>
                                <li><Link className="dropdown-item" to="/marksheet-verification">
                                    Download Marksheet
                                </Link></li>
                                <li><Link className="dropdown-item" to="/result">
                                    Result
                                </Link></li>
                                <li><Link className="dropdown-item" to="/admit-card">
                                    Download Admit Card
                                </Link></li>
                                <li><Link className="dropdown-item" to="/i-card">
                                    Download I-Card
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services <i className="fas fa-chevron-down ms-1" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><Link className="dropdown-item" to="/jan-sewa-kendra">
                                    Jan Seva Kendra
                                </Link></li>
                                <li><Link className="dropdown-item" to="/csc">
                                    CSC
                                </Link></li>
                                <li><Link className="dropdown-item" to="/banking">
                                    Banking
                                </Link></li>
                                <li><Link className="dropdown-item" to="/library">
                                    Smart Library
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="./services.html" id="admissionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admission Zone <i className="fas fa-chevron-down ms-1" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="admissionDropdown">
                                <li><Link className="dropdown-item" to="/admission-enquiry">
                                    Admission Enquiry
                                </Link></li>                                    <li><Link className="dropdown-item" to="/computer-form">
                                    Computer Admission Form
                                </Link></li>
                                <li><Link className="dropdown-item" to="/competition-form">
                                    Competition Form
                                </Link></li>
                                <li><Link className="dropdown-item" to="/scholarship-form">
                                    Scholarship Form
                                </Link></li>
                                <li><Link className="dropdown-item" to="/tuition-form">
                                    Tuition Form
                                </Link></li>
                                <li><Link className="dropdown-item" to="/check-form-status">
                                    Check Form Status
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="./gallery.html" id="galleryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gallery <i className="fas fa-chevron-down ms-1" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="galleryDropdown">
                                <li><Link className="dropdown-item" to="/image-gallery">
                                    Image Gallery
                                </Link></li>
                                <li><Link className="dropdown-item" to="/video-gallery">
                                    Video Gallery
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-admission" to="/admission-enquiry">
                                Admission Open
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


