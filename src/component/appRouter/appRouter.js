import React from 'react'
import '../../App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../cart/cart'
import ItemListContainers from '../itemListContainer/itemListContainer'
import ItemListContainer from '../itemListContainer/itemListContainer'
import Navb from '../navbar/navb/navb'
import '../Context/CartContext'
import FormsPage from '../forms/forms';
import Principal from '../Pricipal/principal'

function App() {
  return (
    <BrowserRouter>
      <Navb/>
      <Switch>
      <Route exact path="/descuentos">
      <Principal/>    
       </Route>
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
      <Route path="/forms">
        <FormsPage  />
      </Route>
  
      </Switch>
      
    </BrowserRouter>


  );
}

export default App;


