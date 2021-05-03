import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import { getItems } from '../../servicie/servicie';
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      //  itemList.map(xIteLis =>(console.log(xIteLis)));
      //  setItems(itemList);
      fetch(
        "https://raw.githubusercontent.com/nicogodoy/tienda-zavai/main/src/Asses/data/data.json"
      )
        .then((response) => response.json())
        .then((data) => {
          const productId = data.filter((product) => product.id === id);
          setItemDetail(productId);
        });
    }, 2000);
  }, [id]);

  console.log(itemDetail);
  return (
    <div
      style={{
        display: "flex",
        flexDireccion: "row",
        justifyContent: "space-between",
      }}
    >
      {itemDetail.map((xItem) => (
        <ItemDetail
          style={{ display: "flex" }}
          id={itemDetail}
          description={xItem.description}
          precio={xItem.precio}
        />
      ))}
    </div>
  );
}

//  useEffect(() => {
//      setTimeout(()=>{
//          getItems
//          .then(data=>console.log("Se ejecuto con exito la promesa"))
//          .then(data=>setItemDetail(data))
//      },2000)

//  }, [])
