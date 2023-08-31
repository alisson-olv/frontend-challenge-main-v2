import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

const ProductsContext = ({ children }) => {
  const [typeOfProduct, setTypeOfProduct] = useState('');
  const [typeOfSort, setTypeOfSort] = useState('');

  const query = `query {
    allProducts ${typeOfProduct}{
      id,
      name,
      price_in_cents,
      image_url,
      description,
      category,
    }
  }`

  return (
    <ProductContext.Provider value={{ typeOfProduct, setTypeOfProduct, query, typeOfSort, setTypeOfSort }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsContext;