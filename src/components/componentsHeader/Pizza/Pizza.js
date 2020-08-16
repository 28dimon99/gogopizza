import React from 'react';
import imgPizza from '../../../assets/imgPizza.jpg';
import PizzaItems from "./PizzaItems/PizzaItems";
import s from './Pizza.module.css'






 export const Pizza = (props) => {

    let pizzaElements = props.state.pizza.map(p => <PizzaItems
        key={p.key}  img={p.img} id={p.id} name={p.name} price ={p.prise} description={p.description} />);

    return(
        <div className={s.pizza}>
            <img src={imgPizza}/>
            <div className={s.elems}>
                {pizzaElements}
            </div>

        </div>
    )
}

