/*
import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/componentsHeader/Layout";
import {Pizza} from "./components/componentsHeader/Pizza/Pizza";
import {Sets} from "./components/componentsHeader/Sets/Sets";
import {ConstructorPizza} from "./components/componentsHeader/ConstructorPizza";
import {Pancakes} from "./components/componentsHeader/Pancakes/Pancakes";
import {Snacks} from "./components/componentsHeader/Snacks/Snacks";
import {Desserts} from "./components/componentsHeader/Deserts/Desserts";
import {Sauces} from "./components/componentsHeader/Sauces/Sauces";
import {Drinks} from "./components/componentsHeader/Drinks/Drinks";
import {Works} from "./components/componentsHeader/TopMenu/Works/Works";
import {Footer} from "./components/Footer/Footer";
import Stock from "./components/componentsHeader/TopMenu/Stock/Stock";
import {Content} from "./components/Content/Content";
import {Pizzas} from "./components/Content/PizzaRoutes/Pizzas/Pizzas";
import {Popular} from "./components/Content/PizzaRoutes/Popular/Popular";
import {PizzaSnacks} from "./components/Content/PizzaRoutes/PizzaSnacks/PizzaSnacks";
import {PizzaNews} from "./components/Content/PizzaRoutes/PizzaNews/PizzaNews";
import s from "./App.module.css"
import Header from "./components/Header/Header";
import Contacts from "./components/componentsHeader/TopMenu/Contacts/Contacts";
import  {connect, Provider} from "react-redux";
import store from "./redux/Redusers/reduxStore";
import {compose} from "redux";
import withRouter from "react-router/modules/withRouter";
import {initializeApp} from "./redux/Redusers/appRedusers";

class AppExample extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <div className={s.wrapper}>
                <Header/>
                <Layout>
                    <Switch>
                        <Route exact path="/stock" component={Stock}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/works" component={Works}/>
                        <Route exact path="/pizza" render={() => <Pizza state={store}/>}/>
                        <Route exact path="/sets" render={() => <Sets state={store}/>}/>
                        <Route exact path="/costructor" component={ConstructorPizza}/>
                        <Route exact path="/pancakes" render={() => <Pancakes state={store}/>}/>
                        <Route exact path="/snacks" render={() => <Snacks state={store}/>}/>
                        <Route exact path="/desserts" render={() => <Desserts state={store}/>}/>
                        <Route exact path="/sauces" render={() => <Sauces state={store}/>}/>
                        <Route exact path="/drinks" render={() => <Drinks state={store}/>}/>
                        <Route exact path="/pizzas" component={Pizzas}/>
                        <Route exact path="/popular" component={Popular}/>
                        <Route exact path="/pizzaSnacks" component={PizzaSnacks}/>
                        <Route exact path="/pizzaNews" component={PizzaNews}/>
                    </Switch>
                </Layout>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(AppExample);


const gogoJSApp = (props) => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}

export default AppExample;
*/
