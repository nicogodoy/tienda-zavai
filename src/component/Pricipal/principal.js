import React, { useState } from 'react';
import {
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
   CarouselCaption
 } from 'react-bootstrap';

 import FotoUno from '../../Asses/img/zandalias.png'
 import FotoDos from '../../Asses/img/zapas.png'
 import FotoTres from '../../Asses/img/parzapas.png'

export default function Principal(){
return(

 <div className="container mt-5">
   <div className="col-12 ">
     <div className="col-md-12">
<Carousel className="carousel" w="100">
  <Carousel.Item>
    <img
      className="d-block w-100  "
      src={FotoUno}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>foto uno</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={FotoDos}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={FotoTres}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>
)
}

// <div className="w-100" >
// <div className="col-8 v-100">
//   <div className="col-md-12">
// <Carousel className="carousel">
// <Carousel.Item>
//  <img
//    className="d-block w-100 "
//    src={FotoUno}
//    alt="First slide"
//  />
//  <Carousel.Caption>
//    <h3>foto uno</h3>
//    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//  </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//  <img
//    className="d-block w-100 "
//    src={FotoDos}
//    alt="Second slide"
//  />

//  <Carousel.Caption>
//    <h3>Second slide label</h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//  </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//  <img
//    className="d-block w-100"
//    src={FotoTres}
//    alt="Third slide"
//  />

//  <Carousel.Caption>
//    <h3>Third slide label</h3>
//    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//  </Carousel.Caption>
// </Carousel.Item>
// </Carousel>
// </div>
// </div>
// </div>