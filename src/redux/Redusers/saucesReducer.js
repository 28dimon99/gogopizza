
const GET_DATA_SAUCES = 'GET_DATA_SAUCES'

let initialState = {
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


        ]

    }
}

const saucesReducer = (state=initialState, action) =>{
    switch (action.type){
        case GET_DATA_SAUCES:{
            return{
                ...state,
                sauces:action.saucesPage
            }
        }
        default:
            return state
    }
}
export const getSaucesPageAC = () =>({type:GET_DATA_SAUCES})
export default saucesReducer