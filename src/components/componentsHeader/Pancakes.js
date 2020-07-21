import React from 'react';
import imgPancakes from './../../assets/imgPancakes.jpg'
import PancakesItems from "./PancakesItems/PancakesItems";



export const Pancakes = (props) =>{
    let pancakesElements = props.state.pancakes.map(p => <PancakesItems
        key={p.key}  img={p.img} id={p.id} name={p.name} price ={p.prise} description={p.description} />);
    return(
        <div>
            <img src={imgPancakes}/>
            {pancakesElements}
        </div>
    )
}