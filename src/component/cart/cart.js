 import React from 'react'
 import {useContext} from 'react'
 import {CartContext} from '../Context/CartContext'
 import { Button } from 'bootstrap-4-react';
import ItemCart from '../itemCart/itemCart'
import { Link } from 'react-router-dom';

export default function CartContainer(product) {
    const{ cart, clear } = useContext(CartContext);
    let total = 0;
  console.log(cart)

    // for(let i =0; i< cart.length; i++) {
    //     console.log(cart);
    //     console.log(cart[i].product.precio)
    //     console.log(typeof(cart[i].product.precio))
    //     total = total + cart[i].product.precio * cart[i].quantity;
    
    // }
    
     return(
        <div >
            <h2 >Este es tu carrito</h2>
        <div>
           
           
                {cart.lenght === 0 ? (
                    alert("No hay productos en el carrito")
                ) : (
                    cart.map((item, key,product) => 
                    <ItemCart key={product.key} {...item}/>)
                    )}
                    
                    <div>
                        <h3 >Total $ {total}</h3>
                    </div>
                    <Button onClick={() =>clear()} >Vaciar Carrito</Button> 

                    <Link to="/">

                    <Button >
                        Volver al home
                    </Button>
                    </Link> 
                    
            </div>



        </div>

    )
}











// import React from 'react'
// import {useContext} from 'react'
// import {CartContext} from '../Context/cartContex'
// import { Button } from 'bootstrap-4-react';


// const Cart = ( {title,price,quantity,id}) => {
//     const { removeItem,name } = useContext(CartContext);
//    //console.log(items)

//     return(
//         <div>
//             <h1>hola {name}</h1>
//             <h3>Producto: {title}</h3>
          
//             <h2>Cantidad: {quantity}</h2>
//             <h2>Precio $ {price}</h2>

//             <Button className="btn delete-icon-btn"  onClick={() => removeItem(id)} style={{padding:"14px", color:"#8785a2", border:"#8785a2 solid 1px"}}> Eliminar producto</Button>
            

//         </div>
//     )
// }
// export default Cart;




// export default function CartPage(product) {
   
//  const { addCart, deleteItem} = useContext(CartContext);
//  const { cart } = useContext(CartContext);
//  console.log(cart)
 
//  console.log(product); 

//  function capitalizarPrimeraLetra(str) {
//      return str.charAt(0).toUpperCase() + str.slice(1);
//  }
 
//  function increaseQuantity(){
//      const newItem = {
//          id: product.id,
//          category: product.category,
//          title: product.title,
//          price: product.price,
//          quantity: product.quantity +1
//      };
//      console.log(newItem);
//      addCart(newItem);
//  }

//  function reduceQuantity(){
//      const newItem = {
//          id: product.id,
//          category: product.category,
//          title: product.title,
//          price: product.price,
//          quantity: product.quantity -1
//      };
//      console.log(newItem);
//      addCart(newItem);
//  }

//  return (
//      <tr>
//         {cart.map(() => {
//            return(
//             <ul key={product.item.id}>
//             <span>{product.item.title}</span>
//             <li>Cantidad: {product.quantity}</li>
//             <li>Precio: {product.item.price}</li>
//             <li>Total por producto: {product.item.price * product.quantity}</li>
//             <li><button onClick={()=>deleteItem(product.item.id)} className={product.item.id}>-</button></li>
//         </ul>
            
//            )
//         })}
//      </tr>
//  );
// }

