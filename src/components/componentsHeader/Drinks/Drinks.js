import React from 'react';
import imgDrinks from '../../../assets/imgDrink.jpg'
import DrinksItems from "./DrinksItems/DrinksItems";
import s from "./Drinks.module.css"


export const Drinks = (props) =>{
    let drinksElements = props.state.drinks.map(d => <DrinksItems
        key={d.key}  img={d.img} id={d.id} name={d.name} price ={d.prise} description={d.description}/>)
    return(
        <div className={s.drinks}>
            <img src={imgDrinks}/>
            <div className={s.elems}>
                {drinksElements}
            </div>

        </div>
    )
}