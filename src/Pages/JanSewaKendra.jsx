import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import JanSewaKendraSection from '../Components/JanSewaKendraSection'
import FooterSection from '../Components/FooterSection'
import ContactCTASection from '../Components/ContactCTASection'

export default function JanSewaKendra() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Jan Sewa Kendra" page="Student Zone" />
            <JanSewaKendraSection />
            <ContactCTASection />
            <FooterSection />
        </div>
    )
}
