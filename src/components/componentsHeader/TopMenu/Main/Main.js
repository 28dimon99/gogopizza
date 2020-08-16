import React from "react";
import s from "./Main.module.css"
import Carusel from "../../../Content/Carusel/Carusel";
import setImg from "../../../../assets/Content/setImg.png";
import priceImg from "../../../../assets/Content/priceImg.png";
import collectImg from "../../../../assets/Content/collectImg.png";
import pizzaImg from "../../../../assets/Content/pizzaImg.png";
import {Route} from "react-router";
import {ContentLinks} from "../../../Content/ContentLinks";
import bannerPizza from "../../../../assets/Content/bannerPizza.jpg";
import drinkImg from "../../../../assets/Content/drinkImg.png";
import bannerPizza2 from "../../../../assets/Content/bannerPizza2.jpg";
import icon1 from "../../../../assets/Content/icons/1.svg";
import icon2 from "../../../../assets/Content/icons/2.svg";
import icon3 from "../../../../assets/Content/icons/3.svg";
import icon4 from "../../../../assets/Content/icons/4.svg";
import icon5 from "../../../../assets/Content/icons/5.svg";
import icon6 from "../../../../assets/Content/icons/6.svg";

export const Main = () => {
    return (
        <div className={s.main}>
            <Carusel/>
            <div>
                <div className={s.blockImg}>
                    <div className={s.one}>
                        <img src={setImg} alt=""/>
                    </div>
                    <div className={s.two}>
                        <img src={priceImg} alt=""/>
                    </div>
                    <div className={s.three}>
                        <img src={collectImg} alt=""/>
                    </div>
                    <div className={s.four}>
                        <img src={pizzaImg} alt=""/>
                    </div>

                </div>
                <div className={s.pizzaLinks}>
                    <Route exact path=""> <ContentLinks/></Route>
                </div>
                <div className={s.allButton}>
                    <a href="/pizza">
                        <button>Все пиццы</button>
                    </a>
                </div>
                <div>
                    <img src={bannerPizza} alt=""/>
                </div>
                <div className={s.drinks}>
                    <h2>Отлично подходит к пицце</h2>
                    <img src={drinkImg} alt=""/>
                </div>
                <div>
                    <img src={bannerPizza2} alt=""/>
                </div>
                <div className={s.icons}>
                    <div>
                        <img src={icon1} alt=""/>
                        <h2>30 минут</h2>
                        <p>Доставка пиццы в получасовой зоне или пицца бесплатно.</p>
                    </div>
                    <div>
                        <img src={icon2} alt=""/>
                        <h2>Бонусы</h2>
                        <p>Заказывай доставку, получай баллы и обменивай их на еду.</p>
                    </div>
                    <div>
                        <img src={icon3} alt=""/>
                        <h2>12.90 рублей</h2>
                        <p>Минимальная сумма заказа для бесплатной доставки.</p>
                    </div>
                    <div>
                        <img src={icon4} alt=""/>
                        <h2>60 минут</h2>
                        <p>Доставка пиццы в часовой зоне или пицца бесплатно.</p>
                    </div>
                    <div>
                        <img src={icon5} alt=""/>
                        <h2>Качество</h2>
                        <p>Гарантированно наивысшее качество начинки и теста.</p>
                    </div>
                    <div>
                        <img src={icon6} alt=""/>
                        <h2>Сырный борт</h2>
                        <p>Можно заказать к любой пицце среднего и большого размера.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}