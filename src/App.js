import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Homes/Home/Home';
import Products from './components/Homes/Products/Products';
import OrderForm from './components/OrderPage/OrderForm/OrderForm';
import Footer from './components/Shared/Footer/Footer';

import Navigation from './components/Shared/Navigation/Navigation';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/#products">
          <Products></Products>
        </Route>
        <Route path="/orderform">
          <OrderForm></OrderForm>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;