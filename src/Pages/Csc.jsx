import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import CscSection from '../Components/CscSection'
import FooterSection from '../Components/FooterSection'

export default function Csc() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="CSC" page="Services" />
            <CscSection />
            <FooterSection />
        </div>
    )
}
