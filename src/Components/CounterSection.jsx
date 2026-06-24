import React from 'react'

export default function CounterSection() {
    return (
        <div>
            {/* Counter Section */}
            <section className="counter-section" id="stats">
                <div className="container">
                    <h2 className="counter-title">Our Achievements</h2>
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="counter-item">
                                <div className="counter-number" data-target={5000}>0</div>
                                <div className="counter-label">Happy Students</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-item">
                                <div className="counter-number" data-target={50}>0</div>
                                <div className="counter-label">Courses Offered</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-item">
                                <div className="counter-number" data-target={15}>0</div>
                                <div className="counter-label">Years of Experience</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-item">
                                <div className="counter-number" data-target={100}>0</div>
                                <div className="counter-label">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
