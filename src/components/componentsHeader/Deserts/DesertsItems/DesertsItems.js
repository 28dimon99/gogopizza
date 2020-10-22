import React from "react";
import s from "./DesertsItems.module.css"


const DesertsItems = (props) => {
    return (
        <div className={s.goods}>
            <div className={s.imgItems}>
                <img src={props.img}/>

            </div>
            <div className={s.items}>
                <p>
                    {props.id}
                    {props.name}
                    {props.price}
                    {props.description}
                </p>
                <button>Добавить в корзину</button>
            </div>

        </div>
    )
}
export default DesertsItems