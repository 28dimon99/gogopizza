import React from 'react';
import popularImg from "../../../../assets/Content/popularImg.png"
import s from "./Popular.module.css"





export const Popular = (props) => {

    return(
        <div className={s.PopularText}>
            <h2>Популярние</h2>
            <div className={s.Popular}>
                <img src={popularImg}/>
            </div>


        </div>
    )
}