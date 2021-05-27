import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context/cartContex'
import { Button } from 'bootstrap-4-react';


const ItemCart = ( {title,price,quantity,id}) => {
    const { removeItem,name } = useContext(CartContext);
   //console.log(items)

    return(
        <div>
            <h1>hola {name}</h1>
            
            <h2>Producto: {title}</h2>
          
            <h2>Cantidad: {quantity}</h2>
            <h2>Precio $ {price}</h2>

            <Button className="btn delete-icon-btn"  onClick={() => removeItem(id)}> Eliminar producto</Button>
            

        </div>
    )
}
export default ItemCart;
