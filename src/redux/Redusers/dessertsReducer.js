

const GET_DATA_DESSERTS = 'GET_DATA_DESSERTS';

let initialState={
    dessertsPage: {
        desserts: [
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

        ]
    }
}
const dessertsReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_DATA_DESSERTS:{
            return{
                ...state,
                desserts: action.dessertsPage
            }
        }
        default:
            return state
    }
};
export const getDessertsPageAC = () =>({type:GET_DATA_DESSERTS})
export default dessertsReducer