import React, { createContext, useState } from 'react'

export const ListProductContext = createContext();

const ListProductsContext = ({ children }) => {
  const [typeOfProduct, setTypeOfProduct] = useState('');
  const [typeOfSort, setTypeOfSort] = useState('sortField: "created_at", sortOrder: "DESC"');

  const query = `query {
    allProducts (${typeOfProduct}, ${typeOfSort}) {
      id,
      name,
      price_in_cents,
      image_url,
    }
  }`

  return (
    <ListProductContext.Provider value={{ typeOfProduct, setTypeOfProduct, query, typeOfSort, setTypeOfSort }}>
      {children}
    </ListProductContext.Provider>
  )
};

export default ListProductsContext;