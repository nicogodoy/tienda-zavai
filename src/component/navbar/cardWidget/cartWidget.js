import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardWidget from "./icon/cart.svg";
import { CartContext } from "../../Context/cartContex";
import cartWidget from "./icon/cart.svg";

export default function CartWidget() {
  const { cart, cantTotal } = useContext(CartContext);

  let cantCar = cart.map((prod) => prod.quantity);

  let fullCar = cantCar.reduce((counterBefore, counterAfter) => {
    return counterBefore + counterAfter;
  }, 0);

  return(
    <div>
        { cart.length === 0 ?
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
