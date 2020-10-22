import React from "react";
import {connect} from "react-redux";
import {Sauces} from "./Sauces";
import {getSaucesPageAC} from "../../../redux/Redusers/saucesReducer";

let mapStateToProps = (state) =>{
    return{
        sauces: state.saucesPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        getSauces: ()=>{
            dispatch(getSaucesPageAC())
        }
    }
}


export const SaucesContainer = connect(mapStateToProps,mapDispatchToProps)(Sauces)