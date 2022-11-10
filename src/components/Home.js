import React from 'react'
import Container from 'react-bootstrap/Container'
import main from "./imgs/PICS/main.jpeg"

export default function Home(){
    return(
        <Container fluid className="m-0 justify-content-center p-0">
            <div style={{backgroundImage:`url(${main})`, height:'100vh', backgroundSize: "cover", backgroundRepeat:"no-repeat", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
            <h1 style={{color:"white",   fontFamily: "Harmattan, sans-serif", fontSize:"55px", textShadow:"2px 2px black"}}>Issues keeping track of your progress? </h1>
            <h1 style={{color:"white",   fontFamily: "Harmattan, sans-serif", fontSize:"55px", textShadow:"2px 2px black"}}>Login to track your Workout!</h1>
            </div>
        </Container>
    )
}