import React from "react"
import {Pizza} from "./Pizza";
import {compose} from "redux";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        pizza: state.pizza,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),

)(Pizza);
