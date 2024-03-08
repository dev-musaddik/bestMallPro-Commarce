// MyContext.jsx

import React, { createContext, useEffect, useState } from 'react';
import productsData from ".././fakeData";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState(productsData);
  const [productQuantityManager, setProductQuantityManager] = useState(null);
  const [productCartItems, setProductCartItems] = useState([]);
  const [cardItems,setCardItems]=useState([])
  const [isLoading, setIsLoading] = useState(true);

  // Load data from local storage on component mount
  useEffect(() => {
    console.log('Component mounted');
    const storedData = localStorage.getItem('productQuantityManager');
    console.log('Stored data:', storedData);

    if (storedData) {
      setProductQuantityManager(JSON.parse(storedData));
    } else {
      setProductQuantityManager([]); // Set default value if no data in local storage
    }
  }, []);

  const contextValue = {
    data,
    setData,
    productQuantityManager,
    setProductQuantityManager,
    productCartItems,
    setProductCartItems,
    cardItems,
    setCardItems,
    isLoading,
    setIsLoading
  };

  if (productQuantityManager === null) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
