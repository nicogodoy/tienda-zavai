import { Button } from "bootstrap-4-react";
 
export default function ItemCount({ onAdd,onIncrement, onDecrement, itemQuantity,setCart }) {
 

  return (
   
    <div className="container">
       <div className="butons-container">
        <Button secondary outline onClick={onDecrement}>
          -
        </Button>
        <div className="div-number">{itemQuantity}</div>
        <Button secondary outline onClick={onIncrement}>
          +
        </Button>
      </div>

      <div>
        {
          itemQuantity > 0 ?(

        <Button onClick={onAdd} success outline >
          Agregar 
        </Button>
          ):null
        }
        
      </div>
     
    </div>
  );
}

