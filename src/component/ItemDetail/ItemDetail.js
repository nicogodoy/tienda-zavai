import React from 'react'
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Card, ListGroup } from 'bootstrap-4-react';
import imgSrc from '../../Asses/Red_High_Heel_Pumps.png';


export default function ItemDetail(itemDetail) {
    return (

        <div>
        <Card style={{ width: '15rem' , display:'flex' }}>
        <Card.Image src={imgSrc} top/>
        <Card.Body>
          <Card.Title>Villanas Store</Card.Title>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Descripcion:{itemDetail.description}</ListGroup.Item>
          <ListGroup.Item>Precio:{itemDetail.precio}</ListGroup.Item>
          </ListGroup>
        </Card>
      
        </div>
    )
}
