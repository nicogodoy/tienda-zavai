import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Form,
  Collapse,
} from "bootstrap-4-react";
import "./navb.css";
import CartWidget from "../cardWidget/cartWidget";
import Home from '../../Home/home' 
import { useHistory } from "react-router-dom";
//#99740f
//#c29006

export default function Navb() {
  let history = useHistory();
  return (

    <Navbar expand="xxl" light bg="dark" sticky = " top ">
      {/* <Navbar.Brand href="#">Villana Store</Navbar.Brand> */}
      <Navbar.Brand href="#"><Home/></Navbar.Brand>
      <Navbar.Toggler target="#navbarSupportedContent" />
      <Collapse navbar id="navbarSupportedContent">
        <Navbar.Nav mr="auto">
          <Nav.Item active>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item active>
            <Nav.Link href="#">Contacto</Nav.Link>
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
        
        <Navbar.Brand className="cartWidget">
          <CartWidget />
        </Navbar.Brand>
      </Collapse>
     
    </Navbar>
  );
}
