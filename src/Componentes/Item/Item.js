import React from 'react'

function Item(props) {   
    const items=props.item;
    const listItems = items.map((item) => 
    <li>{item}</li>
    ) 
    return (
        <div>
      <ul>{listItems}</ul>
        </div>
    )
}
// eslint-disable-next-line no-unused-vars
const items = [
    {id: '1', 
    title :'Remera Rufit', 
    price:'900', 
    description :'Remera modo Rufus', 
    pictureUrl:''}
]
export default Item