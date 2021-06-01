import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import { Button } from 'bootstrap-4-react';


const ItemCart = ( {price,quantity,id,precio}) => {
    const { removeItem,cart } = useContext(CartContext);
   console.log(cart)
   return (
    <div>
      <h1>Bienvenido a su carrito</h1>

      {/* Si hay algo en el carrito renderizo el listado, o que no hay nada*/}
      {cart === false ? (
        <h2 >No se ha encontrado productos en el carrito</h2>
      ) : (
        cart.map((product) => {
          return (
            <ul key={product.key}>
                {product.title}
                Cantidad: {product.quantity}
                Precio: {product.precio}
                <h4>Total del producto: {product.price * product.quantity}</h4>
                <span><button onClick={()=>removeItem(product.id)} className={product.id}>-</button></span>
            </ul>
          );
        })
      )}

</div>
   )


}
export default ItemCart;


    // return(
    //     <div>
           
    //        <h2>Producto: {product.id}</h2>
    //         <h2>Producto: {addCart.product.title}</h2>
          
    //         <h2>Cantidad: {quantity}</h2>
    //         <h2>Precio $ {price}</h2>

    //         <Button className="btn delete-icon-btn"  onClick={() => removeItem(id)}> Eliminar producto</Button>
            

    //     </div>
    // )
