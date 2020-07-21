import React from 'react';
import imgSets from './../../assets/imgSets.jpg'
import SetsItems from "./SetsItems/SetsItems";




export const Sets = (props) =>{
    let setsElements = props.state.sets.map(s => <SetsItems
        key={s.key}  img={s.img} id={s.id} name={s.name} price ={s.prise} description={s.description} />);
    return(
        <div>
            <img src={imgSets} alt=""/>
            {setsElements}
        </div>
    )
}






