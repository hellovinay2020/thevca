import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import FooterSection from '../Components/FooterSection'
import OurVisionPage from '../Components/OurVisionPage'

export default function OurVision() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Our Vision" page="About Us" />
            <OurVisionPage />
            <FooterSection />
        </div>
    )
}
