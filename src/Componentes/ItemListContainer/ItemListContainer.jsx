/* eslint-disable no-undef */
import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount.js';


const ItemListContainer=(props)=>{

    return   <div>
                <>
                <Card >
                    <Card.Body>
                        {props.greeting}
                        <div> 
                            <ItemCount onAdd={this.handleAdd} stock={this.stock} inicial={1}/>
                        </div>
                    </Card.Body>
                    </Card>
                    </>
                </div>
                 
}

export default ItemListContainer;