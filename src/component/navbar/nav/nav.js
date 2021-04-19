import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import './nav.css';
import CartWidget from "../cardWidget/cartWidget";

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
         
         <Navbar.Brand href="#">
                   Villana Store
               </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Zapatos</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Otoño/Invierno</Dropdown.Item>
                <Dropdown.Item>Primavera/Verano</Dropdown.Item>
               
              </Dropdown.Menu>
              
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Pantuflas</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Otoño/Invierno</Dropdown.Item>
                <Dropdown.Item>Primavera/Verano</Dropdown.Item>
                
               
              </Dropdown.Menu>
              
            </Nav.Item>
           
          </Navbar.Nav>
          
          <Navbar.Brand className="cartWidget">
                <CartWidget />
            </Navbar.Brand>

        </Collapse>
        
      </Navbar>
    )
  }
}