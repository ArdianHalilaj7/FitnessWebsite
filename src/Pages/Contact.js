import React, { useState } from 'react'
import {TextField,} from '@material-ui/core'
import {Button, Card,CardGroup,Row} from 'react-bootstrap';
import {useFormik} from 'formik';
import *as Yup from 'yup';
import ContactForm from './ContactForm';
import '../mysass.scss';

const Contact = () => {

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string(),
      message: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log(values);
      setIsSubmitSuccess(true)
    },
  });

  return (
    <>


<div className="d-flex justify-content-around">

<CardGroup className="text-center"  style={{ width: '80%', paddingTop:'5px'}}>
  <Row sm={2} md={3} lg={6}>
<Card className='cardcontact'>
<Card.Img variant="top"
src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png"/>
   <Card.Body>
     <Button 
       variant="outline-primary"  
       href='https://www.facebook.com/ard.halilaj/'>
        Facebook
      </Button>
  </Card.Body>
</Card>


<Card className='cardcontact'>
<Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"/>
   <Card.Body>
     <Button 
       variant="outline-info"  
       href='https://www.twitter.com/'>
         Twitter
      </Button>
  </Card.Body>
</Card>


<Card className='cardcontact'>
<Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"/>
   <Card.Body>
     <Button 
       variant="outline-danger"  
       href='https://www.instagram.com/'>
         Instagram
      </Button>
  </Card.Body>
</Card>


<Card className='cardcontact'>
<Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"/>
   <Card.Body>
     <Button 
       variant="outline-primary"  
       href='https://www.instagram.com/'>
         Linkedin
      </Button>
  </Card.Body>
</Card>


<Card className='cardcontact'>
<Card.Img variant="top" src="https://i.pinimg.com/originals/ed/75/23/ed752330de094018193026d06f9cabab.png"/>
   <Card.Body>
     <Button 
       variant="outline-warning"  
       href='https://www.snapchat.com/'>
         Snapchat
      </Button>
  </Card.Body>
</Card>


<Card className='cardcontact'>
<Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png"/>
   <Card.Body>
     <Button 
       variant="outline-dark"  
       href='https://www.gmail.com/'>
         Gmail
      </Button>
  </Card.Body>
</Card>
</Row>
</CardGroup>
</div>


<br/>
<br/>
<br/>



    <div className="container" style={{backgroundColor:'darkgray', borderRadius:'70px'}}>
      <div className={!isSubmitSuccess ? "signin signin_wrapper" : "signin signin_success"} style={{padding:"100px"}}>
        {isSubmitSuccess ? (
          <ContactForm />
        ) : (
          <form onSubmit={formik.handleSubmit}>
             <h1>Let's have a chat</h1>
             <h6>Interested in working together or have any question</h6>

             <TextField
              name="name"
              type="text"
              placeholder="Name"
              className="textField"
              style={{width:'200px'}}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />


            <TextField
              name="email"
              type="text"
              placeholder="Email"
              className="textField"
              style={{width:'250px'}}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <TextField
              name="message"
              type="textArea"
              placeholder="Message"
              className="textArea"
              style={{width:'300px', height:'50px'}}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            <br/>

              <Button variant="dark" type="submit">Send</Button>
          </form>
        )}
      </div>
    </div>


</>
  );
};

export default Contact