import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductsContext = ({ children }) => {
  const [productId, setProductId] = useState('');

  const query = `query {
    allProducts (filter:{id: "${productId}"}) {
      name,
    	category,
      description,
      image_url,
      price_in_cents
    }
  }`

  return (
    <ProductContext.Provider value={{ productId, setProductId, query }}>
      {children}
    </ProductContext.Provider>
  )
};

export default ProductsContext;