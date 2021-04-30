import React, { useState, useEffect } from "react";
import Item from "../item/item";
//import itemList from "../itemList/itemList";
import {useParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'


export default function ItemListContainer() {


  function useQuery() {
  return new URLSearchParams(useLocation().search);
}
 let query= useQuery();
  query.get("zapatos");


  const [item, setItems] = useState([]);
  const{categoryId}= useParams();
  console.log(categoryId)
  useEffect(() => {
    setTimeout(() => {
      //  itemList.map(xIteLis =>(console.log(xIteLis)));
      //  setItems(itemList);
      fetch(
        "https://raw.githubusercontent.com/nicogodoy/tienda-zavai/main/src/Asses/data/data.json"
      )
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, 2000);
  }, [categoryId]);

  return (
    <div style={{ display: "flex",justifyContent: "space-between" }}>
      {item.map((xItem) => (
        <Item
          title={xItem.title}
          description={xItem.description}
          precio={xItem.precio}
          color={xItem.color}
        />
      ))}
    </div>
  );
}
