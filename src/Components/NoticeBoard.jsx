import React from 'react'

export default function NoticeBoard() {
    return (
        <>
            {/* Notice Board Section */}
            <section className="notice-board-section" id="notice-board">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Notice Board</h2>
                        <p className="section-subtitle">
                            Latest Updates &amp; Student Achievements
                        </p>
                    </div>
                    <div className="row">
                        {/* Notice Items */}
                        <div className="col-lg-8">
                            <div className="notice-items">
                                <h3 className="notice-heading">Latest Notices</h3>
                                <marquee direction="up" scrollamount="2.5" onmouseover="this.stop()" onmouseout="this.start()" height={380} style={{ height: 380 }}>
                                    {/* Notice 1 */}
                                    <div className="notice-item">
                                        <div className="notice-date">
                                            <span className="date-day">15</span>
                                            <span className="date-month">May</span>
                                        </div>
                                        <div className="notice-content">
                                            <h4 className="notice-title">
                                                Admission Open for New Batch
                                            </h4>
                                            <p className="notice-description">
                                                Admissions are now open for Computer Courses,
                                                Programming Courses, and Tuition Classes.
                                                Last date: 31st May 2026.
                                            </p>
                                            <span className="notice-tag important">
                                                Important
                                            </span>
                                        </div>
                                    </div>
                                    {/* Notice 2 */}
                                    <div className="notice-item">
                                        <div className="notice-date">
                                            <span className="date-day">10</span>
                                            <span className="date-month">May</span>
                                        </div>
                                        <div className="notice-content">
                                            <h4 className="notice-title">
                                                Result Declaration
                                            </h4>
                                            <p className="notice-description">
                                                April 2026 examination results will be declared
                                                on 20th May 2026. Students can check their
                                                results online.
                                            </p>
                                            <span className="notice-tag exam">
                                                Exam
                                            </span>
                                        </div>
                                    </div>
                                    {/* Notice 3 */}
                                    <div className="notice-item">
                                        <div className="notice-date">
                                            <span className="date-day">05</span>
                                            <span className="date-month">May</span>
                                        </div>
                                        <div className="notice-content">
                                            <h4 className="notice-title">
                                                Holiday Notice
                                            </h4>
                                            <p className="notice-description">
                                                The academy will remain closed on
                                                25th May 2026 due to Summer Vacation.
                                            </p>
                                            <span className="notice-tag holiday">
                                                Holiday
                                            </span>
                                        </div>
                                    </div>
                                    {/* Notice 4 */}
                                    <div className="notice-item">
                                        <div className="notice-date">
                                            <span className="date-day">01</span>
                                            <span className="date-month">May</span>
                                        </div>
                                        <div className="notice-content">
                                            <h4 className="notice-title">
                                                Workshop on Web Development
                                            </h4>
                                            <p className="notice-description">
                                                Free workshop on Modern Web Development
                                                on 15th May 2026. Register now!
                                            </p>
                                            <span className="notice-tag event">
                                                Event
                                            </span>
                                        </div>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                        {/* Recent Pass Students */}
                        <div className="col-lg-4">
                            <div className="recent-pass-students">
                                <h3 className="students-heading">
                                    Recent Pass Students
                                </h3>
                                <marquee direction="up" scrollamount="2.5" onmouseover="this.stop()" onmouseout="this.start()" height={380} style={{ height: 380 }}>
                                    {/* Student 1 */}
                                    <div className="student-profile">
                                        <div className="student-avatar">
                                            <img src="https://picsum.photos/seed/student1/50/50.jpg" alt="Student" />
                                        </div>
                                        <div className="student-info">
                                            <h4 className="student-name">Rahul Kumar</h4>
                                            <p className="student-course">Web Development</p>
                                            <span className="student-grade">A+</span>
                                        </div>
                                    </div>
                                    {/* Student 2 */}
                                    <div className="student-profile">
                                        <div className="student-avatar">
                                            <img src="https://picsum.photos/seed/student2/50/50.jpg" alt="Student" />
                                        </div>
                                        <div className="student-info">
                                            <h4 className="student-name">Priya Singh</h4>
                                            <p className="student-course">Programming Course</p>
                                            <span className="student-grade">A+</span>
                                        </div>
                                    </div>
                                    {/* Student 3 */}
                                    <div className="student-profile">
                                        <div className="student-avatar">
                                            <img src="https://picsum.photos/seed/student3/50/50.jpg" alt="Student" />
                                        </div>
                                        <div className="student-info">
                                            <h4 className="student-name">Amit Sharma</h4>
                                            <p className="student-course">Computer Basics</p>
                                            <span className="student-grade">A</span>
                                        </div>
                                    </div>
                                    {/* Student 4 */}
                                    <div className="student-profile">
                                        <div className="student-avatar">
                                            <img src="https://picsum.photos/seed/student4/50/50.jpg" alt="Student" />
                                        </div>
                                        <div className="student-info">
                                            <h4 className="student-name">Sunita Devi</h4>
                                            <p className="student-course">MS Office</p>
                                            <span className="student-grade">A+</span>
                                        </div>
                                    </div>
                                    {/* Student 5 */}
                                    <div className="student-profile">
                                        <div className="student-avatar">
                                            <img src="https://picsum.photos/seed/student5/50/50.jpg" alt="Student" />
                                        </div>
                                        <div className="student-info">
                                            <h4 className="student-name">Rajesh Kumar</h4>
                                            <p className="student-course">Tuition Classes</p>
                                            <span className="student-grade">A</span>
                                        </div>
                                    </div>
                                    {/* Student 6 */}
                                    <div className="student-profile">
                                        <div className="student-avatar">
                                            <img src="https://picsum.photos/seed/student6/50/50.jpg" alt="Student" />
                                        </div>
                                        <div className="student-info">
                                            <h4 className="student-name">Vikash Maurya</h4>
                                            <p className="student-course">Data Science</p>
                                            <span className="student-grade">A+</span>
                                        </div>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
