import React from 'react'
import { Card, Button,Col,Row} from 'react-bootstrap';
import ItemDetailContainer from './ItemDetailsContainer';




const ItemDetail = (item) => (

    <Row>
        <Col>
        
            <Card className="mt-2 mb-2" style={{ width: '27rem' }}>
                <Card.Img src={item.pictureUrl}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                            <h4>{item.price}</h4>
                    <Button variant="danger">Agregar al Carrito</Button>
                    <ItemDetailContainer />
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default ItemDetail;