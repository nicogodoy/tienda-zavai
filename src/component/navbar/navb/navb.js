import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Form,
  Collapse,
  
} from "bootstrap-4-react";
// import {Button} from 'react-bootstrap/Button';
// import { Navbar, Collapse, BDiv, BH5, BSpan } from 'bootstrap-4-react';
import "./navb.css";
import CartWidget from "../cardWidget/cartWidget";
import Home from '../../Home/home' 
import { useHistory } from "react-router-dom";


export default function Navb() {
  let history = useHistory();
  return (
    

    <Navbar style={{height:"80pt",flexDirection: "row-reverse"}}  expand="xxl" light bg="" sticky = " top ">
      {/* <Navbar.Brand href="#">Villana Store</Navbar.Brand> */}
     <CartWidget /> <Navbar.Brand href="/"><Home style={{height:"80pt"}}/></Navbar.Brand> 
      <Navbar.Toggler  target="#navbarSupportedContent"  />
     
      <Collapse navbar id="navbarSupportedContent">
      
        <Navbar.Nav mr="auto">
          <Nav.Item style={{height:"40pt"}}  active>
            <Nav.Link href="/Descuentos">Descuentos</Nav.Link>
          </Nav.Item>
          <Nav.Item active>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav.Item>
          <Nav.Item dropdown>
            <Nav.Link dropdownToggle>Productos</Nav.Link>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => history.push("/category/zapatos")}>
                Zapatos
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => history.push("/category/pantuflas")}
              >
                {" "}
                Pantuflas
              </Dropdown.Item>
              
            </Dropdown.Menu>
            
          </Nav.Item>
          <Nav.Item dropdown></Nav.Item>
          
        </Navbar.Nav>
        
        {/* <Navbar.Brand className="cartWidget">
          <CartWidget />
          
        </Navbar.Brand> */}
       
      </Collapse>
     
      
    </Navbar>
    
  );
}

