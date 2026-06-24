import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import Breadcrumb from '../Components/Breadcrumb'
import CheckAttendanceSection from '../Components/CheckAttendanceSection'
import FooterSection from '../Components/FooterSection'
import NavbarSection from '../Components/NavbarSection'

export default function CheckAttendance() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Check Attendance" page="Attendance" />
            <CheckAttendanceSection />
            <FooterSection />
        </div>
    )
}
