import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import { Button } from 'bootstrap-4-react';
import ItemCart from '../itemCart/itemCart'
import { Link } from 'react-router-dom';

// export default function CartContainer(product) {
   export default function CartContainer({precio,cantidad,id,key}) {
   const{ onCart, clear } = useContext(CartContext);
   let total = 0;
 console.log(onCart)

   // for(let i =0; i<  onCart.length; i++) {
   //     console.log( onCart);
   //     console.log( onCart[i].product.precio)
   //     console.log(typeof( onCart[i].product.precio))
   //     total = total +  onCart[i].product.precio *  onCart[i].quantity;
   
   // }
   for(let i =0; i<  onCart.length; i++) {
       console.log( onCart);
       console.log( onCart[i].precio)
       //console.log(typeof( onCart[i].precio))
       console.log( onCart[i].precio)
       total = total +  onCart[i].precio *  onCart[i].cantidad;
   
   }
   
    return(
       <div >
           <h2 >Este es tu carrito</h2>
       <div>
          
          
               {/* {onCart.lenght === 0 ? (
                   alert("No hay productos en el carrito")
               ) : (
                   onCart.map((item, key,product) => 
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
                   </Link>  */}
                     {/* {onCart.lenght === 0 ? (
                   alert("No hay productos en el carrito")
               ) : (
                   onCart.map((item, key,product) => 
                   <ItemCart key={product.key} {...item}/>)
                   )} */}
                    {<ItemCart/>}
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





