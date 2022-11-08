import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





export default function TopPart(){
    return(
        
            <Navbar className ="customNav py-4" bg="dark" expand="md" variant="dark">
              <Container>
                <Navbar.Brand href="#home"><h1 style = {{fontSize: 60}}>FiTra</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto customNavToo justify-content-evenly ml-5" style={{width: "80%"}}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
}