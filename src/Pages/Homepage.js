import React from 'react'
import {Carousel, Button, Card, CardGroup, Accordion, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import '../mysass.scss';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
  } from 'mdb-react-ui-kit';

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












    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                AH | FITNESS
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Produktet</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bootstrap
                </a>
              </p>
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakti</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Prishtinë, 10000, Kosovë
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 383 44 123 123
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 383 44 123 123
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:<b>ReactBootstrap</b>
      </div>
    </MDBFooter>



    <Outlet/>

    </>
  )
}

export default Homepage;