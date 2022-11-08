import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'




export default function Profile(){
    
    const [profileData, SetProfileData] = React.useState([])
    React.useEffect(()=> {
        console.log("fetch here")
    },)

    return(
        <Container  fluid ="lg" className="p-4 profileContainer">
            <Row className="mb-3">
                <Col size="lg" style={{backgroundColor: "lightgrey", textAlign:"center"}}>
                        <h1 style={{fontWeight:"bold", fontSize:"3rem",}}>Placeholder for userName</h1>
                        <img src="https://d1bvpoagx8hqbg.cloudfront.net/259/4ea4217efbbf179e02269b065d23a60e.jpg" style = {{borderRadius: "20px"}} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col style={{backgroundColor: "lightgrey", textAlign:"center"}}><h1 style={{textDecoration:"underline", fontSize:"2.3rem",}}>My Workouts</h1></Col>
            </Row>
            <Row className="mb-3">
                <Col sm size="lg" style={{backgroundColor: "black"}}><h1>1</h1></Col>
                <Col sm size="lg" style={{backgroundColor: "grey"}}><h1>1</h1></Col>
            </Row>

            <Row style={{backgroundColor: "grey"}}>
                <Col lg ={4}></Col>
                <Col className ="d-flex flex-column justify-content-center" style={{backgroundColor: "grey"}}>
                <Button className="btn-lg mb-2 p-3" variant="dark" style={{fontWeight: "bold"}}>Add Workout</Button>
                <Button className="btn-lg p-3" variant="dark" style={{fontWeight: "bold"}}>Summerize</Button>
                </Col>
                <Col lg ={4}></Col>
            </Row>

        </Container>

    )
}