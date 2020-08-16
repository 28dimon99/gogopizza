import React from 'react';
import snackImg from "../../../../assets/Content/snackImg.png"
import s from "./PizzaSnacks.module.css"





export const PizzaSnacks = (props) => {

    return(
        <div className={s.PizzaSnacksText}>
            <h2>Закуски</h2>
            <div className={s.PizzaSnacks}>
                <img src={snackImg}/>
            </div>


        </div>
    )
}