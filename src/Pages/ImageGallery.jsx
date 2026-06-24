import React from 'react'
import TopHeaderSection from '../Components/TopHeaderSection'
import NavbarSection from '../Components/NavbarSection'
import Breadcrumb from '../Components/Breadcrumb'
import ImageGallerySection from '../Components/ImageGallerySection'
import FooterSection from '../Components/FooterSection'

export default function ImageGallery() {
    return (
        <div>
            <TopHeaderSection />
            <NavbarSection />
            <Breadcrumb title="Image Gallery" page="Gallery" />
            <ImageGallerySection />
            <FooterSection />

        </div>
    )
}
