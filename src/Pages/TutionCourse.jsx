import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import TitutionClassesSection from '../Components/TitutionClassesSection'
import FooterSection from '../Components/FooterSection'

export default function TutionCourse() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Tuition Classes" page="Courses" />
            <TitutionClassesSection />
            <FooterSection />
        </div>
    )
}
