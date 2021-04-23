import React  from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';
import imgSrc from '../../AssesImg/Red_High_Heel_Pumps.png';

export default function ShowItem(title){
  
    return (
      <Card style={{ width: '12rem' }}>
        <Card.Image src={imgSrc} top/>
        <Card.Body>
          <Card.Title>Villanas Store</Card.Title>
          <Card.Text>
            Zapatos
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Nombre:{title}</ListGroup.Item>
          <ListGroup.Item>Descripcion:Cuero</ListGroup.Item>
          <ListGroup.Item>Precio:8000</ListGroup.Item>
          <ListGroup.Item>Color:Rojo</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Agregar</Card.Link>
          <Card.Link href="#">Ver mas info</Card.Link>
        </Card.Body>
      </Card>
    )
  
}