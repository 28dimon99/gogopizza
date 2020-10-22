import React from 'react';
import imgSnacks from '../../../assets/imgSnacks.jpg'
import SnacksItems from "./SnacksItems/SnacksItems";
import s from "./Snacks.module.css"




export class Snacks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSnacks()
    }

    render() {
        console.log(this.props);
        return (
            <div className={s.snacks}>
                <img src={imgSnacks}/>
                <div className={s.elems}>
                    {this.props.snacks.snacksPage.snacks.map && this.props.snacks.snacksPage.snacks.map((p) =>
                        <SnacksItems
                            key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise}
                            description={p.description}/>)}
                </div>


            </div>
        )
    }
}