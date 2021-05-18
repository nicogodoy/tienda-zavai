// import React from 'react'
// import {useContext} from 'react'
// import {CartContex} from '../Context/cartContex'

// export default function Cart() {
//    const cart= useContext(CartContex)
//    console.log(cart)
//     return (
//         <div>
//             hola
//         </div>
//     )

// }

 import React from 'react'
 import {useContext} from 'react'
 import {CartContex} from '../Context/cartContex'
import { Button } from 'bootstrap-4-react';



export default function CartPage({product}) {
    
  const { addCart, deleteItem} = useContext(CartContex);
  //const [ deleteItem] = useContext(CartContex);
  console.log(product); //para test

  function capitalizarPrimeraLetra(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function increaseQuantity(){
      const newItem = {
          id: product.id,
          category: product.category,
          title: product.title,
          price: product.price,
          quantity: product.quantity +1
      };
      console.log(newItem);
      addCart(newItem);
  }

  function reduceQuantity(){
      const newItem = {
          id: product.id,
          category: product.category,
          title: product.title,
          price: product.price,
          quantity: product.quantity -1
      };
      console.log(newItem);
      addCart(newItem);
  }

  return (
      <tr>
          <th>{product.category}</th>
          <td>{ product.title}</td>
          <td>
              {
                product.quantity < 5 ? <Button type="button" onClick={increaseQuantity}>+</Button> : <Button type="button" disabled>+</Button>
              }
              <span className="cart-visual">{ product.quantity}</span>
              {
                   product.quantity > 1 ? <Button type="button" onClick={reduceQuantity}>-</Button> : <Button disabled>-</Button>
              }
          </td>
          <td>
              <Button type="button" onClick={() => deleteItem( product.id)}>
                  Borrar
              </Button>
          </td>
          <td>$ <span>{( product.price* product.quantity).toFixed(2)}</span></td>
      </tr>
  );
}
