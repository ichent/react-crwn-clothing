import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

import HeaderComponent from "./components/header/header.component";

function App() {
  return (
      <div>
          <HeaderComponent/>
          <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/shop' component={ShopPage}></Route>
          </Switch>
      </div>
  );
}

export default App;
