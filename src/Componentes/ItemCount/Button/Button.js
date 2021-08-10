import React from 'react';

const style ={
    width: 40,
    height: 40,
    backgroundColor: 'white',
    margin: '15px 20px',
    color: 'black',
    cursor: 'pointer',
    fontWeight: '500',
}

export default function Button({ suma , onClick, counter, setCounter}){

    let sign = suma ? '+' : '-';

    let amount = suma ? (counter +1) : (counter -1);

    return(
        <button onClick={onClick(amount)} style={style}>{sign} </button>
    )

}