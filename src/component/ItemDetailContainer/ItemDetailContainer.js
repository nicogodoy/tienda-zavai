import React,{useEffect,useState} from 'react'
import { getItems } from '../../servicie/servicie';

export default function ItemDetailContainer() {
    const [itemDetail,setItemDetail]=useState([])

     useEffect(() => {
         setTimeout(()=>{
             getItems
             .then(data=>console.log("Se ejecuto con exito la promesa"))
             .then(data=>setItemDetail(data))
         },2000)
        
     }, [])


    return (

        <div>
            
              <p>{itemDetail}</p>

        </div>
    )
}
