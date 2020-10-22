import React from "react";
import s from "./Basket.module.css"


export class Basket extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {

        console.log(this.props);

        return (
            <div className={s.basket}>

                </div>

        )
    }

}