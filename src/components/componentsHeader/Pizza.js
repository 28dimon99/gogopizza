import React from 'react';
import imgPizza from '../../assets/imgPizza.jpg';
import PizzaItems from "./PizzaItems/PizzaItems";





 export const Pizza = (props) => {

    let pizzaElements = props.state.pizza.map(p => <PizzaItems
        key={p.key}  img={p.img} id={p.id} name={p.name} price ={p.prise} description={p.description} />);
    return(
        <div>
            <img src={imgPizza}/>
            {pizzaElements}
        </div>
    )
}

