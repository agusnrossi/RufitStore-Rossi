import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../Componentes/ItemDetails/ItemDetailsContainer";
import ItemListContainer from "../Componentes/ItemListContainer/ItemListContainer";
import NavBar from "../Componentes/NavBar/navBar";

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
