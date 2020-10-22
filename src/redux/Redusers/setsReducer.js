
const GET_DATA_SETS = 'GET_DATA_SETS';

let initialState = {
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
}

const setsReducers = (state = initialState, action)=>{
    switch (action.type){
        case GET_DATA_SETS:{
            return{
                ...state,
                sets: action.setsPage
            }
        }
        default:
            return state;
    }
};
export const getSetsPageAC = () => ({type: GET_DATA_SETS })
export default setsReducers