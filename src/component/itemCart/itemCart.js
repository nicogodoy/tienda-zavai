import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import { Button } from 'bootstrap-4-react';


const ItemCart = ( {cantidad,id,precio,title}) => {
    const { removeItem,onCart } = useContext(CartContext);
   console.log(onCart)
   console.log(cantidad)
   return (
    <div>
      <h1>Bienvenido a su carrito</h1>

      {/* Si hay algo en el carrito renderizo el listado, o que no hay nada*/}
      {onCart === false ? (
        <h2 >No se ha encontrado productos en el carrito</h2>
      ) : (
        onCart.map((item) => {
          return (
            <ul key={item.key}>
               <li> {item.title}</li>
               <li>  Cantidad: {item.cantidad}</li>
               <li>  Precio: {item.precio}</li>
                
                <h4>Total del producto: { item.precio * item.cantidad}</h4>
                <span><button onClick={()=>removeItem(item.id)} className={item.id}>-</button></span>
            </ul>
          );
        })
      )}

</div>
   )


}
export default ItemCart;

