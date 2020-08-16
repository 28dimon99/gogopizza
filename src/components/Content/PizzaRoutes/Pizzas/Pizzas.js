import React from 'react';
import pizzaImg from "../../../../assets/Content/pizzaThree.png"
import s from "./Pizzas.module.css"

export const Pizzas = (props) => {

    return (
        <div className={s.pizzasText}>
            <h2>Пиццы</h2>
            <div className={s.pizzas}>
                <img src={pizzaImg}/>
            </div>

        </div>

    )
}