import React from 'react'
import './App.css';
import Navb from './component/navbar/navb/navb'
import ItemListContainers from './component/container/itemListContainers'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import ItemListContainer from './component/itemListContainer/itemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter>
      <Navb/>
      <Switch>
      <Route exact path="/">
      <ItemListContainers/>
      </Route>
       <Route  path="/category/:categoryId">
      <ItemListContainer/>
      </Route>
      <Route path="/item/:id">
      <ItemDetailContainer />
      </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
