import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList'
import { React, useState, useEffect } from "react"



let arrayItems = [
  {
    id: 0,
    title: "Remera Rufit",
    price: 900,
    pictureUrl:
      "https://www.rufit.com.ar/media/productos/a_f9bUcDP.jpg",
  }
];

function ItemListContainer(props) {

  const [items, setItems] = useState([]);
  useEffect(
    () => {
      setTimeout(async () => {
        setItems(arrayItems);
      }, 2000);

    },
    [

    ]
  );
  return (
    <div className="fs-2 text-center">
      <>
        <Card >
          <Card.Body>

            <br></br>

            <br></br>
            
            <ItemCount stock={10} initial={1} />
            <br/>
            <ItemList items={items} />
          </Card.Body>
        </Card>
      </>
    </div>
  );
}
export default ItemListContainer;