import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetails/ItemDetails';


function ItemDetailContainer() {
    const [item, setItem] = useState({})

    const getItem = async () => {
        setTimeout(async () => {
            setItem({

                id: 0,
                title: "Remera Rufit",
                price: 900,
                pictureUrl:
                    "https://www.rufit.com.ar/media/productos/a_f9bUcDP.jpg",
            });
        }, 1000);
    };

    useEffect(() => {
        getItem();
    }, [])
    return <ItemDetail item={item} />

}

export default ItemDetailContainer
