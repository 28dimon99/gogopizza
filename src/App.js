import React from 'react';
import {Switch, Route, Redirect, withRouter, BrowserRouter} from "react-router-dom";

import {ConstructorPizza} from "./components/componentsHeader/ConstructorPizza/ConstructorPizza";

import {Works} from "./components/componentsHeader/TopMenu/Works/Works";
import {Footer} from "./components/Footer/Footer";
import Stock from "./components/componentsHeader/TopMenu/Stock/Stock";
import {Pizzas} from "./components/Content/PizzaRoutes/Pizzas/Pizzas";
import {Popular} from "./components/Content/PizzaRoutes/Popular/Popular";
import {PizzaSnacks} from "./components/Content/PizzaRoutes/PizzaSnacks/PizzaSnacks";
import {PizzaNews} from "./components/Content/PizzaRoutes/PizzaNews/PizzaNews";
import s from "./App.module.css"
import Header from "./components/Header/Header";
import Contacts from "./components/componentsHeader/TopMenu/Contacts/Contacts";
import Menu from "./components/Sidebar/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import {Main} from "./components/componentsHeader/TopMenu/Main/Main";

import {PizzaContainer} from "./components/componentsHeader/Pizza/PizzaContainer";
import {SetsContainer} from "./components/componentsHeader/Sets/SetsContainer";
import {PancakesContainer} from "./components/componentsHeader/Pancakes/PancakesContainer";
import {SnacksContainer} from "./components/componentsHeader/Snacks/SnacksItems/SnacksContainer";
import {SaucesContainer} from "./components/componentsHeader/Sauces/SaucesContainer";
import {DessertsContainer} from "./components/componentsHeader/Deserts/DessertsContainer";
import {DrinksContainer} from "./components/componentsHeader/Drinks/DrinksContainer";
import Login from "./components/Sidebar/LoginForm";
import {Basket} from "./components/componentsHeader/TopMenu/Basket/Basket";






class App extends React.Component {

    render() {
        return (
            <div className={s.wrapper}>
                <Header/>
                <Sidebar/>
                <Switch>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/private" render={() => <Login/>}/>
                    <Route exact path="/menu" render={() => <Menu/>}/>
                    <Route exact path="/stock" component={Stock}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/works" component={Works}/>
                    <Route exact path="/basket" component={Basket}/>

                    <Route exact path="/pizza"
                           render={() => <PizzaContainer/>}/>
                    <Route exact path="/sets"
                           render={() => <SetsContainer/>}/>
                    <Route exact path="/costructor" component={ConstructorPizza}/>
                    <Route exact path="/pancakes"
                           render={() => <PancakesContainer/>}/>
                    <Route exact path="/snacks"
                           render={() => <SnacksContainer/>}/>
                    <Route exact path="/desserts"
                           render={() => <DessertsContainer/>}/>
                    <Route exact path="/sauces"
                           render={() => <SaucesContainer/>}/>
                    <Route exact path="/drinks"
                           render={() => <DrinksContainer/>}/>
                    <Route exact path="/pizzas" component={Pizzas}/>
                    <Route exact path="/popular" component={Popular}/>
                    <Route exact path="/pizzaSnacks" component={PizzaSnacks}/>
                    <Route exact path="/pizzaNews" component={PizzaNews}/>

                    <Redirect from="/" to="/main"/>
                </Switch>

                <Footer/>
            </div>
        );

    }

}
/*export default withRouter(App);*/
/*export default  connect(
    (state)=>{
        return{
            items:state.pizza.items
        };
    },
    (dispatch)=>{
        return{
            setPizzas:(items)=> dispatch(setPizzas(items))
        }
    }
)(App);*/


/*const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const AppJSgogo = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default AppJSgogo*/
export default App
