import React, { useState, useEffect, useCallback, useMemo } from 'react'

const galleryItems = [
    { id: 1, category: 'lab', src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80', alt: 'Advanced Computer Lab', badge: 'Computer Lab', title: 'Advanced Computer Lab', desc: 'Students practicing with modern computer systems and advanced digital learning tools.' },
    { id: 2, category: 'library', src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', alt: 'Smart Library Space', badge: 'Library', title: 'Smart Library Space', desc: 'Peaceful reading environment with books, study materials, and digital resources.' },
    { id: 3, category: 'classroom', src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80', alt: 'Modern Tech Classroom', badge: 'Classroom', title: 'Modern Classroom', desc: 'Interactive learning sessions with smart teaching methods and modern facilities.' },
    { id: 4, category: 'events', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', alt: 'Certificate Distribution', badge: 'Events', title: 'Certificate Distribution', desc: 'Special moments of achievement and certificate distribution ceremonies.' },
    { id: 5, category: 'lab', src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', alt: 'Programming Practice Session', badge: 'Computer Lab', title: 'Coding Practice Session', desc: 'Students learning programming, coding, and software development skills.' },
    { id: 6, category: 'library', src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', alt: 'Group Study Library', badge: 'Library', title: 'Group Study Area', desc: 'Comfortable study spaces designed for collaborative and focused learning.' },
    { id: 7, category: 'classroom', src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', alt: 'Interactive Lecture Room', badge: 'Classroom', title: 'Interactive Lecture Room', desc: 'Smart classrooms equipped with modern teaching technology and presentations.' },
    { id: 8, category: 'events', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', alt: 'Campus Event & Seminars', badge: 'Seminars', title: 'Workshops & Seminars', desc: 'Educational events, seminars, and training programs conducted for students.' },
]

const filters = [
    { value: 'all', label: 'All Images' },
    { value: 'lab', label: 'Computer Lab' },
    { value: 'library', label: 'Library Facility' },
    { value: 'classroom', label: 'Classroom' },
    { value: 'events', label: 'Events & Activities' },
]

const badgeClassMap = {
    lab: 'badge-lab',
    library: 'badge-library',
    classroom: 'badge-classroom',
    events: 'badge-events',
}

export default function ImageGallerySection() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const visibleItems = useMemo(() => {
        if (activeFilter === 'all') return galleryItems
        return galleryItems.filter(item => item.category === activeFilter)
    }, [activeFilter])

    const openLightbox = useCallback((index) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
        document.body.style.overflow = 'hidden'
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false)
        document.body.style.overflow = ''
    }, [])

    const navigateLightbox = useCallback((direction) => {
        if (visibleItems.length <= 1 || animating) return
        setAnimating(true)
        const nextIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length
        setTimeout(() => {
            setCurrentIndex(nextIndex)
            setAnimating(false)
        }, 150)
    }, [currentIndex, visibleItems.length, animating])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') navigateLightbox(-1)
            if (e.key === 'ArrowRight') navigateLightbox(1)
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [lightboxOpen, closeLightbox, navigateLightbox])

    const currentItem = visibleItems[currentIndex]

    return (
        <div>
            <section className="gallery-section py-5">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Our Image Gallery</h2>
                        <p className="section-subtitle">Explore memorable moments, activities, events, and achievements captured at our center.</p>
                        <div className="header-line" />
                    </div>

                    <div className="gallery-filters d-flex justify-content-center flex-wrap gap-2 mb-5">
                        {filters.map(f => (
                            <button
                                key={f.value}
                                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                                data-filter={f.value}
                                onClick={() => setActiveFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="row g-4 gallery-grid">
                        {galleryItems.map((item, index) => {
                            const isVisible = activeFilter === 'all' || item.category === activeFilter
                            return (
                                <div
                                    key={item.id}
                                    className={`col-lg-3 col-md-6 gallery-item-wrapper${isVisible ? ' show' : ' hide'}`}
                                    data-category={item.category}
                                >
                                    <div className="gallery-card">
                                        <div className="gallery-img-box" onClick={() => openLightbox(visibleItems.indexOf(item))}>
                                            <img src={item.src} alt={item.alt} className="gallery-img" />
                                            <div className="gallery-overlay">
                                                <div className="overlay-icon">
                                                    <i className="fas fa-expand-alt" />
                                                </div>
                                                <div className="overlay-details">
                                                    <span className={`gallery-badge ${badgeClassMap[item.category]}`}>{item.badge}</span>
                                                    <h4 className="gallery-item-title">{item.title}</h4>
                                                    <p className="gallery-item-desc">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {lightboxOpen && currentItem && (
                <div className="gallery-lightbox active" onClick={(e) => { if (e.target.className === 'gallery-lightbox active') closeLightbox() }}>
                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    <span className="lightbox-prev" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}>
                        <i className="fas fa-chevron-left" />
                    </span>
                    <span className="lightbox-next" onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}>
                        <i className="fas fa-chevron-right" />
                    </span>
                    <div className="lightbox-content" style={{ opacity: animating ? 0 : 1, transform: animating ? 'scale(0.98)' : 'scale(1)', transition: 'all 0.15s ease' }}>
                        <img src={currentItem.src} alt={currentItem.alt} className="lightbox-img" />
                    </div>
                </div>
            )}
        </div>
    )
}
