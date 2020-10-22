import React from 'react';
import imgDrinks from '../../../assets/imgDrink.jpg'
import DrinksItems from "./DrinksItems/DrinksItems";
import s from "./Drinks.module.css"



export class Drinks extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getDrinks()
    }
    render() {
        console.log(this.props);
        return (
            <div className={s.drinks}>
                <img src={imgDrinks}/>
                <div className={s.elems}>
                    {this.props.drinks.drinksPage.drinks.map && this.props.drinks.drinksPage.drinks.map((p) =>
                        <DrinksItems
                            key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise}
                            description={p.description}/>)}
                </div>


            </div>
        )
    }
}