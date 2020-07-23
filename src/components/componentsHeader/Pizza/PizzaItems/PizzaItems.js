import React from "react";
import imgPizza from "../../../../assets/pizzaImg/1.jpg"

const PizzaItems = (props) =>{
    return(
        <div>
            <div >
                <img src={imgPizza}/>

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
export default PizzaItems