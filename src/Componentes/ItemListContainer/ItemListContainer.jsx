/* eslint-disable no-undef */
import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer=(handleAdd,stock)=>{

    return   <div>
                <>
                <Card >
                    <Card.Body>
                        {props.greeting}
                        <div> 
                            <ItemCount onadd={handleAdd} stock={stock} inicial={1}/>
                        </div>
                    </Card.Body>
                    </Card>
                    </>
                </div>
                 
}

export default ItemListContainer;