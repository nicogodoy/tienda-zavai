import React from "react";
import { Card, ListGroup, Button } from "bootstrap-4-react";
import imgSrc from "../../Asses/img/Red_High_Heel_Pumps.png";
import "../item/item.css";
import { useHistory } from "react-router-dom";
import ItemCountContainers from '../itemCountContainers/itemCountContainers'

export default function ShowItem(array) {
  console.log(array)
  console.log(array.id)
  let history = useHistory();
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Image src={imgSrc} top />
      <Card.Body>
        <Card.Title>Villanas Store</Card.Title>
        {/* <Card.Text>Zapatos</Card.Text> */}
      </Card.Body>
      <ListGroup flush>
        <ListGroup.Item>{array.title}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => history.push(`/item/${array.id}`)}
          >
            Informacion
          </Button>
          {/* <ItemCountContainers array={array}/> */}
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
