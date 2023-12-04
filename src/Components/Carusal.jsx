import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from "../assest/Frame 50.png";

const Carusal = () => {
    const images = [
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image1,
            thumbnail: image1,
        },
    ];
    return (
        <div>
            <ImageGallery thumbnailPosition='left' showFullscreenButton={false} showPlayButton={false} showBullets={false} showNav={false} items={images} />
        </div>
    );
};

export default Carusal;