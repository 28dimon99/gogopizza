import React from 'react';
import imgSets from '../../../assets/imgSets.jpg'
import SetsItems from "./SetsItems/SetsItems";
import s from "./Sets.module.css"




export class Sets extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSets();
    }


    render() {

        console.log(this.props);
        return (
            <div className={s.sets}>
                <img src={imgSets}/>
                <div className={s.elems}>
                    {this.props.sets.setsPage.sets.map && this.props.sets.setsPage.sets.map((p) => <SetsItems
                        key={p.id} img={p.img} id={p.id} name={p.name} price={p.prise} description={p.description}/>)}
                </div>


            </div>
        )
    }

}





