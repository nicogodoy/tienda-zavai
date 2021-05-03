
import React from 'react'
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Card, ListGroup } from 'bootstrap-4-react';
import imgSrc from '../../Asses/img/Red_High_Heel_Pumps.png';
import imgSrc2 from '../../Asses/img/4f959d92-9ea4-4063-a555-bd7d8429c8fe1-95acec417345eea51d16139932577090-480-0.png'


export default function ItemDetail({id,description,precio}) {
    return (

        <div style={{display:'flex',flexDireccion:'column'}}>
          <Card style={{ width: '14rem' }}>
        <Card.Header>Zapatos</Card.Header>
        <Card.Image src={imgSrc} />
        <Card.Body>
          <Card.Title>Caracas</Card.Title>
          <Card.Subtitle mb="1" text="muted">Media caña</Card.Subtitle>
          <Card.Text>descripcion:{description}</Card.Text>
          <Card.Text>Precio:{precio}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Volver</Card.Link>
        </Card.Footer>
      </Card>
        
      
        </div>
    )
}


