import React from "react";
import { Switch, Route, useLocation, Router, useHistory } from "react-router-dom";
import Home from "./pages/Home/Home";
import FazerOBem from "./pages/FazerOBem/FazerObem";
import Products from "./pages/Products/Products";
import { ProductItem } from "./pages/Products/Components/ProductItem";

export const Routes = () => {
  const location = useLocation();
  const history = useHistory()
  return (
    <Router history={history}>
      <Switch location = {location}>
        <Route  exact path="/fazer-o-bem" component={FazerOBem} />
        <Route   exact path="/produtos" component={Products} />
        <Route exact path="/produtos/:name" component={ProductItem} />
        <Route   path="/" component={Home} />
      </Switch>
    </Router>
      
   
  );
};
