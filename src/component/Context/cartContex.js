import  { useState } from 'react';
import { createContext } from 'react';
import React, { useContext } from 'react';

export const CartContext = createContext([])


export function CartContex(product){

    //const {cart, setCart} = useState([])
   // const [cart, setCart] = useState([]);
   //const { cart, setCart } = useContext(CartContext);
   const [cart, setCart] = useState([]);

    function isCurrentlyInCart (id) {
        return cart.some(item => item.id === id)
      }

    
      function addCart({id, title, quantity}) {
        const isInCart = isCurrentlyInCart(id)
        if (isInCart) {
          const newToCart = cart.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: quantity + item.quantity
              }
            }
            return item
          })
          return setCart([...newToCart])
        }
        setCart([...cart, {id, title, quantity}])
    }

    function clear(){
      console.log('borrando cart')
      setCart([])
    }

    
    function deleteItem(id) {
      const newToCart = cart.filter((item) => item.id !== id);
      
      console.log(`eliminar item id ${id}`)
      const modifieProduct= cart.filter((item)=>item.id === id)
      const newModifieProdcut={...modifieProduct.item,quantity:modifieProduct.quantity-1}
      setCart([...newToCart,newModifieProdcut])
  }



    return <CartContext.Provider value={{ addCart, setCart, clear, deleteItem, cart}}{...product}/> 
    
}




// import {createContext, useState, useEffect } from 'react';

// export const CartContext = createContext([]);

// export default function AppContextProvider({children}){
//     const [cart, setCart] = useState([]);

//     const [totalPrice, setTotalPrice] = useState(0);
// 	const [totalItems, setTotalItems] = useState(0);

//     function isInCart (id) {
//         return cart.some(item => item.id === id)
//     }

//     function addToCart({id, category, title, price, quantity}) {
//         const isCurrentInCart = isInCart(id)
//         if (isCurrentInCart) {
//             const newCart = cart.map(item => {
//                 if (item.id === id) {
//                     return {
//                         ...item,
//                         quantity: quantity + item.quantity
//                     }
//                 }
//                 return item
//             })
//             return setCart([...newCart])
//         }
//         setCart([...cart, {id, category, title, price, quantity}])
//     }

//     function updateToCart({id, category, title, price, quantity}) {
//         const isCurrentInCart = isInCart(id)
//         if (isCurrentInCart) {
//             const newCart = cart.map(item => {
//                 if (item.id === id) {
//                     return {
//                         ...item,
//                         quantity: quantity
//                     }
//                 }
//                 return item
//             })
//             return setCart([...newCart])
//         }
//         setCart([...cart, {id, category, title, price, quantity}])
//     }

//     function clearCart(){
//         setCart([]);
//     }

//     useEffect(() => {
// 		const Total = () => {
// 			let totalPrice = 0;
// 			let totalItems = 0;
// 			for (const Item of cart) {
// 				totalPrice = totalPrice + Item.price * Item.quantity;
// 				totalItems += Item.quantity;
// 			}
// 			setTotalItems(totalItems);
// 			setTotalPrice(totalPrice.toFixed(2));
// 		};
// 		Total();
// 	}, [cart]);

//     function handleRemove(id) {
//         const newcart = cart.filter((item) => item.id !== id);
//         setCart(newcart);
//     }

//     return (
//         <CartContext.Provider value={
//             {
//                 cart,
//                 setCart,
//                 addToCart,
//                 clearCart,
//                 updateToCart,
//                 handleRemove,
//                 totalPrice, 
//                 totalItems,
//             }
//         }>
//             {children}
//         </CartContext.Provider>
//     )
// }

