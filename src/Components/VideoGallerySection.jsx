import React, { useState, useEffect, useCallback, useMemo } from 'react'

const videoItems = [
    { id: 1, category: 'lab', thumbnail: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80', alt: 'Academy Computer Lab Tour', videoUrl: 'https://www.youtube.com/embed/9GbV8l1hH30', badge: 'Computer Lab', title: 'Advanced Computer Lab Tour' },
    { id: 2, category: 'library', thumbnail: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', alt: 'Digital Library Facilities', videoUrl: 'https://www.youtube.com/embed/tS7up882vS8', badge: 'Library', title: 'Digital Library & Study Area' },
    { id: 3, category: 'classroom', thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80', alt: 'Web Development Class', videoUrl: 'https://www.youtube.com/embed/ZfHkugbLw-E', badge: 'Classroom', title: 'Web Development Training Class' },
    { id: 4, category: 'classroom', thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', alt: 'Technical Seminar Session', videoUrl: 'https://www.youtube.com/embed/U_PZ8jD1S2w', badge: 'Classroom', title: 'Technical Seminar & Workshop' },
    { id: 5, category: 'events', thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', alt: 'Certificate Distribution', videoUrl: 'https://www.youtube.com/embed/3eB78iF5Xhs', badge: 'Events', title: 'Certificate Distribution Ceremony' },
    { id: 6, category: 'events', thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', alt: 'Academy Annual Event', videoUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8', badge: 'Events', title: 'Annual Celebration & Cultural Program' },
]

const filters = [
    { value: 'all', label: 'All Videos' },
    { value: 'lab', label: 'Computer Lab' },
    { value: 'library', label: 'Library Facility' },
    { value: 'classroom', label: 'Classroom Sessions' },
    { value: 'events', label: 'Events & Activities' },
]

const badgeClassMap = {
    lab: 'badge-lab',
    library: 'badge-library',
    classroom: 'badge-classroom',
    events: 'badge-events',
}

export default function VideoGallerySection() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const visibleItems = useMemo(() => {
        if (activeFilter === 'all') return videoItems
        return videoItems.filter(item => item.category === activeFilter)
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
                        <h2 className="section-title">Our Video Gallery</h2>
                        <p className="section-subtitle">Watch educational activities, classroom sessions, student achievements, and special events from our center.</p>
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
                        {videoItems.map((item, index) => {
                            const isVisible = activeFilter === 'all' || item.category === activeFilter
                            return (
                                <div
                                    key={item.id}
                                    className={`col-lg-4 col-md-6 gallery-item-wrapper${isVisible ? ' show' : ' hide'}`}
                                    data-category={item.category}
                                >
                                    <div className="video-card">
                                        <div className="video-thumbnail-box" onClick={() => openLightbox(visibleItems.indexOf(item))}>
                                            <img src={item.thumbnail} alt={item.alt} className="video-thumbnail" />
                                            <div className="video-play-overlay">
                                                <div className="play-btn-glow">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="video-info">
                                            <span className={`gallery-badge ${badgeClassMap[item.category]}`}>{item.badge}</span>
                                            <h4 className="video-card-title">{item.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {lightboxOpen && currentItem && (
                <div className="video-lightbox active" onClick={(e) => { if (e.target.className === 'video-lightbox active') closeLightbox() }}>
                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    <span className="lightbox-prev" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}>
                        <i className="fas fa-chevron-left" />
                    </span>
                    <span className="lightbox-next" onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}>
                        <i className="fas fa-chevron-right" />
                    </span>
                    <div className="lightbox-content">
                        <div className="lightbox-video-wrapper">
                            <iframe
                                src={`${currentItem.videoUrl}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                                className="lightbox-video"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={currentItem.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
