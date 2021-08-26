import "./App.css";
import React from "react";
import Router from "./Router/Router";
import { CartProvider } from "./Componentes/Context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
