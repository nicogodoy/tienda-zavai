import React from 'react'
import './App.css';
import Nav from './component/navbar/nav/nav'
import ItemListContainer from './component/container/itemListContainers'
import ItemCount from './component/itemCount/itemCount'

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer greeting="Villanas store le da la bienvenida! :)"/>
      <div className="items">

      <ItemCount stock={5} initial={1} className="items" />
      </div>
    </div>
  );
}

export default App;
