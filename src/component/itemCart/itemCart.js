import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "bootstrap-4-react";

// const ItemCart = ({ cantidad, precio, title }) => {
   const ItemCart = (cantidad,id) => {
  const { removeItem, onCart } = useContext(CartContext);
  console.log(onCart);
 //console.log(key);

  return (
    <div>
      <h1>Bienvenido a su carrito</h1>
          
      
      {/* Si hay algo en el carrito renderizo el listado, o que no hay nada */}
      {onCart === false ? (
        <h2>No se ha encontrado productos en el carrito</h2>
    
      ) : (
        onCart.map((product) => {
          return (
            <ul key={product.id}>
                <span>{product.title}</span>
                <li>Cantidad: {product.cantidad}</li>
                <li>Precio: {product.precio}</li>
                <li>Id: {product.id}</li>
                <li>Total por producto: {product.precio * product.cantidad}</li>
                <button onClick={()=>removeItem(product.id)} className={product.id}>-</button>
            </ul>
          );
        })
      )}
    </div>
  );
};
export default ItemCart;

