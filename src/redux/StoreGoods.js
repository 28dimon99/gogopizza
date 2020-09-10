/*


let store = {
    _state: {
        pizzaPage: {
            pizza: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/5.jpg",
                    name: "1/2 Вегетарианская 43 см+1/2 Куриная 43 см",
                    prise: "24.90 руб.",
                    description: "Соус, сыр, болгарский перец, томаты, шампиньоны св., лук, маслины"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/4.jpg",
                    name: "1/2 Гавайская 43 см+1/2 ",
                    prise: "32.90 руб.",
                    description: "Соус, курица, ветчина, ананас, кукуруза, сыр моцарелла, стружка кокоса"
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/6.jpg",
                    name: "1/2 Супермясная 43 см+1/2",
                    prise: "40.90 руб.",
                    description: "Соус, салями, охотничьи колбаски, ветчина, бекон, черри, лук красный, сыр моцарелла, горчичный BBQ"
                },
                {
                    id: 4,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/2.jpg",
                    name: "1/2 Супермясная 43 см+1/2",
                    price: "40.90 руб.",
                    description: "Соус, салями, охотничьи колбаски, ветчина, бекон, черри, лук красный, сыр моцарелла, горчичный BBQ"
                },
                {
                    id: 5,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/7.jpg",
                    name: "1/2 Грибной квартет 43 см+1/2",
                    price: "45.90 руб.",
                    description: "Соус,сыр моцарелла, лук, грибы: белый гриб, вешенки"
                },
                {
                    id: 6,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/1.jpg",
                    name: "1/2 Флоренция 43 см+1/2",
                    price: "50.90 руб.",
                    description: "Соус,копчёная куриная грудка, чили, сыр моцарелла, соус манго-халапеньо, кунжут"
                }

            ],
        },
        setsPage: {
            sets: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/set-v-ofic.jpg",
                    name: "В офис",
                    price: "35.90 руб.",
                    description: "Пиццы: Сырные палочки (на тесте) с беконом, Тематическая 31 см, Конфетная 31 см"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/set-po-cvejcarski.jpg",
                    name: "Две пиццы « По-швейцарски 43 см»",
                    price: "28.00 руб.",
                    description: "соус, сыр, сервелат, шампиньоны"
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/set-dla-bolshoj-companii.jpg",
                    name: "Для большой компании",
                    price: "59.90 руб.",
                    description: "Пиццы:сырные палочки (на тесте) с беконом,Цыплёнок Карри 43,Тематическая 43,По-Швейцарски 43"
                },
                {
                    id: 4,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/set-na-dvoih.jpg",
                    name: "На двоих",
                    price: "19.90 руб.",
                    description: "Пиццы:Цыплёнок карри 23 см,Тематическая 23 см"
                },
                {
                    id: 5,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/set-pod-futbol.jpg",
                    name: "Под футбол",
                    price: "35.90 руб.",
                    description: "Пиццы: Сырная 31см,Бекон с грибами 31см,Мясо и перчик 31см"
                },
                {
                    id: 6,
                    img: "https://gogopizza.by/wp-content/uploads/2020/02/set-semejka.jpg",
                    name: "Семейка ( Покупайте пиццу Гоу-Гоу 43 см+ Кока-кола 0,5 л и получите подушечки с сах.пудрой и корицей в подарок",
                    price: "27.10 руб.",
                    description: "27.10 руб."
                },
            ],
        },
        pancakesPage: {
            pancakes: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_9984-600x600.jpg",
                    name: "Блин итальянский",
                    price: "5.20 руб.",
                    description: "Соус,сыр,салями,томаты свежие"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_9996-600x600.jpg",
                    name: "Блин Микс",
                    price: "6.90 руб.",
                    description: "Соус,сыр,ветчина,бекон,сервелат,огурцы маринованные"
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_9990-600x600.jpg",
                    name: "Блин охотничий",
                    price: "5.50 руб.",
                    description: "Соус,сыр,охотничьи колбаски,огурцы маринованные"
                },
                {
                    id: 4,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_0004-600x600.jpg",
                    name: "Блин по-деревенски",
                    price: "5.50 руб.",
                    description: "Соус,сыр,бекон,огурцы маринованные"
                },
                {
                    id: 5,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_9998-600x600.jpg",
                    name: "Блин с ветчиной",
                    price: "6.50 руб.",
                    description: "Соус,сыр,ветчина,огурцы маринованные"
                },
                {
                    id: 6,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_0007-600x600.jpg",
                    name: "Блин с курицей",
                    price: "5.60 руб.",
                    description: "Соус,сыр,куриная грудка,огурцы маринованные"
                },


            ],
        },
        snacksPage: {
            snacks: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2020/03/5.jpg",
                    name: "Вега Ролл",
                    price: "4.50 руб.",
                    description: "Соус Ранч ,сыр,томаты свежие,тортилья,маслины,огурцы маринованные"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2019/06/IMG_3982-600x600.jpg",
                    name: "Картофельные дольки 150гр",
                    price: "3.50 руб.",
                    description: "3.50 руб."
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2019/06/IMG_3982-600x600.jpg",
                    name: "Картофельные дольки 300гр",
                    price: "5.00 руб.",
                    description: "5.00 руб."
                },
                {
                    id: 4,
                    img: "https://gogopizza.by/wp-content/uploads/2019/06/IMG_3980-600x600.jpg",
                    name: "Наггетсы 160гр",
                    price: "5.90 руб.",
                    description: "5.90 руб."
                },
                {
                    id: 5,
                    img: "https://gogopizza.by/wp-content/uploads/2019/06/IMG_3980-600x600.jpg",
                    name: "Наггетсы 300грр",
                    price: "9.90 руб.",
                    description: "9.90 руб."
                },
                {
                    id: 6,
                    img: "https://gogopizza.by/wp-content/uploads/2019/11/IMG_9936-min-600x600.jpg",
                    name: "Подушечки ароматные с чесноком",
                    price: "3.50 руб.",
                    description: "3.50 руб."
                },


            ],

        },
        desertsPage: {
            deserts: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2020/01/Istoriya-22-600x600.jpg",
                    name: "Маффин Ванила с начинкой абрикос",
                    price: "2.00 руб.",
                    description: "Маффин Ванила С начинкой абрикос"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2020/01/75ooB4kNSLQ-600x600.jpg",
                    name: "Маффин Чоко с начинкой лимон",
                    price: "2.00 руб.",
                    description: "Маффин Чоко с начинкой лимон"
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2020/01/q1XzII8AkvY-600x600.jpg",
                    name: "Пирожное Брауни",
                    price: "2.00 руб.",
                    description: "Пирожное Брауни"
                },
                {
                    id: 4,
                    img: "https://gogopizza.by/wp-content/uploads/2020/01/gqXF3UM3xG8-600x600.jpg",
                    name: "Пирожное Крамбл с чёрной смородиной",
                    price: "3.00 руб.",
                    description: "Пирожное Крамбл с чёрной смородиной"
                },
                {
                    id: 5,
                    img: "https://gogopizza.by/wp-content/uploads/2019/11/IMG_9922-min-600x600.jpg",
                    name: "Подушечки сладкие с корицей и сахарной пудрой",
                    price: "3.50 руб.",
                    description: "3.50 руб."
                }
                
            ],
        },
        saucesPage: {
            sauces: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_0063-600x600.jpg",
                    name: "Соус грибной",
                    price: "3.20 руб.",
                    description: "В наличии"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/IMG_0061-600x600.jpg",
                    name: "Соус Ранч",
                    price: "1.20 руб.",
                    description: "В наличии"
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/IMG_0067-600x600.jpg",
                    name: "Соус сырный",
                    price: "3.20 руб.",
                    description: "В наличии"
                }


            ],

        },
        drinksPage: {
            drinks: [
                {
                    id: 1,
                    img: "https://gogopizza.by/wp-content/uploads/2019/04/bonaqua.jpg",
                    name: "Бонаква 0,5 Л",
                    price: "1.80 руб.",
                    description: "Китайский сладкий,Кунжутно-ореховый,Горчичный,Барбек"
                },
                {
                    id: 2,
                    img: "https://gogopizza.by/wp-content/uploads/2019/06/Koka-Kola-05-600x600.jpg",
                    name: "Кока –кола 0,5 Л",
                    price: "2.20 руб.",
                    description: "2.20 руб."
                },
                {
                    id: 3,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/59532_square.jpg",
                    name: "Напиток сокосодержащий Добрый Палпи",
                    price: "2.50 руб.",
                    description: "2.50 руб."
                },
                {
                    id: 4,
                    img: "https://gogopizza.by/wp-content/uploads/2019/05/dobriy-sok-0.33-600x600.jpg",
                    name: "Соки (в ассортименте) 0.2 л",
                    price: "1.20 руб.",
                    description: "1.20 руб."
                },
                {
                    id: 5,
                    img: "https://gogopizza.by/wp-content/uploads/2019/08/n1902.jpg",
                    name: "Соки (в ассортименте) 1л",
                    price: "3.00 руб.",
                    description: "3.00 руб."
                },
                {
                    id: 6,
                    img: "https://gogopizza.by/wp-content/uploads/2019/04/sprite.jpg",
                    name: "Спрайт 0,5 Л",
                    price: "2.20 руб.",
                    description: "Охлажденный напиток"
                },


            ]
        },
    },
        getState(){
            return this._state
        },

        _callSubscriber(){
            console.log('State changet')
        },
        subscribe(observer){
            this._callSubscriber = observer;
        },

     /!*   dispatch(action){
        this._state.pizzaPage = pizzaReducer(this._state.pizzaPage, action)
            this._callSubscriber(this._state)
        }*!/

}

window.store = store;

export default store
*/
