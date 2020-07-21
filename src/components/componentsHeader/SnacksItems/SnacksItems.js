import React from "react";
import imgSnacks from "../../../assets/snacksImg/1.jpg"

const SnacksItems = (props) =>{
    return(
        <div>
            <div>
                <img src={imgSnacks}/>

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
export default SnacksItems