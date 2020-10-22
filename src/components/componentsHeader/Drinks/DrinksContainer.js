import React from 'react'
import {connect} from "react-redux";
import {Drinks} from "./Drinks";
import {getDrinksPageAC} from "../../../redux/Redusers/drinksReducer";

let mapStateToProps = (state) => {
    return{
        drinks: state.drinksPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDrinks: () =>{
            dispatch(getDrinksPageAC())
        }
    }
}

export const DrinksContainer = connect(mapStateToProps, mapDispatchToProps )(Drinks)