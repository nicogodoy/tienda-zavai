import React from 'react'
import './App.css';
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
