import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

//Missing logic to map over query results from api and render new table rows based on them also: talbe headers based on workout type

export default function WorkoutDetail(){
    return(
        <Container className="justify-content-center text-center mt-5 mb-3">
            <Row><h1>Placeholder for workout image one or other logic</h1></Row>
            <Row className="mt-4 mb-4">
                <Col lg ={9}><h3>Date of workout logic - with fetch req</h3></Col>
                <Col lg={1}><Button className="btn-light" onClick="#"><img src={require('./imgs/trashCan.png')} style={{width:"100px"}}/> </Button></Col>

            </Row>
            <Row> 
                <Col>
                    <Table responsive striped>
                        <thead className="table-dark">
                            <tr>
                            <th>#</th>
                            <th>Exercise</th>
                            <th>stat</th>
                            <th>stat</th>
                            <th>stat</th>
                            <th>Delete ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>

                            </tr>
                     </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}