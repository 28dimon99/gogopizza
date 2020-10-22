import React from 'react';
import imgPancakes from '../../../assets/imgPancakes.jpg'
import PancakesItems from "./PancakesItems/PancakesItems";
import s from "./Pancakes.module.css"



export class Pancakes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPancakes();
    }


    render() {

        console.log(this.props);
        return (
            <div className={s.pancakes}>
                <img src={imgPancakes}/>
                <div className={s.elems}>
                    {this.props.pancakes.pancakesPage.pancakes.map && this.props.pancakes.pancakesPage.pancakes.map((p) => <PancakesItems
                        key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise} description={p.description}/>)}
                </div>


            </div>
        )
    }

}
