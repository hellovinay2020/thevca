import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import ICardSection from '../Components/ICardSection'
import FooterSection from '../Components/FooterSection'

export default function ICard() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="I-Card Download" page="Student Zone" />
            <ICardSection />
            <FooterSection />
        </div>
    )
}
