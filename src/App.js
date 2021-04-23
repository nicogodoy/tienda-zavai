import React from 'react'
import './App.css';
import Nav from './component/navbar/nav/nav'
import ItemListContainers from './component/container/itemListContainers'
import ItemCount from './component/itemCount/itemCount'
import {browserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemListContainer from './component/itemListContainer/itemListContainer'
function App() {
  return (
    

     <div className="App">
      
      <Nav/>
      <ItemListContainers greeting="Villanas store le da la bienvenida! :)"/>
      <div className="items">

      <ItemCount stock={5} initial={1} className="items" />
      
      
      </div>
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
