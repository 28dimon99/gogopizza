import React from "react";
import {connect} from "react-redux";
import {Desserts} from "./Desserts";
import {getDessertsPageAC} from "../../../redux/Redusers/dessertsReducer";

let mapStateToProps = (state) => {
    return {
        desserts: state.dessertsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDesserts: () => {
            dispatch(getDessertsPageAC())
        }
    }
}


export const DessertsContainer = connect(mapStateToProps, mapDispatchToProps)(Desserts)