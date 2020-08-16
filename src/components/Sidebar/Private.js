import React from "react";
import s from "./Private.module.css"


class Private extends React.Component {
    render() {
        return (
            <div className={s.private}>
                <div className={s.auth}>
                        <h1>Главная > Личный кабинет</h1>
                    <h1>Авторизация</h1>
                    <p>Добро пожаловать! Войдите в свой аккаунт"</p>
                    <form>
                        <label><p>Имя Пользователя Или Email (Английском)</p><input value="" name="email"/></label>
                        <label><p>Пароль (Английском)</p> <input value="" name="password"/></label>
                        <p><button>Войти</button></p>

                        <label><p>Запомнить меня</p><input type="checkbox" value="" name="password"/></label>
                    </form>
                </div>
                <div className={s.register}>
                    <h1>Регистрация</h1>
                    <p>Создайте свой собственный аккаунт</p>
                    <form>
                        <label><p>Имя Пользователя Или Email (Английском)</p><input value="" name="email"/></label>
                        <label><p>Пароль (Английском)</p><input value="" name="password"/></label>
                        <p>
                            Ваши личные данные будут использоваться для поддержки вашего опыта на этом веб-сайте, для
                            управления доступом к вашей учетной записи и для других целей, описанных в нашей политика
                            конфиденциальности.
                        </p>
                        <button>Регистрация</button>
                    </form>
                        <h3>Зарегистрируйтесь сегодня, и вы сможете:</h3>
                        <p>Быстрое оформление заказа через личный кабинет</p>
                        <p>Отслеживайте свои заказы легко</p>
                        <p>Ведите учет всех ваших покупок</p>

                </div>

            </div>

        )
    }

}

export default Private