import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import CompetitionFormSection from '../Components/CompetitionFormSection'
import FooterSection from '../Components/FooterSection'

export default function ComptitionForm() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Competition Form" page="Student Zone" />
            <CompetitionFormSection />
            <FooterSection />
        </div>
    )
}
