import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import FooterSection from '../Components/FooterSection'
import ProgrammingCourseSection from '../Components/ProgrammingCourseSection'

export default function ProgrammingCourse() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Programming Course" page="Courses" />
            <ProgrammingCourseSection />
            <FooterSection />
        </div>
    )
}
