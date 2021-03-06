
const GET_DATA_PIZZA = 'GET_DATA_PIZZA';

let initialState = {
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
}
const pizzaReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA_PIZZA: {
            return {
                ...state,
                pizzaPage: action.pizzaPage
            }
        }
        default:
            return state;
    }
};
export const getPizzaPageAC = () => ({type: GET_DATA_PIZZA })

export default pizzaReducer
