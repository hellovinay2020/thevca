import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
    {
        text: 'Vijay Academy has completely changed my career journey. I completed the CCC course here and gained strong computer knowledge. The teachers are very supportive and explain every topic clearly. I highly recommend this institute to every student.',
        name: 'Rahul Kumar',
        course: 'CCC Course Graduate',
        icon: 'fa-user-graduate',
        stars: 5
    },
    {
        text: 'I completed the Tally course from Vijay Academy and it was a wonderful experience. The practical training and professional guidance helped me improve my accounting skills. Now I feel confident while working professionally.',
        name: 'Priya Singh',
        course: 'Tally Course Graduate',
        icon: 'fa-user-graduate',
        stars: 5
    },
    {
        text: 'The ADCA course was very comprehensive and professionally designed. I learned advanced computer applications along with practical projects. The ACSM certification added extra value to my career opportunities.',
        name: 'Amit Verma',
        course: 'ADCA Course Graduate',
        icon: 'fa-user-graduate',
        stars: 4.5
    },
    {
        text: "My child's academic performance improved a lot after joining the tuition classes here. The teachers are very patient and give personal attention to every student. I am extremely satisfied with the teaching quality.",
        name: 'Sunita Devi',
        course: 'Parent - Tuition Classes',
        icon: 'fa-user',
        stars: 5
    },
    {
        text: 'After completing the Web Development course, I started freelancing successfully. The training helped me build real-world websites and improve my technical skills. Thank you Vijay Academy for guiding me toward a better future.',
        name: 'Vikash Yadav',
        course: 'Web Development Graduate',
        icon: 'fa-user-graduate',
        stars: 5
    },
    {
        text: 'After completing the DCA course, I got a data entry job very quickly. The course content and practical training were of excellent quality. I would definitely recommend Vijay Academy to others.',
        name: 'Neha Gupta',
        course: 'DCA Course Graduate',
        icon: 'fa-user-graduate',
        stars: 5
    }
]

function renderStars(count) {
    const items = []
    const full = Math.floor(count)
    const half = count % 1 !== 0
    for (let i = 0; i < full; i++) items.push(<i key={`s${i}`} className="fas fa-star" />)
    if (half) items.push(<i key="half" className="fas fa-star-half-alt" />)
    return items
}

export default function TestimonialsSection() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div>
            <section className="testimonials-section" id="testimonials">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Student Testimonials</h2>
                        <p className="section-subtitle text-white">What our students say about us</p>
                    </div>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                            swiper.navigation.init()
                            swiper.navigation.update()
                        }}
                        loop={true}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 }
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <div className="testimonial-card">
                                    <div className="testimonial-quote">
                                        <i className="fas fa-quote-left" />
                                    </div>
                                    <p className="testimonial-text">{t.text}</p>
                                    <div className="testimonial-stars">{renderStars(t.stars)}</div>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            <i className={`fas ${t.icon}`} />
                                        </div>
                                        <div className="author-info">
                                            <h5 className="author-name">{t.name}</h5>
                                            <span className="author-course">{t.course}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <button ref={prevRef} className="swiper-button-prev"><HiChevronLeft /></button>
                        <button ref={nextRef} className="swiper-button-next"><HiChevronRight /></button>
                    </Swiper>
                    <div className="text-center mt-5">
                        <a href="view-testimonials.html" className="btn btn-premium-testimonials" id="btnViewAllTestimonials">
                            <i className="fas fa-comments me-2 text-warning animate-pulse" />
                            View Testimonials
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
