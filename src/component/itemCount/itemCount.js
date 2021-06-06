import { Button,ButtonGroup } from "bootstrap-4-react";
import { useHistory } from "react-router-dom";
 
export default function ItemCount({ onAdd,onIncrement, onDecrement, itemQuantity,setCart,itemAdded  }) {
  let history = useHistory();

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
         {/* {
        itemAdded ? (
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={()=>history.push('/cart')}>Finalizar compra</Button>
          </ButtonGroup>
        ) : null 
          }  */}
      </div>
     
    </div>
  );
}

