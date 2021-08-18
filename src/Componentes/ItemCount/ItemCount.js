import { React, useState } from "react";

function ItemCount({ stock, initial }) {
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
     
    </div>
  );
}
export default ItemCount;