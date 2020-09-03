import React from "react"
import {Pizza} from "./Pizza";
import {connect} from "react-redux";
import * as axios from "axios";
import {setDataPizza} from "../../../redux/Redusers/pizzaReduser";



export class PizzaContainer extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3000//db.json/').then(response =>{
            this.props.setDataPizza(response.data.data.pizza)
        });
    }
    render() {
        return(
            <Pizza {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        pizza: state.pizza,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default
    connect(mapStateToProps,{setDataPizza}, mapDispatchToProps)(PizzaContainer);
