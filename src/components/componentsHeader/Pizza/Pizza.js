import React from 'react';
import imgPizza from '../../../assets/imgPizza.jpg';
import PizzaItems from "./PizzaItems/PizzaItems";
import s from './Pizza.module.css';


export class Pizza extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPizza();

    }


    render() {
        debugger
        console.log(this.props);
        return (
            <div className={s.pizza}>
                <img src={imgPizza}/>
                <div className={s.elems}>
                    {this.props.pizza.map && this.props.pizza.map((p) => <PizzaItems
                        key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise} description={p.description}/>)}
                </div>


            </div>
        )
    }

}
