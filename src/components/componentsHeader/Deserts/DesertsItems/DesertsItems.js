import React from "react";
import imgDeserts from "../../../../assets/dessertsImg/1.jpg"

const DesertsItems = (props) =>{
    return(
        <div>
            <div>
                <img src={imgDeserts}/>

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
export default DesertsItems