import React from 'react';
import { Card } from 'react-bootstrap';


const ItemListContainer=(props)=>{

    return   <div>
                <>
                <Card >
                    <Card.Body>
                        {props.greeting}
                    </Card.Body>
                    </Card>
                    </>
                </div>
                 
}

export default ItemListContainer;