import React from "react";
import Item from "./Item";


function addItem({ id, price, title, pictureUrl }) {
    return <Item id={id} title={title} price={price} pictureUrl={pictureUrl} />;
}


function ItemList({ items }) {
    return <div className="d-inline-flex">{items.map(addItem)}</div>;
}

export default ItemList;