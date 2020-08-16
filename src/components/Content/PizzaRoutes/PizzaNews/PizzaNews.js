import React from 'react';
import newImg from "../../../../assets/Content/newImg.png";
import s from "./PizzaNews.module.css"







export const PizzaNews = (props) => {

    return(
        <div className={s.pizzaNewsText}>
            <h2>Новинки</h2>
            <div className={s.pizzaNews}>
                <img src={newImg}/>
            </div>

        </div>
    )
}