/* eslint-disable no-undef */
import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList'


const ItemListContainer=(props)=>{
let stock = 10;
const handleAdd = (counter) => {

        return () =>{
            if(stock <= 0){
                alert('No hay stock')
            }else{
                alert(`Se agregan ${counter} items`)
            }
        }          
    }
    return   <div>
                <>
                <Card >
                    <Card.Body>
                        {props.greeting} 
                        <ItemCount onAdd={handleAdd} stock={stock} inicial={1}/>
                        <ItemList/>
                    </Card.Body>
                    </Card>
                    </>
                </div>
                 
}

export default ItemListContainer;