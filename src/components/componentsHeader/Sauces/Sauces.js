import React from 'react';
import imgSauces from '../../../assets/imgSous.jpg'
import SaucesItems from "./SaucesItems/SaucesItems";
import s from "./Sauces.module.css"


export class Sauces extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSauces()
    }

    render() {
        console.log(this.props);
        return (
            <div className={s.sauces}>
                <img src={imgSauces}/>
                <div className={s.elems}>
                    {this.props.sauces.saucesPage.sauces.map && this.props.sauces.saucesPage.sauces.map ((p) =>
                        <SaucesItems
                            key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise}
                            description={p.description}/>)}
                </div>


            </div>
        )
    }
}