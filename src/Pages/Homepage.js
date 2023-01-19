import React from 'react'
import {Carousel, Button, Card, CardGroup, Accordion, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import '../mysass.scss';

const Homepage = () => {
  return (
    <>

<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fitness1.jpg"
        />
        <Carousel.Caption>
        <Button variant="outline-light">G Y M</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fitness3.jpg"
        />

        <Carousel.Caption>
        <Button variant="outline-light">HEALTH</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fitness6.jpg"
        />
        <Carousel.Caption>
        <Button variant="outline-light">GAIN</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <Accordion defaultActiveKey="0" style={{padding:'50px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{backgroundColor:'black', color:'white', padding:'5px'}}><b>Qoutes</b></Accordion.Header>
        <Accordion.Body>
        <Card style={{padding:'20px'}}>
      <Card.Header style={{backgroundColor:'black', color:'white', padding:'10px'}}>Quote 1:</Card.Header>
      <Card.Body style={{outlineStyle:'solid', outlineColor:'gray'}}>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            You become, what you believe.{' '}
          </p>
          <footer className="blockquote-footer">
            Oprah Winfey
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

        <Card style={{padding:'20px'}}>
      <Card.Header style={{backgroundColor:'black', color:'white', padding:'10px'}}>Quote 2:</Card.Header>
      <Card.Body style={{outlineStyle:'solid', outlineColor:'gray'}}>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Practice puts brains in your muscles.{' '}
          </p>
          <footer className="blockquote-footer">
            Sam Snead
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <Card style={{padding:'20px'}}>
      <Card.Header style={{backgroundColor:'black', color:'white', padding:'10px'}}>Quote 3:</Card.Header>
      <Card.Body style={{outlineStyle:'solid', outlineColor:'gray'}}>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Success start with the self-dicipline.{' '}
          </p>
          <footer className="blockquote-footer">
            Unknown
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

<br/>
   

<div className="d-grid gap-2">
<Button variant="dark" size="lg"> M o t i v a t i o n: </Button>
</div>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="motivation1.jpg" className='imgcard' />
        <Card.Body>
          <Card.Title>Do It</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="motivation2.jpg" className='imgcard'/>
        <Card.Body>
          <Card.Title>Feed your Focus</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="motivation3.jpg" className='imgcard' />
        <Card.Body>
          <Card.Title>Work Harder</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="motivation4.jpg" className='imgcard' />
        <Card.Body>
          <Card.Title>Nobody cares, work harder</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="motivation5.jpg" className='imgcard' />
        <Card.Body>
          <Card.Title>No pain, no gain shutup and train</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>






    <Outlet/>

    </>
  )
}

export default Homepage;