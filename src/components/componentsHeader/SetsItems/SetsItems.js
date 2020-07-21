import React from "react";
import imgSets from "../../../assets/setsImg/1.jpg"

const setsItems = (props) =>{
    return(
        <div>
            <div>
                <img src={imgSets}/>

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
export default setsItems