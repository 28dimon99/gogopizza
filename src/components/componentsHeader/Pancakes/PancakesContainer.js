import React from "react";
import {getPancakesPageAC} from "../../../redux/Redusers/pancakesReducer";
import {connect} from "react-redux";
import {Pancakes} from "./Pancakes";

let mapStateToProps = (state)=>{
    return {
        pancakes: state.pancakesPage
    }


}
let mapDispatchToProps =(dispatch)=>{
    return{
        getPancakes:()=>{
            dispatch(getPancakesPageAC())
        }
    }

}


export const PancakesContainer = connect(mapStateToProps, mapDispatchToProps)(Pancakes)