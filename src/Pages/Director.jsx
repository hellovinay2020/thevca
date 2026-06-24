import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import DirectorSection from '../Components/DirectorSection'
import FooterSection from '../Components/FooterSection'

export default function Director() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Director's Message" page="About Us" />
            <DirectorSection />
            <FooterSection />
        </div>
    )
}
