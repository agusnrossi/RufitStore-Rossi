import ItemList from '../Item/ItemList'
import { React, useState, useEffect } from "react"
import {Productos} from '../src/Productos/Productos'



function ItemListContainer(props) {

  const [items, setItems] = useState([]);

  
  useEffect(() => {

      getProductos();
    }, []);
  
    const getProductos = async () => {
      try {
        const res = await Productos();
        setItems(res);
      } catch (err) {
        console.log("No se pueden cargar los datos,  ", err);
      }
    };

  return( <div>
          <ItemList items={items} />
          </div>);
}
export default ItemListContainer;