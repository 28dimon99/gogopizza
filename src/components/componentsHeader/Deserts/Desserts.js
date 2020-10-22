import React from 'react';
import imgDeserts from '../../../assets/imgDessert.jpg'
import DesertsItems from "./DesertsItems/DesertsItems";
import s from './Deserts.module.css'


export class Desserts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDesserts()
    }

    render() {
        console.log(this.props);
        return (
            <div className={s.deserts}>
                <img src={imgDeserts}/>
                <div className={s.elems}>
                    {this.props.desserts.dessertsPage.desserts.map && this.props.desserts.dessertsPage.desserts.map((p) =>
                        <DesertsItems
                            key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise}
                            description={p.description}/>)}
                </div>


            </div>
        )
    }
}