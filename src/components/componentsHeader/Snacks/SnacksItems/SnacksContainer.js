import React from "react";
import {connect} from "react-redux";
import {Snacks} from "../Snacks";
import {getSnacksPageAC} from "../../../../redux/Redusers/snacksReducer";


let mapStateToProps = (state) =>{
    return{
        snacks: state.snacksPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        getSnacks:()=>{
            dispatch(getSnacksPageAC())
        }
    }
}

export const SnacksContainer = connect(mapStateToProps, mapDispatchToProps)(Snacks)
