import React from "react";


const SnacksItems = (props) =>{
    return(
        <div>
            <div>
                <img src={props.img}/>
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