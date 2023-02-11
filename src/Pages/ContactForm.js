import React from 'react'
import { Fade } from 'react-awesome-reveal';


const ContactForm = () => {
    const myStyle = {
        objectFit:"cover",
        textAlign:"center",
        color: '#000',
        fontSize: "25px",
        fontWeight: "bold",
        textShadow: "10px 10px 10px white"
    }
    return (
        <Fade>
            <div style={myStyle}>
            <p>You have sent the message successfully!</p>
            </div>
        </Fade>
    )
}

export default ContactForm