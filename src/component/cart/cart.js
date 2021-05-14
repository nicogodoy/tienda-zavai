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



export default function CartPage({ itemSale }) {
    
  const { addCart, deleteItem } = useContext(CartContex);
  console.log(itemSale); //para test

  function capitalizarPrimeraLetra(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function increaseQuantity(){
      const newItem = {
          id: itemSale.id,
          category: itemSale.category,
          title: itemSale.title,
          price: itemSale.price,
          quantity: itemSale.quantity +1
      };
      console.log(newItem);
      addCart(newItem);
  }

  function reduceQuantity(){
      const newItem = {
          id: itemSale.id,
          category: itemSale.category,
          title: itemSale.title,
          price: itemSale.price,
          quantity: itemSale.quantity -1
      };
      console.log(newItem);
      addCart(newItem);
  }

  return (
      <tr>
          <th>{itemSale.category}</th>
          <td>{itemSale.title}</td>
          <td>
              {
                  itemSale.quantity < 5 ? <Button type="button" onClick={increaseQuantity}>+</Button> : <Button type="button" disabled>+</Button>
              }
              <span className="cart-visual">{itemSale.quantity}</span>
              {
                  itemSale.quantity > 1 ? <Button type="button" onClick={reduceQuantity}>-</Button> : <Button disabled>-</Button>
              }
          </td>
          <td>
              <Button type="button" onClick={() => deleteItem(itemSale.id)}>
                  Borrar
              </Button>
          </td>
          <td>$ <span>{(itemSale.price*itemSale.quantity).toFixed(2)}</span></td>
      </tr>
  );
}
