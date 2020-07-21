import React from 'react';
import imgDrinks from './../../assets/imgDrink.jpg'
import DrinksItems from "./DrinksItems/DrinksItems";



export const Drinks = (props) =>{
    let drinksElements = props.state.drinks.map(d => <DrinksItems
        key={d.key}  img={d.img} id={d.id} name={d.name} price ={d.prise} description={d.description}/>)
    return(
        <div>
            <img src={imgDrinks}/>
            {drinksElements}
        </div>
    )
}