import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import OurMissionPage from '../Components/OurMissionPage'
import FooterSection from '../Components/FooterSection'

export default function OurMission() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Our Mission" page="About Us" />
            <OurMissionPage />
            <FooterSection />

        </div>
    )
}
