import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddNew from './components/Admin/AddNew/AddNew';
import AddReview from './components/DashBoard/DashBoard/AddReview/AddReview';
import DashBorad from './components/DashBoard/DashBoard/DashBorad';
import MyOrders from './components/DashBoard/MyOrders/MyOrders';
import Home from './components/Homes/Home/Home';
import Explore from './components/Homes/Products/Explore';
import Products from './components/Homes/Products/Products';
import Login from './components/LogReg/Login/Login';
import PrivateRoute from './components/LogReg/PrivateRoute/PrivateRoute';
import Singup from './components/LogReg/Singup/Singup';
import NotFound from './components/NotFound/NotFound';
import OrderForm from './components/OrderPage/OrderForm/OrderForm';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

const App = () => {
  
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBorad></DashBorad>
        </PrivateRoute>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        <PrivateRoute path="/orderForm/:productId">
          <OrderForm></OrderForm>
        </PrivateRoute>
        <PrivateRoute path="/addNew">
          <AddNew></AddNew>
        </PrivateRoute>
        {/* <PrivateRoute exact path="/addReview">
          <AddReview></AddReview>
        </PrivateRoute> */}
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/singup">
          <Singup></Singup>
        </Route>
        <PrivateRoute exact path="/myorders">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;