import React, { useState, useEffect } from 'react'

const certificates = [
    {
        src: './assets/certificate/CERTIFICATE_IMG_1.png',
        title: 'Computer Course Certificate'
    },
    {
        src: './assets/certificate/CERTIFICATE_IMG_2.png',
        title: 'Programming Course Certificate'
    },
    {
        src: './assets/certificate/id_card.png',
        title: 'Student Identity Card'
    }
]

export default function CertificateSection() {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (!selected) return
        const handler = (e) => {
            if (e.key === 'Escape') setSelected(null)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [selected])

    return (
        <>
            <div>
                <section className="certificate-section" id="certificates">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Certificates &amp; ID Cards</h2>
                            <p className="section-subtitle">Government Certified Courses &amp; Student Identity Cards</p>
                        </div>
                        <div className="row g-4">
                            {certificates.map((cert, i) => (
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className="certificate-card">
                                        <div className="certificate-image">
                                            <img src={cert.src} alt={cert.title} className="img-fluid" />
                                        </div>
                                        <div className="certificate-info">
                                            <h4 className="certificate-title">{cert.title}</h4>
                                            <button className="btn-view" onClick={() => setSelected(cert.src)}>View</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {selected && (
                    <div className="certificate-modal show" onClick={() => setSelected(null)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <span className="close-modal" onClick={() => setSelected(null)}>&times;</span>
                            <img src={selected} alt="Certificate Preview" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
