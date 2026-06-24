import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import ScholarshipFormSection from '../Components/ScholarshipFormSection'
import FooterSection from '../Components/FooterSection'

export default function ScholarshipFrom() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Scholarship Form" page="Admission Zone" />
            <ScholarshipFormSection />
            <FooterSection />
        </div>
    )
}
