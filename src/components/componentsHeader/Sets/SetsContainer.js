import React from "react";
import {Sets} from "./Sets";
import {connect} from "react-redux";
import {getSetsPageAC} from "../../../redux/Redusers/setsReducer";



let mapStateToProps = (state)=>{
    return {
        sets: state.setsPage
    }


}
let mapDispatchToProps =(dispatch)=>{
    return{
        getSets:()=>{
            dispatch(getSetsPageAC())
        }
    }

}


export const SetsContainer = connect(mapStateToProps, mapDispatchToProps)(Sets)