import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function CartWidget() {
  const { cartSize } = useContext(CartContext);
  return (
    <Link to="/cart">
      <Button variant="danger">
        <MdShoppingCart />
        <span style={{ marginRight: 250 }}>{cartSize}</span>
      </Button>
    </Link>
  );
}

export default CartWidget;
