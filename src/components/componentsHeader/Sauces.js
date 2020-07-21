import React from 'react';
import imgSauces from './../../assets/imgSous.jpg'
import SaucesItems from "./SaucesItems/SaucesItems";



export const Sauces = (props) =>{
    let saucesElements = props.state.sauces.map(s => <SaucesItems
        key={s.key}  img={s.img} id={s.id} name={s.name} price ={s.prise} description={s.description} />)
    return(
        <div>
            <img src={imgSauces} alt=""/>
            {saucesElements}
        </div>
    )
}