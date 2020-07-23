import React from "react";
import imgDrinks from "../../../../assets/drinksImg/1.jpg"

const DrinksItems = (props) =>{
    return(
        <div>
            <div>
                <img src={imgDrinks}/>

            </div>
            <p>
                {props.id}
                {props.name}
                {props.price}
                {props.description}
            </p>



        </div>
    )
}
export default DrinksItems