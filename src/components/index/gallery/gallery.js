import './gallery.css'
import React from 'react'
import collage from '../../../images/collage.png'

export default function GallerySection () {
    return (
        <div id="gallery" className="light">
            <div id="left">
                <img src={collage} />
            </div>
            <div id="right">
                <h1>GALLERY</h1>
                <h2>Snapshots</h2>
                <a className="button">Learn More</a>
            </div>
        </div>
    )
}