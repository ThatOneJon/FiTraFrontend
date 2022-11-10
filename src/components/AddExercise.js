import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function AddExercise(){

    const[formData, setFormData] = React.useState({
        quality: "",
        ex:"",
        weight:"",
        set:"",
        rep:""
    })

    function handleChange(event){
        setFormData(prev => ({...prev, quality : event.target.value}))
        const thisId = event.target.value
    }

    function handleChangeTwo(event){
        const name = event.target.name
        if(name === "ex"){
            setFormData(prev => ({
                ...prev,
                "ex": event.target.value
            }))
        }else if (name === "weight"){
            setFormData(prev => ({...prev, "weight":event.target.value}))
        }else if(name === "set"){
            setFormData(prev => ({...prev, "set":event.target.value}))
        }else if(name === "rep"){
            setFormData( prev => ({...prev, "rep": event.target.value}))

        }
    }


    return(
        <Container fluid = "lg">
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
            <Row className="justify-content-md-center">
                <Col lg={4}>
                    <Form.Group className="textInputExercise text-center">
                        <Form.Control type ="text" className= "mt-4 p-3  bg-dark text-center text-light" onChange={handleChangeTwo} name="ex" value={formData.ex} placeholder="Exercise ..."/>
                        <Form.Control type ="number" className= "mt-4 p-3  bg-dark text-center text-white" onChange={handleChangeTwo} name="weight" value={formData.weight} placeholder="Weight in KG ..."/>
                        <Form.Control type ="number" className= "mt-4 p-3  bg-dark text-center text-white" onChange={handleChangeTwo} name="set" value={formData.set} placeholder="Sets ..."/>
                        <Form.Control type ="number" className= "mt-4 p-3  bg-dark text-center text-white" onChange={handleChangeTwo} name="rep" value={formData.rep} placeholder="Repititions ..."/>
                        <Button type ="submit" variant="dark" className="mt-4 btn-lg px-5">Submit</Button>
                    </Form.Group>
                </Col>
            </Row>
            </Form>
        </Container>
    )   
}