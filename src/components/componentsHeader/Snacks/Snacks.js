import React from 'react';
import imgSnacks from '../../../assets/imgSnacks.jpg'
import SnacksItems from "./SnacksItems/SnacksItems";
import s from "./Snacks.module.css"


export const Snacks = (props) =>{
    let snacksElements = props.state.snacks.map(s => <SnacksItems
        key={s.key}  img={s.img} id={s.id} name={s.name} price ={s.prise} description={s.description} />);
    return(
        <div className={s.snacks}>
            <img src={imgSnacks} alt=""/>
            <div className={s.elems}>
                {snacksElements}
            </div>

        </div>
    )
}