

const GET_DATA_DRINKS = 'GET_DATA_DRINKS'

let initialState ={
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
    }
}

const drinksReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_DATA_DRINKS: {
            return{
                ...state,
                drinks:action.drinksPage
            }
        }
        default:
            return  state
    }
}
export const getDrinksPageAC = () =>({type: GET_DATA_DRINKS })
export default drinksReducer
