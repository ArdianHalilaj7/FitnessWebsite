import React from 'react'
import { Fade } from 'react-awesome-reveal';


const SubmitForm = () => {
    const myStyle = {
        top:"50%",
        left:"50%",
        position:"absolute",
        transform:"translate(-50%, -50%)",
        textAlign:"center",
        color: '#000',
        fontSize: "25px",
        fontWeight: "bold",
        textShadow: "10px 10px 10px gray"
    }
    return (
        <Fade delay={500}>
            <div style={myStyle}>
            <h1> Miresevini! </h1>
            <p>Ju jeni kyqur me sukses</p>
            </div>
        </Fade>
    )
}

export default SubmitForm