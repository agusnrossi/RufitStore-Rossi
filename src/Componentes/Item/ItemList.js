import React from 'react'
import Item from './Item'

function ItemList() {
    return (
        <div>
            <Item items={items} />
        </div>
    )
}
const items = [
    {
        id: 1,
        title: 'Rufit Remera ',
        description: 'Remera Rufit Azul',
        price: '$ 1.090',
        pictureUrl: ''
    }, 

];
export default ItemList