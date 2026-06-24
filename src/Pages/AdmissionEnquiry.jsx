import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import AdmissionEnquirySection from '../Components/AdmissionEnquirySection'
import FooterSection from '../Components/FooterSection'

export default function AdmissionEnquiry() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Admission Enquiry" page="Admission" />
            <AdmissionEnquirySection />
            <FooterSection />
        </div>
    )
}
