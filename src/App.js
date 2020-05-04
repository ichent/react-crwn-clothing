import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";

import HeaderComponent from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in-and-sign-up/sing-in-and-sign-up-component";
import ShopPage from "./pages/shop/shop.component";
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
      <div>
          <HeaderComponent/>
          <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/shop' component={ShopPage}></Route>
              <Route exact path='/signin' component={SingInAndSignUpPage}></Route>
          </Switch>
      </div>
  );
}

export default App;
