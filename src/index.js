import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import AppJSgogo from "./App";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";


/*
 let rerenderEntireTree = (state) => {
     ReactDOM.render(
            <BrowserRouter>
                    <App state={state} store={store}/>
            </BrowserRouter>,
            document.getElementById('root')
        );
    }
   rerenderEntireTree(store.getState());
   store.subscribe(rerenderEntireTree);
*/
/*ReactDOM.render(<AppJSgogo/>, document.getElementById('root'));*/
let rerenderEntireTree = () =>{
ReactDOM.render(
    <BrowserRouter>
         <Provider store={store}>
              <App />
         </Provider>

    </BrowserRouter>,
    document.getElementById('root'))
}
rerenderEntireTree();

store.subscribe(()=>{
    rerenderEntireTree()
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
