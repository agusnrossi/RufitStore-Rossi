import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/navBar";
import ItemDetailContainer from "../Components/ItemDetails/ItemDetailsContainer";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
