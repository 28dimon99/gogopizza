import React from "react";


const PizzaItems = (props) =>{


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
            <button>Добавить в корзину</button>
        </div>
    )
}
export default PizzaItems