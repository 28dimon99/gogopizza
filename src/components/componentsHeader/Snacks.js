import React from 'react';
import imgSnacks from './../../assets/imgSnacks.jpg'
import SnacksItems from "./SnacksItems/SnacksItems";



export const Snacks = (props) =>{
    let snacksElements = props.state.snacks.map(s => <SnacksItems
        key={s.key}  img={s.img} id={s.id} name={s.name} price ={s.prise} description={s.description} />);
    return(
        <div>
            <img src={imgSnacks} alt=""/>
            {snacksElements}
        </div>
    )
}