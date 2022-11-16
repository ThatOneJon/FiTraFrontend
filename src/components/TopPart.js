import React, {useContext} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../context/authContext';





export default function TopPart(props){
  let {user} = useContext(AuthContext)

    return(
            <Navbar className ="customNav py-4" bg="dark" expand="md" variant="dark">
              <Container>
              <Navbar.Brand href="#home" onClick={()=>props.menuItem("home")}><img src={require('./imgs/PICS/icon.jpg')} style={{borderRadius:"50%", width: "90px"}}/> </Navbar.Brand>
                <Navbar.Brand href="#home" onClick={()=>props.menuItem("home")}><h1 style = {{fontSize: 60}}>FiTra</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto customNavToo justify-content-evenly ml-5" style={{width: "80%"}}>
                    <Nav.Link href="#home" onClick={()=>props.menuItem("home")}>Home</Nav.Link>
                    <Nav.Link href="#contact" onClick={()=>props.menuItem("unt")}>Contact</Nav.Link>
                    {user ? 
                      <> <Nav.Link href="#login" onClick="#">Logout</Nav.Link> <Nav.Link style={{color:"white"}}> Welcome, {user.username}</Nav.Link> </> 
                      : 
                      <>  <Nav.Link href="#register" onClick={()=>props.menuItem("register")}>Register</Nav.Link>
                    <Nav.Link href="#login" onClick={()=>props.menuItem("login")}>Login</Nav.Link> </>}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
}