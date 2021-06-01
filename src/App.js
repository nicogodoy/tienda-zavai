import React from 'react'
import './App.css';
//import Navb from './component/navbar/navb/navb'
//import ItemListContainers from './component/container/itemListContainers'
//import {BrowserRouter , Route, Switch} from 'react-router-dom';
//import ItemListContainer from './component/itemListContainer/itemListContainer'
//import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
//import {CartContex} from '../../../Tienda Zavai/my-app/src/component/Context/cartContex'
//import Cart from './component/cart/cart'
import AppRouter from './component/appRouter/appRouter'
import CartContex from './component/Context/CartContext'


function App() {
  return (
     
    <CartContex>
      <AppRouter/>
    </CartContex>
    

  );
}

export default App;
