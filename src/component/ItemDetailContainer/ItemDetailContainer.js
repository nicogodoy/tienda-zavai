import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItems } from "../../servicie/servicie";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  console.log(id);
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getItems.then((data) => {
        const [itemProduct] = data.filter((product) => product.id == id);
        console.log(itemProduct);
        setItemDetail(itemProduct);
      });
    },0);
  },[]);

  console.log(itemDetail);
  return (
    <div>
      <ItemDetail product={itemDetail} />
    </div>
  );
}


