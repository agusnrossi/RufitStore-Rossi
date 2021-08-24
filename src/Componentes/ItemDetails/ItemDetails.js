import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = (quantityToAdd) => {
    setQuantityToAdd(quantityToAdd);
  };
  return (
    <Card className="mt-2 mb-2" style={{ width: "27rem" }}>
      <Card.Img src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <h4>${item.price}</h4>
        {quantityToAdd > 0 ? (
          <Link to="/cart">
            <Button className="btn btn-danger">Agregar al carrito</Button>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
        <Button className="btn btn-danger">Terminar Compra</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
