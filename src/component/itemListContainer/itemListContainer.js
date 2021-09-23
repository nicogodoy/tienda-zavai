import React, { useState, useEffect } from "react";
import Item from "../item/item";
import { useParams } from "react-router-dom";
import { getItems, getItemFire} from "../../servicie/servicie";
import Home from '../Home/home' 

export default function ItemListContainer() {
  const [item, setItems] = useState([]);
  const { categoryId } = useParams();
  
  console.log(categoryId);

  useEffect(() => {
    setTimeout(() => {
      getItems.then((data) => {
        const productCategory = data.filter((product) => product.categoryId === categoryId);
        console.log(productCategory);
        setItems(productCategory);
      });
    },0);
  },[categoryId]);


  return (
  
    <div style={{ display: "flex", justifyContent: "space-between" }}>
     
      {/* <Home/> */}
      {item.map((xItem) => (
        <Item
          title={xItem.title}
          description={xItem.description}
          precio={xItem.precio}
          color={xItem.color}
          id={xItem.id}
          key={xItem.id}
          itemQuantity={xItem.itemQuantity}
          image={xItem.image}
          
        />
      ))}
    </div>
  );
}
