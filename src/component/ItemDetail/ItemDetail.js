import React from "react";
import { useState, useEffect,useContext } from "react";
import { Card, Button, ButtonGroup } from "bootstrap-4-react";
import imgSrc from "../../Asses/img/Red_High_Heel_Pumps.png";
import { useHistory } from "react-router-dom";
import ItemCountContainers from "../itemCountContainers/itemCountContainers";
//import {CartContex} from '../Context/cartContex'
import {CartContext} from '../Context/CartContext'


export default function ItemDetail( {product}) {
  console.log(product)
  const {addCart}=useContext(CartContext)
  console.log(addCart)
  
  const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);

  const [showFinishBuy, setshowFinishBuy] = useState();
   
  function addProduct(){
    console.log("se ejecuto addP")
    addCart(product)
    history.push("/cart")
  }

  useEffect(() => {
    setQuantityProductsAdded(quantityProductsAdded);
  }, []);

  let history = useHistory();
  return (
    <div style={{ display: "flex", flexDireccion: "column" }}>
      <div className="infoProduct" key={product.id }></div>
      <Card style={{ width: "14rem" }}>
        <Card.Header>Zapatos</Card.Header>
        <Card.Image src={imgSrc} />
        <Card.Body>
          <Card.Title>Caracas</Card.Title>
          <Card.Subtitle mb="1" text="muted">
            Media caña
          </Card.Subtitle>
          <Card.Text>descripcion:{product.description}</Card.Text>
          <Card.Text>Precio:{product.precio}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link>
            {/* ITEM DELCONTADOR*/}
            <ItemCountContainers
              product={product}
              setQuantityProductsAdded={setQuantityProductsAdded}
              setshowFinishBuy={setshowFinishBuy}
            />

            {/* ITEM TERMINAR COMPRA */}
            {showFinishBuy ? (
              <ButtonGroup size="lg" className="mb-2">
                <Button  onClick={() =>addProduct()}>
                  Finalizar compra
                </Button>
              </ButtonGroup>
            ) : null}
          </Card.Link>
          
        </Card.Footer>
      </Card>
    </div>
  );
}
