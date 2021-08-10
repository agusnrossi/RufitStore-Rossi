import React from 'react';

const style ={
    width: 50,
    height: 50,
    backgroundColor: 'black',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    color: 'white',
}

export default function Display({ value }){
    return(
        <div className='display' style={style}>
            {value}

        </div>



    )

}