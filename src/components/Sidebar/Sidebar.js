import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css"



const Sidebar = () =>(

    <div>
        <div className={s.private}>
            <NavLink exact to="/private"><h1>Личный кабинет</h1></NavLink>
        </div>
        <div className={s.menu}>
            <NavLink exact to="/menu"><h1>Меню</h1></NavLink>
        </div>


    </div>
)
export default Sidebar
