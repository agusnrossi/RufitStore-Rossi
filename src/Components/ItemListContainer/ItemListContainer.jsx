import { React, useState, useEffect } from "react";
//import { productos } from "../../Helpers/Productos";
import ItemList from "../Item/ItemList";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}
export default ItemListContainer;
