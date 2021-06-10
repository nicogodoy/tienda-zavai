import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import CardWidget from "./icon/cart.svg";
//import { CartContext } from "../../Context/CartContext";
import cartWidget from "./icon/cart.svg";
import {CartContext} from '../../Context/CartContext'

export default function CartWidget(cantidad) {
  
  const {onCart, cantTotal}=useContext(CartContext)

  let cantCar = onCart.map((prod) => prod.cantidad);

  let fullCar = cantCar.reduce((counterBefore, counterAfter) => {
    return counterBefore + counterAfter;
  }, 0);

  return(
    <div>
        { onCart.length === 0 ?
    <Link to= '/cart'>
          <img alt='cartWidget' src={cartWidget} className="cartWidget"width="30" height="30" loading="lazy" ></img>
        
    </ Link>
    :  
    <Link to='/cart'>
         <img alt='cartWidget' src={cartWidget} className="cartWidget"width="30" height="30" loading="lazy" ></img>
         { cantTotal ? <span>{cantTotal}</span> :null}
         <div>
             {fullCar}
         </div>
    </Link>   
    }      
    </div>

)
}
