/*import {pizzaAPI} from "../../Api/Api";*/


const GET_DATA_PIZZA = 'GET_DATA_PIZZA';


let initialState = {
   /* pizza: [
        {
            id: 1,
            img: "https://gogopizza.by/wp-content/uploads/2020/03/5.jpg",
            name: "1/2 Вегетарианская 43 см+1/2 Куриная 43 см",
            prise: "249 руб.",
            description: "Соус, сыр, болгарский перец, томаты, шампиньоны св., лук, маслины"
        },
        {
            id: 2,
            img: "https://gogopizza.by/wp-content/uploads/2020/03/4.jpg",
            name: "1/2 Гавайская 43 см+1/2 ",
            prise: "329 руб.",
            description: "Соус, курица, ветчина, ананас, кукуруза, сыр моцарелла, стружка кокоса"
        },
        {
            id: 3,
            img: "https://gogopizza.by/wp-content/uploads/2020/03/6.jpg",
            name: "1/2 Супермясная 43 см+1/2",
            prise: "409 руб.",
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
            price: "459 руб.",
            description: "Соус,сыр моцарелла, лук, грибы: белый гриб, вешенки"
        },
        {
            id: 6,
            img: "https://gogopizza.by/wp-content/uploads/2020/03/1.jpg",
            name: "1/2 Флоренция 43 см+1/2",
            price: "509 руб.",
            description: "Соус,копчёная куриная грудка, чили, сыр моцарелла, соус манго-халапеньо, кунжут"
        }
    ]*/
    pizza: null

}
const pizzaReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA_PIZZA: {
            return {
                ...state,
             pizza: action.pizza
            }
        }
        default:
            return state;
    }
};


export const setDataPizza = (pizza) => ({
    type: GET_DATA_PIZZA, pizza
});

//Thunk для Pizza
/*export const getPizzaUrl = (pizza) => async (dispatch) => {
    let response = await pizzaAPI.getPizzaUrl(pizza);
    if (response.data.resultCode === 0) {
        let {pizza} = response.data;
        dispatch(setDataPizza(pizza));
    }
};*/

/*export const getPizzaUrl = () => async(dispatch) => {
    const response = await pizzaAPI.getPizzaUrl();
    if (response.data.resultCode === 0) {
        dispatch(setDataPizza(response.data.data.pizza));
    }
};*/

export default pizzaReducer
