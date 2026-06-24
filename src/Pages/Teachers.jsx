import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import TeacherSection from '../Components/TeacherSection'
import FooterSection from '../Components/FooterSection'

export default function Teachers() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Teachers" page="About Us" />
            <TeacherSection />
            <FooterSection />
        </div>
    )
}
