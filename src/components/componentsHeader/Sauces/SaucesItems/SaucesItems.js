import React from "react";


const SaucesItems = (props) =>{
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
export default SaucesItems