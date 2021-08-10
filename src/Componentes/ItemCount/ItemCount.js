import React, {useState} from 'react';
import Button from './Button/Button';
import Add from './Add/Add';
import Display from './Display/Display';


const style ={
    margin: '20px',
    width: 250,
    height: 120,
    backgroundColor: 'grey',
}

const upper ={
    display: 'flex',
    justifyContent: 'space-between',
}

const lower ={
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
}

export default function ItemCount({ onAdd, stock, inicial}){

    let [counter, setCounter] = useState(inicial);

    const handleClick = (amount)=>{
        return(
            ()=>{
                let total = (amount < 0) ? 0: amount;
                let limiter = (total > stock) ? stock: total;
                setCounter(limiter);
            }
        )
    };

    let prop ={counter, setCounter}

    return(
        <div className="itemCount" style={style}>
            <div className="upper" style={upper}>
                <Button suma= {false} onClick= {handleClick} {...prop}/>
                <Display value= {counter}/>
                <Button suma={true} onClick= {handleClick} {...prop}/>

            </div>
            <div className="lower" style={lower}>
                <Add onAdd={onAdd} {...{counter}}/>

            </div>



        </div>
    );
}