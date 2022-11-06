import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"



export default function TopPart(){
    return(
        <Navbar className="customNav mb-2 py-4" expand = "lg">
            <container>
            <Navbar.Brand href="#home"><h2>We help your track your workout ...</h2></Navbar.Brand>
            <Navbar.Brand href="#home"><h1>FiTra</h1> fff</Navbar.Brand>

            <Nav className="me-auto">
            <Nav.Link href="#home"><h3>Home</h3></Nav.Link>
            <Nav.Link href="#link"><h3>Home</h3></Nav.Link>
            </Nav>

            </container>
        </Navbar>
    )
}