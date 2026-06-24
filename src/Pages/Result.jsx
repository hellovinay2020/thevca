import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import ResultSection from '../Components/ResultSection'
import FooterSection from '../Components/FooterSection'

export default function Result() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Result" page="Student Zone" />
            <ResultSection />
            <FooterSection />
        </div>
    )
}
