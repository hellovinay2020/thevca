import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import CheckFormStatusSection from '../Components/CheckFormStatusSection'
import FooterSection from '../Components/FooterSection'

export default function CheckFormStatus() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Check Form Status" page="Student Zone" />
            <CheckFormStatusSection />
            <FooterSection />
        </div>
    )
}
