// import React from 'react'
// //import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
// import { Card, ListGroup } from 'bootstrap-4-react';
// import imgSrc from '../../Asses/Red_High_Heel_Pumps.png';


// export default function ItemDetail(itemDetail) {
//     return (

//         <div>
//         <Card style={{ width: '15rem' , display:'flex' }}>
//         <Card.Image src={imgSrc} top/>
//         <Card.Body>
//           <Card.Title>Villanas Store</Card.Title>
//         </Card.Body>
//         <ListGroup flush>
//           <ListGroup.Item>Descripcion:{itemDetail.description}</ListGroup.Item>
//           <ListGroup.Item>Precio:{itemDetail.precio}</ListGroup.Item>
//           </ListGroup>
//         </Card>
      
//         </div>
//     )
// }


import React from 'react'
import { Card } from 'bootstrap-4-react';
import ImgSrc from '../../Asses/Red_High_Heel_Pumps.png'

export default function ItemDetail(itemDetail) {
  return (
    <div>
      <Card style={{ width: '14rem' }}>
        <Card.Header>Zapatos</Card.Header>
        <Card.Image src={ImgSrc} />
        <Card.Body>
          <Card.Title>Caracas</Card.Title>
          <Card.Subtitle mb="1" text="muted">bota media caña</Card.Subtitle>
          <Card.Text>descripcion:{itemDetail.description}.</Card.Text>
          <Card.Text>descripcion:{itemDetail.precio}.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Footer>
      </Card>
    </div>
  )
}
