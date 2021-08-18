/* eslint-disable no-undef */
import React from 'react';
//import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList'
import { useState, useEffect } from "react"

/*
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
*/

let remoteItems = [
    {
      id: 0,
      title: "producto1",
      price: 300,
      pictureUrl:
        "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
    },
    {
      id: 1,
      title: "producto2",
      price: 400,
      pictureUrl:
        "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
    },
    {
      id: 2,
      title: "producto3",
      price: 500,
      pictureUrl:
        "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
    },
    {
      id: 3,
      title: "producto4",
      price: 600,
      pictureUrl:
        "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
    },
  ];
  
  function ItemListContainer(props) {
    // creo un efecto de montaje para emitir un llamado asincrónico
    const [items, setItems] = useState([]);
    useEffect(
      () => {
        setTimeout(async () => {
          setItems(remoteItems);
        }, 3000);
        //espera unos segs y setea el estado items a remoteItems
      },
      [
        /*Lista de dependencias (o variables que quiero escuchar para re-renderear)*/
      ]
    );
    return (
      <div className="fs-2 text-center">
        {props.greeting}
        {/* Creo nuestro contador con stock en 5 y que comience en 1 */}
        <br></br>
        <ItemCount stock={5} initial={1} />
        <br></br>
        <ItemList items={items} />
      </div>
    );
  }
  export default ItemListContainer;