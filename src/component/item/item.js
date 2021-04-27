import React  from 'react';
import { Card, ListGroup, Button } from 'bootstrap-4-react';
import imgSrc from '../../Asses/Red_High_Heel_Pumps.png';
import ItemCount from '../itemCount/itemCount'
import '../item/item.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export default function ShowItem(array){
  
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
          <ListGroup.Item>Nombre:{array.title}</ListGroup.Item>
        </ListGroup>
        <Card.Body >
          <Card.Link style={{display:'flex',flexDireccion:'row'}} href="#" > <ItemCount stock={5} initial={1} className="items" /></Card.Link>
          
          {/* <Card.Link  href="#">ir a home</Card.Link> */}
          <Card.Link  style={{display:'flex',alignItems: 'center',justifyContent:'center'}}>
          <Button style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={ItemDetail}>
               informacion
          </Button>
          </Card.Link>
        </Card.Body>
      </Card>
      
      
    )
  
}