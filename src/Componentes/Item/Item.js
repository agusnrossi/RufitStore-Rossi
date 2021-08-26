import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ id, title, price, pictureUrl }) {
  return (
    <Link to={`/item/${id}`}>
      <Card style={{ width: "18rem" }}>
      <Row className="justify-content-md-center">
    <Col xs lg="2">
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Detalle del producto.</Card.Text>
          <p>${price}</p>

          <Button variant="danger">+ INFO</Button>
        </Card.Body>
        <Row className="justify-content-md-center">
    <Col xs lg="2"></Col>
      </Card>
    </Link>
  );
}

export default Item;
