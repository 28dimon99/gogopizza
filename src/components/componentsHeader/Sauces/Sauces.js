import React from 'react';
import imgSauces from '../../../assets/imgSous.jpg'
import SaucesItems from "./SaucesItems/SaucesItems";
import s from "./Sauces.module.css"


export const Sauces = (props) =>{
    let saucesElements = props.state.sauces.map(s => <SaucesItems
        key={s.key}  img={s.img} id={s.id} name={s.name} price ={s.prise} description={s.description} />)
    return(
        <div className={s.sauces}>
            <img src={imgSauces} alt=""/>
            <div className={s.elems}>
                {saucesElements}
            </div>
        </div>
    )
}