import {pizzaAPI} from "../../Api/Api";


const GET_DATA_PIZZA = 'GET_DATA_PIZZA';


let initialState = {
    "id": null,
    "img": null,
    "name": null,
    "prise": null,
    "description": null
};
const pizzaReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA_PIZZA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const setDataPizza = (id, img, name, prise, description) => ({
    type: GET_DATA_PIZZA,
    payload: {id, img, name, prise, description}
});

//Thunk для Pizza
export const getPizzaUrl = () => async(dispatch) => {
    let response = await pizzaAPI.getPizzaUrl();
    if(response.data.resultCode === 0){
        let{id, img, name, prise, description} = response.data;
        dispatch(setDataPizza(id, img, name, prise, description));
    }
};

export default pizzaReducer
