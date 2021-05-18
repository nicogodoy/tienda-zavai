import React, { useState, useEffect } from "react";
import Item from "../item/item";
import { useParams } from "react-router-dom";
import { getItems, getItemFire} from "../../servicie/servicie";

export default function ItemListContainer() {
  const [item, setItems] = useState([]);
  const { categoryId } = useParams();
  
  console.log(categoryId);

  // useEffect(() => {
  //   setTimeout(() => {
  //     getItems.then((data) => {
  //       const productCategory = data.filter(
  //         (product) => product.categoryId === categoryId
  //       );
  //       setItems(productCategory);
  //     });
  //   }, 1000);
  // }, [categoryId]);


  useEffect(() => {
    setTimeout(() => {
      getItemFire().then((data) => {
        const productCategory = data.filter((product) => product.categoryId === categoryId);
        console.log(productCategory);
        setItems(productCategory);
      });
    },0);
  },[categoryId]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {item.map((xItem) => (
        <Item
          title={xItem.title}
          description={xItem.description}
          precio={xItem.precio}
          color={xItem.color}
          id={xItem.id}
          key={xItem.id}
          
        />
      ))}
    </div>
  );
}
// function useQuery() {
// return new URLSearchParams(useLocation().search);

//  let query= useQuery();
//   query.get("zapatos");

//  itemList.map(xIteLis =>(console.log(xIteLis)));
//  setItems(itemList);

// useEffect(() => {
//   setTimeout(() => {
//     fetch(
//       "https://raw.githubusercontent.com/nicogodoy/tienda-zavai/main/src/Asses/data/data.json"
//       )
//       .then((response) => response.json())
//       .then((data) =>{
//         const productCategory= data.filter(product=>product.categoryId===categoryId)
//         setItems(productCategory);
//       } )

//     }, 2000);
// }, [categoryId]);
