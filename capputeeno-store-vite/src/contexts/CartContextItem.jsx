import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartContextItem = ({ children }) => {
  const [storageItem, setStorageItem] = useState('teste');

  return (
    <CartContext.Provider value={{ storageItem, setStorageItem }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextItem;