import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import Cart from './components/Cart'

import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <div>
      <CartProvider>
        <Main />
        <Cart />
      </CartProvider>
    </div>
  )
}

export default App