import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import './navb.css';
//import CardWidget from "../cardWidget/cartWidget";
import CartWidget from "../cardWidget/cartWidget";
import {useHistory} from 'react-router-dom'
//import CartWidget from '../../cartWidget/cartWidget'


 export default function Navb(){
   let history=useHistory();
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
                     <Nav.Link dropdownToggle>Productos</Nav.Link>
                     <Dropdown.Menu>
                       <Dropdown.Item onClick={()=>history.push("/category/zapatos")}>Zapatos</Dropdown.Item>
                       <Dropdown.Item onClick={()=>history.push("/category/pantuflas")}> Pantuflas</Dropdown.Item>
                     
                    </Dropdown.Menu>
                    
                   </Nav.Item>
                   <Nav.Item dropdown>
                   
                    
                    
                   </Nav.Item>
                 
                 </Navbar.Nav>
                
                <Navbar.Brand className="cartWidget">
                      <CartWidget />
                  </Navbar.Brand>
      
               </Collapse>
        
             </Navbar>
   )


 } 


