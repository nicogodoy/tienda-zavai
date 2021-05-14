import React from 'react'
import '../../App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../cart/cart'
import ItemListContainers from '../itemListContainer/itemListContainer'
import ItemListContainer from '../itemListContainer/itemListContainer'
import Navb from '../navbar/navb/navb'
import '../Context/cartContex'

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
      <Route path="/cart">
        <Cart/>
      </Route>
      </Switch>
      
    </BrowserRouter>


  );
}

export default App;


//import Navb from '../component/navbar/navb/navb'
//import ItemListContainers from '../component/container/itemListContainers'
//import ItemListContainer from '../component/itemListContainer/itemListContainer'
//import ItemDetailContainer from '../component/ItemDetailContainer/ItemDetailContainer'
//import {CartContex} from '../../../Tienda Zavai/my-app/src/component/Context/cartContex'
//import Cart from '../component/cart/cart'