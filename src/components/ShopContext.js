import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function useShopContext() {
  return useContext(ShopContext);
}

export function ShopProvider({ children }) {
  const [amountItems, setAmountItems] = useState(0);
  const [books, setBooks] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);

  const contextValue = {
    amountItems,
    setAmountItems,
    books,
    setBooks,
    itemsCart,
    setItemsCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}