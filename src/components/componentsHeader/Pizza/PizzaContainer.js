import React from "react"

import {Pizza} from "./Pizza";
import {connect} from "react-redux";
import {getPizzaPageAC} from "../../../redux/Redusers/pizzaReducer";



let mapStateToProps = (state) => {

    return {
        pizza: state.pizzaPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getPizza:() => {
            dispatch(getPizzaPageAC());
        }
    }
};


export const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)

(Pizza);




