import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  return (
    <Card className="mt-2 mb-2" style={{ width: "27rem" }}>
      <Card.Img src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <h4>${item.price}</h4>
        <Button variant="danger">Agregar al Carrito</Button>
        <ItemCount stock={10} initial={1} />
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
