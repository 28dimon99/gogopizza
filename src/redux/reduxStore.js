import {combineReducers, createStore} from "redux";
import pizzaReducer from "./Redusers/pizzaReducer";
import setsReducer from "./Redusers/setsReducer";
import pancakesReducer from "./Redusers/pancakesReducer";
import snacksReducer from "./Redusers/snacksReducer";
import saucesReducer from "./Redusers/saucesReducer";
import dessertsReducer from "./Redusers/dessertsReducer";
import drinksReducer from "./Redusers/drinksReducer";
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    form: formReducer,
    pizzaPage: pizzaReducer,
    setsPage: setsReducer,
    pancakesPage: pancakesReducer,
    snacksPage: snacksReducer,
    saucesPage: saucesReducer,
    dessertsPage: dessertsReducer,
    drinksPage: drinksReducer
})
let store = createStore(reducers)
export default store




























/*import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

//import appReducer from "./Redusers/appRedusers";
import pizzaReducer from "./Redusers/pizzaReduser";






let reducers = combineReducers({
    pizzaReducer: pizzaReducer,
    /!*app: appReducer*!/
});

//let store = createStore (reducers, applyMiddleware(thunkMiddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;


export default store;*/
