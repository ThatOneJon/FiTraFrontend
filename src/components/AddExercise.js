import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'



export default function AddExercise(){

    const[formData, setFormData] = React.useState({
        quality: ""
    })


    function handleChange(event){
        setFormData({quality : event.target.value})
        const thisId = event.target.value
    }

    return(
        <Container>
            <Form>
            <Row className="text-center mt-5 mb-5">
                <h1>Placeholder for the workout date and kind</h1>
            </Row>

            <Row className="d-flex flex-row text-center">
                <Col>
                    <Form.Group>
                        <label className="radioImgLabel" id ="happy" style = {formData.quality === "happy" ? {border:"3px solid black", borderRadius:"10px", padding:"3px", backgroundColor:"lightgreen"}:{border: "none" }}>
                            <input  type ="radio" style={{appearance:"none"}}  value="happy" checked={formData.quality ==="happy"} onChange={(event) => handleChange(event)} />
                            <img src = {require("./imgs/Happy.png")} style={{width:"9vw", borderRadius:"20px", maxWidth:"150px", minWidth:"80px"}}/>
                        </label>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <label className="radioImgLabel" id="sad" style = {formData.quality === "sad" ? {border:"3px solid black", borderRadius:"10px", padding:"3px", backgroundColor:"red"}:{border: "none" }}>
                            <input type ="radio" style={{appearance:"none"}}  value="sad" checked={formData.quality === "sad"} onChange={(event) => handleChange(event)} />
                            <img src = {require("./imgs/sad.png")} style={{width:"9vw", borderRadius:"20px", maxWidth:"150px", minWidth:"80px"}}/>
                        </label>
                    </Form.Group>
                    </Col>

            </Row>
            </Form>
        </Container>
    )   
}