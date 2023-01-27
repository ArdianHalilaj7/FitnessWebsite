import React from 'react'
import {Button, Card, CardGroup, PageHeader} from 'react-bootstrap';
import '../mysass.scss';



const AboutUs = () => {
  return (
    <>
<div>
<video style={{objectFit:'center'}} width="100%" height="100%" autoPlay="true" controls>
<source src="fitnessvideoo.mp4" type="video/mp4" />
</video>
</div>

<div className="d-grid gap-2" style={{marginTop:'50px'}}>
<Button variant="dark" size="lg" style={{height:'75px'}}> T E A M </Button>
</div>


    <CardGroup style={{margin:'50px'}}>

    <Card className='cardaboutus'>
    <Card.Img variant="top" src="ardian.jpg" className='cardimgaboutus'/>
    <Card.Body>
      <Card.Title><h3>Ardian Halilaj</h3></Card.Title>
      <Card.Text>
        <h5 className='h5bio'><b>CEO & Founder</b></h5>
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
    </Card>

    <Card className='cardaboutus'>
    <Card.Img variant="top" className='cardimgaboutus' src="https://i.pinimg.com/originals/4e/89/c6/4e89c6fda820d637fc6d07a3a30650c4.jpg"  />
    <Card.Body>
      <Card.Title><h3>Lazar Angelov</h3></Card.Title>
      <Card.Text>
        <h5 className='h5bio'><b>Personal Trainer</b></h5>
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
    </Card>

    <Card className='cardaboutus'>
    <Card.Img variant="top" className='cardimgaboutus' src="https://www.hfe.co.uk/wp-content/uploads/2018/12/Shaun-Stafford-Headshot1-copy-2-703x1024.jpg" />
    <Card.Body>
      <Card.Title><h3>Shaun Stafford</h3></Card.Title>
      <Card.Text>
        <h5 className='h5bio'><b>Personal Trainer</b></h5>
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
    </Card>

  </CardGroup>

</>

  )
}

export default AboutUs