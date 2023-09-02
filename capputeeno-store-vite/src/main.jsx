import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ListProductsContext from './contexts/ListProductsContext.jsx'
import ProductsContext from './contexts/ProductsContext.jsx'
import CartContextItem from './contexts/CartContextItem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListProductsContext>
      <ProductsContext>
        <CartContextItem>
          <App />
        </CartContextItem>
      </ProductsContext>
    </ListProductsContext>
  </React.StrictMode>,
)
