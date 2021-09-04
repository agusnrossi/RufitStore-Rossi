import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function CartWidget() {
  const { cartSize } = useContext(CartContext);
  return (
    cartSize === 0 || (
      <Link to="/cart">
        <Button variant="danger">
          <MdShoppingCart color="white" />
          <span>{cartSize}</span>
        </Button>
      </Link>
    )
  );
}

export default CartWidget;
