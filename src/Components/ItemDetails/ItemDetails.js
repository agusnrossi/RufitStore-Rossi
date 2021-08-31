import React, { useState, useContext } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

function ItemDetail({ item }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setSelectedItem(quantity);
    addItem(item, quantity);
  };
  return (
    <Container className="d-flex">
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Card className="mt-2 mb-2" style={{ width: "27rem" }}>
            <Card.Img src={item.pictureUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <h4>${item.price}</h4>
              {selectedItem > 0 ? (
                <Link to="/cart" onClick={() => addItem(item, selectedItem)}>
                  <Button className="btn btn-danger">Agregar al carrito</Button>
                </Link>
              ) : (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
              )}
              <Button className="btn btn-danger">Terminar Compra</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
