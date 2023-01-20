import React, { useState } from 'react'
import './contact.css'
import image from '../../../images/svg-3.svg'

export default function ContactSection () {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [message, setMessage] = useState("")
    return (
        <div id="contact" className="light">
            <div id="left">
                <h1>CONTACT US</h1>
                <h2>Get in touch  us</h2>
                
                <form>
                    <label for="name">Name</label>
                    <br/>
                    <input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                    <br/>
                    
                    <label for="email">Email</label>
                    <br/>
                    <input id="email" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
                    <br/>

                    <label for="message">Message</label>
                    <br/>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <br/>

                    <button type="submit" className='button'>Submit</button>
                </form>


            </div>
            <div id="right">
                <img src={image} />
            </div>
        </div>
    )
}