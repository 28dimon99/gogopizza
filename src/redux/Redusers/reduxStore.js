import {reducer as formReducer} from 'redux-form'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import headerReducer from "./headerReducer";



let reducers = combineReducers({
    form: formReducer,
    pizzaPage: headerReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.__store__ = store;


export default store;
