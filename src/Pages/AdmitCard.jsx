import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import AdmitCardSection from '../Components/AdmitCardSection'
import FooterSection from '../Components/FooterSection'

export default function AdmitCard() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Admit Card" page="Student Zone" />
            <AdmitCardSection />
            <FooterSection />
        </div>
    )
}
