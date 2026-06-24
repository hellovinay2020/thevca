import React, { useState, useEffect } from 'react'

const slides = [
    {
        title: 'Best Computer Education<br />Institute for Rural Students',
        desc: 'Practical computer training designed for students from villages and small towns to build confidence and career-ready skills.',
        keywords: ['Computer Skills', 'Digital Learning', 'MS Office', 'Accounting', 'Internet Knowledge', 'Practical Training']
    },
    {
        title: 'Learn Coding &amp; Build<br />Your IT Career',
        desc: 'Step into the world of programming with beginner-friendly training, practical coding sessions, and real project experience.',
        keywords: ['Coding Skills', 'Logic Building', 'Software Development', 'Programming Practice', 'Career Growth']
    },
    {
        title: 'Professional Website<br />Design &amp; Development',
        desc: 'Create modern, responsive, and attractive websites with hands-on practical learning and industry-focused guidance.',
        keywords: ['Web Design', 'Frontend Development', 'Responsive Websites', 'UI Design', 'Live Projects']
    }
]

export default function HeroSection() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const slide = slides[index]

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="container-fluid h-100">
                    <div className="row g-0 align-items-stretch h-100">
                        {/* Left Side: Content */}
                        <div className="col-lg-6 hero-content d-flex align-items-center">
                            <div className="hero-text">
                                <div className="text-slider">
                                    <div className="text-slide" key={index}>
                                        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                                        <p className="hero-description">{slide.desc}</p>
                                        <div className="hero-keywords">
                                            {slide.keywords.map((kw, j) => (
                                                <span key={j} className="keyword-tag">{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-buttons">
                                    <a href="#admission" className="btn btn-hero">Enroll Now</a>
                                    <a href="#courses" className="btn btn-outline">Learn More</a>
                                </div>
                            </div>
                        </div>
                        {/* Right Side: Orbit Animation */}
                        <div className="col-lg-6 hero-orbit d-flex align-items-center justify-content-center">
                            <div className="ag-orbit-block">
                                <div className="ag-format-container">
                                    <div className="ag-orbit_box">
                                        {/* Center Logo */}
                                        <div className="ag-orbit_center">
                                            <img src="/assets/logo/logo.png" alt="Vijay Academy" className="orbit-center-logo" />
                                        </div>
                                        <div className="ag-orbit_orbit ag-orbit_orbit__outer">
                                            <div className="ag-orbit_planet ag-orbit_planet__left ag-orbit_planet-1">
                                                <i className="fas fa-book" />
                                            </div>
                                            <div className="ag-orbit_planet ag-orbit_planet__right ag-orbit_planet-2">
                                                <i className="fas fa-award" />
                                            </div>
                                            <div className="ag-orbit_planet ag-orbit_planet__top ag-orbit_planet-5">
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="ag-orbit_orbit ag-orbit_orbit__inner ag-orbit_orbit__reverse">
                                            <div className="ag-orbit_planet ag-orbit_planet__left ag-orbit_planet-3 ag-orbit_planet__reverse">
                                                <i className="fas fa-laptop" />
                                            </div>
                                            <div className="ag-orbit_planet ag-orbit_planet__right ag-orbit_planet-4 ag-orbit_planet__reverse">
                                                <i className="fas fa-code" />
                                            </div>
                                            <div className="ag-orbit_planet ag-orbit_planet__bottom ag-orbit_planet-6 ag-orbit_planet__reverse">
                                                <i className="fas fa-globe" />
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
