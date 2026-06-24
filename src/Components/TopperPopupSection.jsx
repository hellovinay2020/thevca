import React, { useState, useEffect } from 'react'

const toppers = [
    { rank: 1, name: 'Rahul Kumar', course: 'ADCA Course', pct: '98.5%', gradient: 'linear-gradient(135deg, #ffd700, #ff9800)' },
    { rank: 2, name: 'Priya Singh', course: 'Web Development', pct: '96.2%', gradient: 'linear-gradient(135deg, #c0c0c0, #a0a0a0)' },
    { rank: 3, name: 'Amit Verma', course: 'Programming Course', pct: '94.8%', gradient: 'linear-gradient(135deg, #cd7f32, #b8860b)' }
]

export default function TopperPopupSection() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!show) return
        document.body.style.overflow = 'hidden'
        const handler = (e) => { if (e.key === 'Escape') setShow(false) }
        window.addEventListener('keydown', handler)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handler)
        }
    }, [show])

    return (
        <div>
            <div className={`topper-popup-overlay${show ? ' show' : ''}`} onClick={() => setShow(false)}>
                <div className="topper-popup-container" onClick={e => e.stopPropagation()}>
                    <button className="topper-popup-close" onClick={() => setShow(false)}>&times;</button>
                    <div className="topper-popup-header">
                        <div className="topper-popup-icon">
                            <i className="fas fa-trophy" />
                        </div>
                        <h2 className="topper-popup-title">Our Top Performers</h2>
                        <p className="topper-popup-subtitle">Congratulations to our outstanding students!</p>
                    </div>
                    <div className="topper-popup-body">
                        {toppers.map((t, i) => (
                            <div key={i} className="topper-card">
                                <div className={`topper-rank rank-${t.rank}`}>{t.rank}</div>
                                <div className="topper-avatar" style={{ background: t.gradient }}>
                                    <i className="fas fa-user-graduate" />
                                </div>
                                <h3 className="topper-name">{t.name}</h3>
                                <p className="topper-course">{t.course}</p>
                                <div className="topper-percentage">{t.pct}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
