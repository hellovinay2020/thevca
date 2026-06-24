import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import ComputerFormSection from '../Components/ComputerFormSection'
import FooterSection from '../Components/FooterSection'

export default function ComputerForm() {
  return (
    <div>
      <TopHeaderSection/>
      <NavbarSection/>
      <Breadcrumb title="Computer Form" page="Courses"/>
      <ComputerFormSection/>
      <FooterSection/>
    </div>
  )
}
