import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'



export default function AddExercise(){
    return(
        <Container>
            <Form>
            <Row className="text-center mt-5 mb-5">
                <h1>Placeholder for the workout date and kind</h1>
            </Row>

            <Row className="d-flex flex-row text-center">
                <Col>
                    <Form.Group>
                        <label className="radioImgLabel">
                            <input type ="radio" style={{appearance:"none"}} name="smileyRadioButton" value="happy"/>
                            <img src = {require("./imgs/Happy.png")} style={{width:"9vw", borderRadius:"20px", maxWidth:"150px", minWidth:"80px"}}/>
                        </label>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                    <label className="radioImgLabel">
                            <input type ="radio" style={{appearance:"none"}} name="smileyRadioButton" value="sad" />
                            <img src = {require("./imgs/sad.png")} style={{width:"9vw", borderRadius:"20px", maxWidth:"150px", minWidth:"80px"}}/>
                        </label>
                    </Form.Group>
                    </Col>

            </Row>
            </Form>
        </Container>
    )   
}