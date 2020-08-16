import React from "react";


const setsItems = (props) =>{
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
export default setsItems