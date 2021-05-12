import React, { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext([])


export function CartContex(product){

    const [cart, setCart] = useState([])

    function isCurrentlyInCart (id) {
        return cart.some(item => item.id === id)
      }

    
      function setCartItem({id, title, quantity}) {
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

    
    function removeItem(id) {
      const newToCart = cart.filter((item) => item.id !== id);
      
      console.log(`eliminar item id ${id}`)
      const modifieProduct= cart.filter((item)=>item.id === id)
      const newModifieProdcut={...modifieProduct.item,quantity:modifieProduct.quantity-1}
      setCart([...newToCart,newModifieProdcut])
  }



    return <CartContext.Provider value={{setCartItem, setCart, clear, removeItem, cart}}{...product} /> 
    
}



