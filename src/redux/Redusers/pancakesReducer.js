

const GET_DATA_PANCAKES = 'GET_DATA_PANCAKES';

let initialState = {
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
}

const pancakesReducers = (state = initialState, action)=>{
    switch (action.type){
        case GET_DATA_PANCAKES:{
            return{
                ...state,
                pancakes: action.pancakesPage
            }
        }
        default:
            return state;
    }
};
export const getPancakesPageAC = () => ({type: GET_DATA_PANCAKES })
export default pancakesReducers