import React from 'react'
import './App.css';
import Navb from './component/navbar/navb/navb'
import ItemListContainers from './component/container/itemListContainers'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import ItemListContainer from './component/itemListContainer/itemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import {CartContex} from '../../../Tienda Zavai/my-app/src/component/Context/cartContex'
import Cart from './component/cart/cart'

function App() {
  return (
    <BrowserRouter>
      <Navb/>
      <CartContex>
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
      <Route path="/cart">
        <Cart/>
      </Route>
      </Switch>
      </CartContex>
    </BrowserRouter>


  );
}

export default App;
