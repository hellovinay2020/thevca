import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import Breadcrumb from '../Components/Breadcrumb'
import MarksheetVerificationSection from '../Components/MarksheetVerificationSection'
import FooterSection from '../Components/FooterSection'
import NavbarSection from '../Components/NavbarSection'

export default function MarksheetVerification() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Marksheet Verification" page="Student Zone" />
            <MarksheetVerificationSection />
            <FooterSection />
        </div>
    )
}
