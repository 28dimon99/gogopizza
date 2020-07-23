import React from "react";
import imgPancakes from "../../../../assets/pancakesImg/1.jpg"

const PancakesItems = (props) =>{
    return(
        <div>
            <div>
                <img src={imgPancakes}/>

            </div>
            <p>
                {props.id}
                {props.name}
                {props.price}
                {props.description}
            </p>

        </div>
    )
}
export default PancakesItems