import React from 'react'
import { Card, Button,Col,Row} from 'react-bootstrap';




const ItemDetail = (props) => (

    <Row>
        <Col>
        
            <Card className="mt-2 mb-2" style={{ width: '27rem' }}>

                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>

                    <Button variant="primary">+ info</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default ItemDetail;