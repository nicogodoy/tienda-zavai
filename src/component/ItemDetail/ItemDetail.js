import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, ButtonGroup } from "bootstrap-4-react";
import imgSrc from "../../Asses/img/Red_High_Heel_Pumps.png";
import { useHistory } from "react-router-dom";
import ItemCountContainers from "../itemCountContainers/itemCountContainers";

export default function ItemDetail({ product,id,description,precio,onDecrement,onIncrement,itemQuantity }) {


  
  const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);

  const [showFinishBuy, setshowFinishBuy] = useState();

  

  useEffect(() => {
    setQuantityProductsAdded(quantityProductsAdded);
  }, []);

  let history = useHistory();
  return (
    <div style={{ display: "flex", flexDireccion: "column" }}>
      <div className="infoProduct" key={id }></div>
      <Card style={{ width: "14rem" }}>
        <Card.Header>Zapatos</Card.Header>
        <Card.Image src={imgSrc} />
        <Card.Body>
          <Card.Title>Caracas</Card.Title>
          <Card.Subtitle mb="1" text="muted">
            Media caña
          </Card.Subtitle>
          <Card.Text>descripcion:{description}</Card.Text>
          <Card.Text>Precio:{precio}</Card.Text>
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
                <Button onClick={() => history.push("/cart")}>
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
