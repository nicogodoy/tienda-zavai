import React,{useState, useEffect }  from 'react';
import Item from '../item/item'
import itemList from "../itemList/itemList";
import { Card, ListGroup } from 'bootstrap-4-react';


export default function ItemListContainer(){
   
  const [item, setItems] = useState([]);

    useEffect(() => {
     
     itemList.map(xIteLis =>(console.log(xIteLis)));
     setItems(itemList);
    },[]);


    return(
        <div>
            {
                item.map(xItem =>(
                <Item title={xItem.title}/> 
                ))

            }
             

        </div>
    )
}


