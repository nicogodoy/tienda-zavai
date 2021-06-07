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
      // ) : (
      //   onCart.map((item) => {
      //     return (
      //       <ul key={item.key}>
      //         <li> {item.title}</li>
      //         <li> Cantidad: {item.cantidad}</li>
      //         <li> Precio: {item.precio}</li>
      //         <li>id:{item.id}</li>

      //         <h4>Total del producto: {item.precio * item.cantidad}</h4>
      //         <span>
      //           <Button onClick={() => removeItem(item.id)} className={item.id}>
      //             -
      //           </Button>
      //         </span>
      //       </ul>
      //     );
      //   })
      // )}

      ) : (
        onCart.map((product) => {
          return (
            <ul key={product.id}>
                <span>{product.title}</span>
                <li>Cantidad: {product.cantidad}</li>
                <li>Precio: {product.precio}</li>
                <li>Id: {product.id}</li>
                <li>Total por producto: {product.precio * product.cantidad}</li>
                <li><button onClick={()=>removeItem(product.id)} className={product.id}>-</button></li>
            </ul>
          );
        })
      )}
    </div>
  );
};
export default ItemCart;

