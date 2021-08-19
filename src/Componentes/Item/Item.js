import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';



function Item({ id, title, price, pictureUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${price}</p>
        <Link to ={`/item/${id}`}>
        <Button variant="danger">+ INFO</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;