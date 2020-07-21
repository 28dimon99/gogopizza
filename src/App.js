import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Layout from "./components/componentsHeader/Layout";
import {Pizza} from "./components/componentsHeader/Pizza";
import {Sets} from "./components/componentsHeader/Sets";
import {ConstructorPizza} from "./components/componentsHeader/ConstructorPizza";
import {Pancakes} from "./components/componentsHeader/Pancakes";
import {Snacks} from "./components/componentsHeader/Snacks";
import {Desserts} from "./components/componentsHeader/Desserts";
import {Sauces} from "./components/componentsHeader/Sauces";
import {Drinks} from "./components/componentsHeader/Drinks";
import {Works} from "./components/componentsHeader/Works";
import {Footer} from "./components/Footer/Footer";
import {HeaderContainer} from "./components/componentsHeader/HeaderContainer";






const App = (props) => {
  return (
      <React.Fragment>
      <HeaderContainer/>

       <Layout>
          <BrowserRouter>
            <Switch>
                  <Route exact path="/pizza" render={ () => <Pizza state={props.state.pizzaPage} />}/>
                  <Route exact path="/sets" render={() => <Sets state={props.state.setsPage}/>}/>
                  <Route exact path="/costructor" component={ConstructorPizza}/>
                  <Route exact path="/pancakes" render={ () => <Pancakes state={props.state.pancakesPage}/>}/>
                  <Route exact path="/snacks" render={ () => <Snacks state={props.state.snacksPage}/>}/>
                  <Route exact path="/desserts" render={ () => <Desserts state={props.state.desertsPage}/>}/>
                  <Route exact path="/sauces" render={ () => <Sauces state={props.state.saucesPage}/>}/>
                  <Route exact path="/drinks" render={ () => <Drinks state={props.state.drinksPage}/>}/>
                  <Route exact path="/works" component={Works}/>
            </Switch>
          </BrowserRouter>
       </Layout>

          <Footer/>
      </React.Fragment>
  );
}

export default App;
