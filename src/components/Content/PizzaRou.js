import React from 'react'
import {Container} from "react-bootstrap";

const PizzaRou = (props)=>{
    return(
        <Container>
            {props.children}
        </Container>
    )
}
export default PizzaRou