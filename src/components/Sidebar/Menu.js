import React from "react";
import s from "./Menu.module.css"
import menuImg from "../../assets/Sidebar/menu.jpg"



const Menu = (props) => {
    return (
        <div className={s.menuImg}>
            <h1>МЕНЮ</h1>
            <img src={menuImg} alt="menu"/>
        </div>

    )
}
export default Menu