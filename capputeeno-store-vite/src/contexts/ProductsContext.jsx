'use client';
import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

const ProductsContext = ({ children }) => {
  const [data, setData] = useState('Teste');

  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsContext;