import React, { useState, useEffect } from "react";
import ItemCount from '../itemCount/itemCount'


export default function ItemCountContainer({product, setQuantityProductsAdded, setshowFinishBuy}) {
  
  const [item, setItem] = useState(1);
  //Cantidad de item que pusiste en el contador

  const [stock, setStock] = useState(5);
  // Ese useState de arriba debería hacer un llamado a la base de datos para saber la cantidad de stock que hay. Pero en la consigna nos piden que solo que tenga 5.

  const [itemAdd, setItemAdd] = useState(false);
  // Seteamos el item y su cantidad

  useEffect( ()=> {
    console.log('Se actualizó el componente de la botonera')
  }, [item])

  // Función onADD que lo que setea es los items y los pasa a ItemDetail
  function onAdd(quantity) {
    console.log(`Se ejecutó función onAdd`)
    setItemAdd(true)
    setQuantityProductsAdded( { productId: product.id, productPrice: product.price, quantity: item} )
    setshowFinishBuy(true);
  }

  // Función que suma +1 en el botón
  function onIncrement() {
      if (stock > item) {
          setItem(item + 1);
      } else {
          alert('No tenemos stock')
      }
  }

  // Función que suma -1 en el botón
  function onDecrement() {
    if (item > 1) {
      setItem(item - 1);
    } else {
      alert("Se necesita de algun producto para agregar al carrito");
    }
  }

  return (
    <ItemCount
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onAdd={onAdd}
      itemQuantity={item}
      itemAdded={setItemAdd}
    />
  );
}
