import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/cartContex'
import { Button } from 'bootstrap-4-react';



export default function CartPage(product) {
   
 const { addCart, deleteItem} = useContext(CartContext);
 const { cart } = useContext(CartContext);
 console.log(cart)
 
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
        {cart.map((product) => {
           return(
            <ul key={product.item.id}>
            <span>{product.item.title}</span>
            <li>Cantidad: {product.quantity}</li>
            <li>Precio: {product.item.price}</li>
            <li>Total por producto: {product.item.price * product.quantity}</li>
            <li><button onClick={()=>deleteItem(product.item.id)} className={product.item.id}>-</button></li>
        </ul>
            
           )
        })}
     </tr>
 );
}

