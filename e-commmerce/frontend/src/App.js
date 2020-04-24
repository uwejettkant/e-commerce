import React from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Footer from "./Footer";
import Products from "./Products";
import { Route, Switch } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
