import React from 'react'
import { useState, useEffect } from "react";
import { Card, ListGroup,Button } from 'bootstrap-4-react';
import imgSrc from '../../Asses/img/Red_High_Heel_Pumps.png';
import {useHistory} from 'react-router-dom'
import ItemCountContainer from '../itemCount/itemCount'


export default function ItemDetail({product}) {

  //const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);

  //const [showFinishBuy, setshowFinishBuy] = useState(false);

  // useEffect(() => {
  //   setQuantityProductsAdded(quantityProductsAdded);
  // }, []);

  let history=useHistory()
    return (

        <div style={{display:'flex',flexDireccion:'column'}}>
          <Card style={{ width: '14rem' }}>
        <Card.Header>Zapatos</Card.Header>
        <Card.Image src={imgSrc} />
        <Card.Body>
          <Card.Title>Caracas</Card.Title>
          <Card.Subtitle mb="1" text="muted">Media caña</Card.Subtitle>
          <Card.Text>descripcion:{product.description}</Card.Text>
          <Card.Text>Precio:{product.precio}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#" onClick={()=>history.push(`/`)}>Volver al home</Card.Link>
        </Card.Footer>
      </Card>
        
       

      
    </div>
  )
}


