import React, { createContext, useState } from 'react';

export const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0); // Initial quantity value
  const [open, setOpen] = useState(false)

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity, open, setOpen }}>
      {children}
    </QuantityContext.Provider>
  );
};