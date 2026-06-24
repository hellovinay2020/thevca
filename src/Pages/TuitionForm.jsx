import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import TuitionFormSection from '../Components/TuitionFormSection'
import FooterSection from '../Components/FooterSection'

export default function TuitionForm() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Tuition Form" page="Student Zone" />
            <TuitionFormSection />
            <FooterSection />

        </div>
    )
}
