
import React from 'react'
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Card, ListGroup } from 'bootstrap-4-react';
import imgSrc from '../../Asses/Red_High_Heel_Pumps.png';


export default function ItemDetail(itemDetail) {
    return (

        <div>
          <Card style={{ width: '14rem' }}>
        <Card.Header>Zapatos</Card.Header>
        <Card.Image src={imgSrc} />
        <Card.Body>
          <Card.Title>Caracas</Card.Title>
          <Card.Subtitle mb="1" text="muted">Media caña</Card.Subtitle>
          <Card.Text>descripcion:{itemDetail.description}</Card.Text>
          <Card.Text>Precio:{itemDetail.precio}.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Footer>
      </Card>
        
      
        </div>
    )
}


