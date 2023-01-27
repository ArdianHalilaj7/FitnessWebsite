import React from 'react'
import {Button, Card, CardGroup} from 'react-bootstrap';
import '../mysass.scss';


const AboutUs = () => {
  return (
    <>

    
    <CardGroup style={{margin:'50px'}}>

    <Card className='cardaboutus'>
    <Card.Img variant="top" src="ardian.jpg" />
    <Card.Body>
      <Card.Title><h3>Ardian Halilaj</h3></Card.Title>
      <Card.Text>
        <h5 className='h5bio'><b>CEO & Founder</b></h5>
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
    </Card>

    <Card className='cardaboutus'>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/4e/89/c6/4e89c6fda820d637fc6d07a3a30650c4.jpg" />
    <Card.Body>
      <Card.Title><h3>Ardian Halilaj</h3></Card.Title>
      <Card.Text>
        <h5 className='h5bio'><b>Personal Trainer</b></h5>
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
    </Card>

    <Card className='cardaboutus'>
    <Card.Img variant="top" src="ardian.jpg" />
    <Card.Body>
      <Card.Title><h3>Ardian Halilaj</h3></Card.Title>
      <Card.Text>
        <h5 className='h5bio'><b>CEO & Founder</b></h5>
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
    </Card>

  </CardGroup>

</>

  )
}

export default AboutUs