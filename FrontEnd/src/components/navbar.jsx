import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function PGHnavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><a href="https://vitejs.dev" target="_blank">
            <img src="https://us.123rf.com/450wm/thesilhouettequeen/thesilhouettequeen2010/thesilhouettequeen201008659/158114154-slacklining-silhouette-vector.jpg?ver=6  " className="logo" />
         </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#services">Whats Offered</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Goal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Schedule Lessons
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cancle Lessons</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                 Students Progress 
               </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PGHnavbar;