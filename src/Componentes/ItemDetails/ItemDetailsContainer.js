import {React,  useEffect, useState } from 'react'
import ItemDetail from '../ItemDetails/ItemDetails';
import { useParams } from "react-router-dom";
import { arrayItems} from "../../Productos/Productos"

function ItemDetailContainer() {
    const [item, setItem] = useState({})

    const { itemId } = useParams();

    const getItem = (itemId) => {
      const UnItem = arrayItems.find((el) => el.id === itemId);
      setItem(UnItem);
    };
  
    useEffect(() => {
      getItem(itemId);
    }, [itemId]);

    return <ItemDetail item={item} />

}

export default ItemDetailContainer;
