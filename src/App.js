import React from 'react';
import store from './redux/reduxStore'
import {Switch, Route, Redirect, withRouter, BrowserRouter} from "react-router-dom";

import {Sets} from "./components/componentsHeader/Sets/Sets";
import {ConstructorPizza} from "./components/componentsHeader/ConstructorPizza/ConstructorPizza";
import {Pancakes} from "./components/componentsHeader/Pancakes/Pancakes";
import {Snacks} from "./components/componentsHeader/Snacks/Snacks";
import {Desserts} from "./components/componentsHeader/Deserts/Desserts";
import {Sauces} from "./components/componentsHeader/Sauces/Sauces";
import {Drinks} from "./components/componentsHeader/Drinks/Drinks";
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
import Private from "./components/Sidebar/Private";
import Menu from "./components/Sidebar/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import {Main} from "./components/componentsHeader/TopMenu/Main/Main";
import Basket from "./components/componentsHeader/TopMenu/Basket/Basket";
import {Provider, connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/Redusers/appRedusers";
//import PizzaContainer from "./components/componentsHeader/Pizza/PizzaContainer";
import {fieldArrayFieldsPropTypes as axios} from "redux-form";
//import {setPizzas} from "./redux/Redusers/setPizzasReduser";
import {Pizza} from "./components/componentsHeader/Pizza/Pizza";
import PizzaContainer from "./components/componentsHeader/Pizza/PizzaContainer";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        return (
            <div className={s.wrapper}>
                <Header/>
                <Sidebar/>
                <Switch>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/private" render={() => <Private/>}/>
                    <Route exact path="/menu" render={() => <Menu/>}/>
                    <Route exact path="/stock" component={Stock}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/works" component={Works}/>
                    <Route exact path="/basket" component={Basket}/>

                    <Route exact path="/pizza"
                           render={() => <PizzaContainer /*state={this.props.state.pizzaPage}*//>}/>
                    <Route exact path="/sets"
                           render={() => <Sets state={this.props.state.setsPage}/>}/>
                    <Route exact path="/costructor" component={ConstructorPizza}/>
                    <Route exact path="/pancakes"
                           render={() => <Pancakes state={this.props.state.pancakesPage}/>}/>
                    <Route exact path="/snacks"
                           render={() => <Snacks state={this.props.state.snacksPage}/>}/>
                    <Route exact path="/desserts"
                           render={() => <Desserts state={this.props.state.desertsPage}/>}/>
                    <Route exact path="/sauces"
                           render={() => <Sauces state={this.props.state.saucesPage}/>}/>
                    <Route exact path="/drinks"
                           render={() => <Drinks state={this.props.state.drinksPage}/>}/>
                    <Route exact path="/pizzas" component={Pizzas}/>
                    <Route exact path="/popular" component={Popular}/>
                    <Route exact path="/pizzaSnacks" component={PizzaSnacks}/>
                    <Route exact path="/pizzaNews" component={PizzaNews}/>

                    {/*<Redirect from="/" to="/main"/>*/}
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


const mapStateToProps = (state) => ({
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

export default AppJSgogo
