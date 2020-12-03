import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/WishList/WishList";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route exact path="/wishlist" component={WishList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
