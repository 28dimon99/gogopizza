import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import state from './../src/redux/state'
import {BrowserRouter} from "react-router-dom";
//import gogoJSApp from "./AppExample"
import store from "../src/redux/StoreGoods"

 let rerenderEntireTree = (state) =>{

     ReactDOM.render(

         <BrowserRouter>
             <App state={state}/>
         </BrowserRouter>,

         document.getElementById('root')
     );
 }

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


/*ReactDOM.render(<gogoJSApp/>, document.getElementById('root'));*/


/*let rerenderEntireTree = (state) =>{
}
rerenderEntireTree(state.getState())*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
