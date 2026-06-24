import React, { useState, useEffect } from 'react'

export default function FlipsBtn() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <div>
            <div className="floating-buttons">
                <div className="floating-left">
                    <a href="tel:+918858381213" className="float-btn float-call" title="Call Us" data-label="Call Us">
                        <i className="fas fa-phone" />
                    </a>
                    <a href="https://wa.me/918858381213" target="_blank" className="float-btn float-whatsapp" title="WhatsApp Us" data-label="WhatsApp">
                        <i className="fab fa-whatsapp" />
                    </a>
                </div>
                <div className="floating-right">
                    <button
                        className={`float-btn float-top${visible ? ' show' : ''}`}
                        onClick={scrollToTop}
                        title="Scroll to Top"
                    >
                        <i className="fas fa-arrow-up" />
                    </button>
                </div>
            </div>
        </div>
    )
}
