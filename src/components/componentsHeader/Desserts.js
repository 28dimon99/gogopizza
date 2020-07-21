import React from 'react';
import imgDeserts from './../../assets/imgDessert.jpg'
import DesertsItems from "./DesertsItems/DesertsItems";



export const Desserts = (props) =>{
    let desertsElements = props.state.deserts.map(d => <DesertsItems
        key={d.key}  img={d.img} id={d.id} name={d.name} price ={d.prise} description={d.description} />);
    return(
        <div>
            <img src={imgDeserts}/>
            {desertsElements}
        </div>
    )
}