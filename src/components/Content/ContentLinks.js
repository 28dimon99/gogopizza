import React from 'react';
import s from './ContentLinks.module.css'
import {NavLink} from "react-router-dom";


 export const ContentLinks = (props) =>(
        <nav className={s.contentNav}>
            <ul>
                <li><NavLink to="/pizzas">Пиццы</NavLink></li>
                <li><NavLink to="/popular">Популярное</NavLink></li>
                <li><NavLink to="/pizzaSnacks">Закуски</NavLink></li>
                <li><NavLink to="/pizzaNews">Новинки</NavLink></li>
            </ul>
        </nav>
    );




