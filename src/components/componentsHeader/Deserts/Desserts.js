import React from 'react';
import imgDeserts from '../../../assets/imgDessert.jpg'
import DesertsItems from "./DesertsItems/DesertsItems";
import s from './Deserts.module.css'



export const Desserts = (props) =>{
    let desertsElements = props.state.deserts.map(d => <DesertsItems
        key={d.key}  img={d.img} id={d.id} name={d.name} price ={d.prise} description={d.description} />);
    return(
        <div className={s.deserts}>
            <img src={imgDeserts}/>
            <div className={s.elems}>
                {desertsElements}
            </div>

        </div>
    )
}