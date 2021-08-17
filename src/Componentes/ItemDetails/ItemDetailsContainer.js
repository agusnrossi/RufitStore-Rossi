import React,{ useState } from 'react'
import ItemDetail from '../ItemDetails/ItemDetails';


function ItemDetailContainer() {

    const [data, setData] = useState({});

React.useEffect(() => {
     setTimeout(() => {
     	console.log('USE EFFECT');
     }, 2000);
    fetch('https://kohls.p.rapidapi.com/auto-complete'
        
    )
        .then((res) => res.json())
        .then((dataApi) => setData(dataApi));
}, []);
    return (
        <div>
            <div className='container'>
        <ItemDetail data={data} />
    </div>
        </div>
    )
}

export default ItemDetailContainer
