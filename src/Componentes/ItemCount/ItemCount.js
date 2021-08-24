import { React, useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="d-inline-flex gap-5">
      <button
        className="btn btn-primary"
        onClick={() => {
          if (counter < stock) {
            setCounter(counter + 1);
          }
        }}
      >
        +
      </button>
      <p className="fs-4">{counter}</p>
      <button
        className="btn btn-primary "
        onClick={() => {
          if (counter > initial) {
            setCounter(counter - 1);
          }
        }}
      >
        -
      </button>
      <button className="btn btn-danger " onClick={() => onAdd(counter)}>
        Agregar
      </button>
    </div>
  );
}
export default ItemCount;
