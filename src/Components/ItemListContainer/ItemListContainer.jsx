import { React, useState, useEffect } from "react";
//import { productos } from "../../Helpers/Productos";
import ItemList from "../Item/ItemList";
import { getFirestore } from "../firebase/firebase";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFirestore();
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}
export default ItemListContainer;
