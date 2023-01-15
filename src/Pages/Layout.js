import React from 'react'
import { Outlet } from 'react-router-dom'
import {Container, Nav, Navbar, NavDropdown, Figure} from 'react-bootstrap';
import '../mysass.scss';




const Layout = () => {
  return (

<>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:'0'}}>
      <Container>
      <Figure>
      <Figure.Image style={{marginTop:'25px'}}
        width={70}
        height={70}
        src="logo1.jpg"
      />
      </Figure>
        <Navbar.Brand href="/">AH | FITNESS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Food</Nav.Link>
            <Nav.Link href="#">Workouts</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Weight Loss</NavDropdown.Item>
              <NavDropdown.Item href="#">Weight Gain</NavDropdown.Item>
              <NavDropdown.Item href="#">Sleep</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





    <Outlet/>
</>


  )
}

export default Layout