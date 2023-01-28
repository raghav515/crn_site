import React, { useState } from 'react'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import './gallery.css'


export default function Gallery () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div id="gallery-page" className='dark'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div id="container" className="dark">
                <h2>Gallery</h2>
                <div id="grid">
                    {
                        (new Array(27)).fill(0, 0, 26).map((el, i) => {
                            let n = (i+1)/1000
                            let path = `${process.env.PUBLIC_URL}/images/gallery/${n.toString().slice(2)}.jpg`
                            return <img src={path}  key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}