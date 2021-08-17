import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Col,Row } from 'react-bootstrap';

export default Item
function Item(props) {
    const card = (
        <Row >
            {props.items.map((item) =>
                <Col key={item.id} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.pictureUrl}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                                <br></br>
                                {item.price}
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>

                </Col>
            )}
        </Row>


    );
    return (
        <div>
            {card}
        </div>
    );
}