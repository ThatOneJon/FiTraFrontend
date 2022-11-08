import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default function AddWorkout(){


    return(
        <Container>
        <Form>
            <Row className="text-center mt-5 mb-3">
                <h1>Placeholder for Add new Workout</h1>
            </Row>
            <Row style={{backgroundColor: "grey"}} className="mt-5">
                <Col lg ={3}></Col>
                <Col className ="d-flex flex-column justify-content-center text-center p-5" style={{backgroundColor: "white", border:"3px solid black", borderRadius:"10px"}}>
                        <Form.Group className="mb-3" controlId="dateWorkout">
                            <Form.Control size = "lg" type="password" placeholder="00 / 00 / 2000" style={{backgroundColor: "#edeef7", textAlign:"center"}}/>
                        </Form.Group> 
                   <Row>
                        <Col style={{backgroundColor:"lightgrey"}}>
                            <label>
                            <input type="radio" name="workoutType" />
                            <h2>WeightWorkout and Image</h2>
                            </label>
                        </Col>
                        <Col style={{backgroundColor:"white"}}>
                            <label>
                                <input type="radio" name="workoutType" />
                                <h2>CardioWorkout and Image</h2>
                            </label>
                        </Col>
                   </Row>
                   <Row>
                        <Button className="btn p-3 mt-4" type = "submit" variant="dark" style={{fontWeight: "bold"}}>Add new Workout</Button>
                   </Row>
                </Col>
                <Col lg ={3}></Col>
            </Row>
        </Form>
        </Container>
    )
}