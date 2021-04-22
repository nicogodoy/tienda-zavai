import React, { useState } from 'react';
import './itemCount.css';

export default function ItemCount({stock, initial, onAdd}) {
    
   const [number, setNumber] = useState(initial);
  

   function increment(){
       if (number<stock) {
           setNumber(number+1)
           
        }  else{
            return alert('no hay mas stock de este producto')
        }
   }

   function decrement() {
    if(number) {
        setNumber(number - 1);
    }
}

 
    return(
           
        <div className="item-count-container">
            <div className='item-count-container__title'>
                     <h6>Zapatos bajos</h6>
                    
            </div>
           <div className='item-count-container__buttons'>
               <button onClick={decrement}>
                   -
               </button>
               <div>
                  {
                      number
                  }
               </div>
               <button onClick={increment}>
                   +
               </button>

           </div>
           <button disabled={number === 0 || number>= 5 }>
               Agregar al carrito
           </button>
        </div>
    )
  
}