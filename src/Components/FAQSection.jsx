import React, { useState } from 'react'

const faqs = [
    {
        q: 'What courses do you offer at Vijay Academy?',
        a: 'We offer a wide range of courses including Basic Computer (CCC, BCC), Diploma courses (DCA, ADCA), Professional courses (Tally, DTP), and Programming languages like Python, Java, and Web Development. We also provide tuition classes for 1st to 8th-grade students.'
    },
    {
        q: 'Are the certificates provided by Vijay Academy valid?',
        a: 'Yes, all our computer courses are certified by ACSM (Academy of Computer Science & Management). These certificates are widely recognized and valuable for both private and government job applications.'
    },
    {
        q: 'What is the duration and fee for computer courses?',
        a: 'Course duration varies from 1 month to 1 year depending on the course. For example, CCC is 3 months, DCA is 6 months, and ADCA is 12 months. Fees are very affordable, starting from \u20B91,500. Please visit our academy for a detailed fee structure.'
    },
    {
        q: 'Do you provide job assistance after course completion?',
        a: 'Yes, we provide career counseling and job assistance to our students. We help students prepare for interviews and connect them with local opportunities in data entry, accounting, and office management.'
    },
    {
        q: 'Can I take a demo class before enrolling?',
        a: 'Absolutely! We offer free demo classes for 2 days so you can experience our teaching quality and infrastructure before making a decision.'
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <div>
            <section className="faq-section" id="faq">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle text-white">Got questions? We've got answers.</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="faq-image-wrapper">
                                <img src="./assets/logo/faq_logo.png" alt="FAQ Support" className="img-fluid faq-main-img" />
                                <div className="faq-floating-badge">
                                    <i className="fas fa-headset" />
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-container">
                                {faqs.map((faq, i) => (
                                    <div key={i} className={`faq-item${openIndex === i ? ' active' : ''}`}>
                                        <div className="faq-question" onClick={() => toggle(i)}>
                                            <h3>{faq.q}</h3>
                                            <span className="faq-icon"><i className="fas fa-plus" /></span>
                                        </div>
                                        <div className="faq-answer">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
