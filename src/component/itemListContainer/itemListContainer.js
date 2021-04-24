import React,{useState, useEffect }  from 'react';
import Item from '../item/item'
import itemList from "../itemList/itemList";



export default function ItemListContainer(){
   
  const [item, setItems] = useState([]);

    useEffect(() => {
     setTimeout(()=>{
         itemList.map(xIteLis =>(console.log(xIteLis)));
         setItems(itemList);
         
     },2000)
    },[]);


    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            {
                item.map(xItem =>(

                <Item title={xItem.title} description={xItem.description} precio={xItem.precio} color={xItem.color}/> 
               
                ))
               

            }
             

        </div>
    )
}


