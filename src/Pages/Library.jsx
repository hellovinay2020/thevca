import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import LibrarySection from '../Components/LibrarySection'
import CTASection from '../Components/CTASection'
import FooterSection from '../Components/FooterSection'

export default function Library() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Library" page="Services" />
            <LibrarySection />
            <CTASection />
            <FooterSection />
        </div>
    )
}
