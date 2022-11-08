import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function Register () {

    const[formData, setFormData] = React.useState([])

    function handleSubmit(){
        console.log("submitted")
    }

  return (
    <Container fluid="lg" className="mt-5 mb-4">
        <Row className="justify-content-center">
        <Col lg ={5}>
            <h1 className = "formH1">Register</h1>
            <Form className="mt-3" onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicUsername">
                        <Form.Label className="mt-3 customLabel">Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control size = "lg" type="text" placeholder="Username" style={{backgroundColor: "#edeef7"}}/>
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-1" controlId="formBasicFirstName">
                    <Form.Label className="mt-3 customLabel">First name</Form.Label>
                    <Form.Control size = "lg" type="text" placeholder="Enter First name" style={{backgroundColor: "#edeef7"}}/>
                </Form.Group>

                <Form.Group controlId = "formBasicLastName">
                    <Form.Label className="mt-3 customLabel">Last name</Form.Label>
                    <Form.Control size = "lg" type="text" placeholder="Enter Last name" style={{backgroundColor: "#edeef7"}}/>
                </Form.Group>


                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label className="mt-3 customLabel">Email address</Form.Label>
                    <Form.Control size = "lg" type="email" placeholder="Enter email" style={{backgroundColor: "#edeef7"}}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="mt-3 customLabel">Password</Form.Label>
                    <Form.Control size = "lg" type="password" placeholder="Password" style={{backgroundColor: "#edeef7"}}/>
                </Form.Group>

                <Form.Group controlId = "formBasicsPasswordRepeat">
                    <Form.Label className="mt-3 customLabel">Repeat Password</Form.Label>
                    <Form.Control size = "lg" type="password" placeholder="Repeat Password" style={{backgroundColor: "#edeef7"}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I'm interested in your newsletter!" />
                </Form.Group>
                <Button variant="dark" type="submit" className="btn-lg">
                    Submit
                </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}
