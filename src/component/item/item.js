import React  from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';
import imgSrc from '../../AssesImg/Red_High_Heel_Pumps.png';
import ItemCount from '../itemCount/itemCount'
import '../item/item.css'

export default function ShowItem(title){
  
    return (
      
     
      <Card style={{ width: '15rem' , display:'flex' }}>
        <Card.Image src={imgSrc} top/>
        <Card.Body>
          <Card.Title>Villanas Store</Card.Title>
          <Card.Text>
            Zapatos
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Nombre:{title.title}</ListGroup.Item>
          <ListGroup.Item>Descripcion:{title.description}</ListGroup.Item>
          <ListGroup.Item>Precio:{title.precio}</ListGroup.Item>
          <ListGroup.Item>Color:{title.color}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#"> <ItemCount stock={5} initial={1} className="items" /></Card.Link>
          <Card.Link href="#">Ver mas info</Card.Link>
        </Card.Body>
      </Card>
      
      
    )
  
}