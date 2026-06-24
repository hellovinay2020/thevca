import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import VideoGallerySection from '../Components/VideoGallerySection'
import FooterSection from '../Components/FooterSection'

export default function VideoGallery() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Video Gallery" page="Gallery" />
            <VideoGallerySection />
            <FooterSection />

        </div>
    )
}
