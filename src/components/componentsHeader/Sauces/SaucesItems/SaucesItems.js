import React from "react";
import imgSauces from "../../../../assets/saucesImg/1.jpg"

const SaucesItems = (props) =>{
    return(
        <div>
            <div>
                <img src={imgSauces}/>

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
export default SaucesItems