import React from "react";
import logoImg from "../../assets/Logo/cropped-gogopizza-logo.png"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";



const Header = (props) => {
        return (

            <div className={s.mainHeader}>
                <div className={s.topNav}>
                    <NavLink className={s.items} to='/main'><img src={logoImg} alt="Logo"/></NavLink>
                        <NavLink className={s.items} to='/main'>Главная</NavLink>
                        <NavLink className={s.items} to='/stock'>Акции</NavLink>
                        <NavLink className={s.items} to='/contacts'>Контакти</NavLink>
                        <NavLink className={s.items} to='/works'>Работа в Гоу-Гоу</NavLink>
                        <NavLink className={s.items} to='/call'>Позвони нам МТС +375(29)555-1-666</NavLink>
                        <NavLink className={s.items} to='/basket'>Корзина</NavLink>

                </div>
                <div className={`${s.bottomNav} ${s.active}`}>

                        <NavLink className={s.items} to='/pizza'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-1-01.png'/>Пицца</NavLink>
                        <NavLink className={s.items} to='/sets'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-2-02.png'/>Сеты</NavLink>
                        <NavLink className={s.items} to='/costructor'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-3-03.png'/>Конструктор</NavLink>
                        <NavLink className={s.items} to='/pancakes'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-4-04.png'/>Блины</NavLink>
                        <NavLink className={s.items} to='/snacks'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-5-05.png'/>Закуски</NavLink>
                        <NavLink className={s.items} to='/desserts'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-6-06.png'/>Десерты</NavLink>
                        <NavLink className={s.items} to='/sauces'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-7-07.png'/>Соусы</NavLink>
                        <NavLink className={s.items} to='/drinks'><img
                            src='https://gogopizza.by/wp-content/uploads/2019/10/icons-8-08.png'/>Напитки</NavLink>
                </div>
            </div>
        )
    }


export default Header
