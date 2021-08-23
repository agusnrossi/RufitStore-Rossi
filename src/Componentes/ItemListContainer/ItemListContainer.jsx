import { React, useState, useEffect } from "react";
import { productos } from "../../Productos/Productos";
import ItemList from "../Item/ItemList";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      const res = await productos();
      setItems(res);
    } catch (err) {
      console.log("No se pueden cargar los datos,  ", err);
    }
  };

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}
export default ItemListContainer;
