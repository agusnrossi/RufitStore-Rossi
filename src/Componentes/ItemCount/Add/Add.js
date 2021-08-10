
import React from 'react';

const style ={
    width: 150,
    height: 30,
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
}

export default function Add({ onAdd, counter}){
    return(

        <button style={style} onClick= {onAdd(counter)}>Agregar</button>
    )

}