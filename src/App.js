import React from 'react'
import './App.css';
import Nav from './component/navbar/nav/nav'
import ItemListContainer from './component/container/itemListContainers'

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer greeting="Villanas store le da la bienvenida! :)"/>
    </div>
  );
}

export default App;
