import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "bootstrap-4-react";
import ItemCart from "../itemCart/itemCart";
import { Link } from "react-router-dom";
//import Swal from 'sweetalert2';
const { getItemOrder } = require("../../servicie/servicie");

export default function CartContainer({ precio, cantidad, id, key }) {
  const { onCart, clear } = useContext(CartContext);
  let total = 0;
  console.log(onCart);

  for (let i = 0; i < onCart.length; i++) {
    console.log(onCart);
    console.log(onCart[i].precio);
    total = total + onCart[i].precio * onCart[i].cantidad;
  }
  return(
    <div>
      <h2>Este es tu carrito</h2>
      <div>
        {onCart.length ===0?(
          <h1>El carrito esta vacio</h1>
        ):(
          <ItemCart/>
        )}
      </div>
      <div>
           <h3>Total $ {total}</h3>
        </div>
         <Button onClick={() => clear()}>Vaciar Carrito</Button>

         <Link to="/">
           <Button>Volver al home</Button>
         </Link>
         <div>
        {onCart.length>0?(

         <Link to="/forms">
           <Button>Ir a confirmar compra</Button>
         </Link>
        ):(<h1></h1>)}
        </div>

    </div>
  )
}

//   return (
//     <div>
//       <h2>Este es tu carrito</h2>
//       <div>
//         {<ItemCart />}
//         <div>
//           <h3>Total $ {total}</h3>
//         </div>
//         <Button onClick={() => clear()}>Vaciar Carrito</Button>

//         <Link to="/">
//           <Button>Volver al home</Button>
//         </Link>
//         <Link to="/forms">
//           <Button>Ir a confirmar compra</Button>
//         </Link>
//       </div>
//     </div>
//   );


