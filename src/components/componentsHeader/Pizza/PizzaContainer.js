import React from "react"
import {Pizza} from "./Pizza";
import {compose} from "redux";
import {connect} from "react-redux";
import {getPizzaPageAC} from "../../../redux/Redusers/pizzaReducer";


let mapStateToProps = (state) => {

    return {
        pizzaPage: state.pizzaPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getPizza:() => {
            dispatch(getPizzaPageAC());
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),

)(Pizza);



