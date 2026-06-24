import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import ComputerCourseSection from '../Components/ComputerCourseSection'
import FooterSection from '../Components/FooterSection'
import Breadcrumb from '../Components/Breadcrumb'

export default function ComputerCourse() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Computer Course" page="Courses" />
            <ComputerCourseSection />
            <FooterSection />
        </div>
    )
}
