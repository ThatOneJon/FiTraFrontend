import React, {useContext} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AuthContext from '../context/authContext';


export default function Login(){

    let {name} = useContext(AuthContext)

    return(
        <Container fluid="lg" className="mt-5 mb-4">
            <Row className="justify-content-center">
                <Col lg ={5}>
                    <h1 className = "formH1">Login</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label className="mt-3 customLabel">Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control size = "lg" type="text" placeholder="Username" style={{backgroundColor: "#edeef7"}}/>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLoginPassword">
                            <Form.Label className="mt-3 customLabel">Password</Form.Label>
                            <Form.Control size = "lg" type="password" placeholder="Password" style={{backgroundColor: "#edeef7"}}/>
                        </Form.Group>
                        <Button variant="dark" type="submit" className="btn-lg">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>


        </Container>
    )
}