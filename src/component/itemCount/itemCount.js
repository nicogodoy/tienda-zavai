import React, { useState } from "react";
import "./itemCount.css";
import { Button } from "bootstrap-4-react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [number, setNumber] = useState(initial);

  function increment() {
    if (number < stock) {
      setNumber(number + 1);
    } else {
      return alert("no hay mas stock de este producto");
    }
  }

  function decrement() {
    if (number) {
      setNumber(number - 1);
    }
  }

  return (
    
    <div className="container">
      <div className="butons-container">
        <Button secondary outline onClick={decrement}>
          -
        </Button>
        <div className="div-number">{number}</div>
        <Button secondary outline onClick={increment}>
          +
        </Button>
      </div>
      <div>
        <Button success outline disabled={number === 0 || number >= 5}>
          Agregar 
        </Button>
      </div>
    </div>
  );
}
