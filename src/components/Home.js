import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Home(){
    return(
        <Container fluid className="m-0">
            <img src={require('./imgs/PICS/main.jpeg')} style={{width:"99vw", height: "98vh" }}/>
        </Container>
    )
}