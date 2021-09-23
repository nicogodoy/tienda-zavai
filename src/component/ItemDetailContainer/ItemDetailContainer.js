import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItems, getItemFire } from "../../servicie/servicie";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  console.log(id);
  const [itemDetail, setItemDetail] = useState(false);

  const [detalle, setDetalle] = useState(false);

  useEffect(() => {
    
    getItems.then((data) => {
        console.log("se ejecuto get item")
        const[itemProduct ]= data.filter((product) => product.id == id);
        setItemDetail(itemProduct);
        console.log(itemProduct);
        setDetalle(true)
      });
    
  }, []);

  // setTimeout(() => {
  // },2000);
  //ItemDetail product={itemDetail}
  console.log(itemDetail);
  return (
    // <div>{detalle ? <ItemDetail product={itemDetail} /> : <h1>vacio</h1>}</div>
    <div>{<ItemDetail product={itemDetail}/>}</div>
  );
}
