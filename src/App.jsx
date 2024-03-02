import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Products_Card_Page from './Pages/Products_Card_Page/Products_Card_Page';
import { MyProvider } from './ContextApi/myContext';

const App = () => {
  return (
    <div>
      <MyProvider>
        <BrowserRouter>
          <Routes>
            {/* Use 'element' instead of 'Component' */}
            <Route path="/" element={<Home />} />
            <Route path="/product/:key" element={<SingleProduct/>} />
            <Route path="/products/:category" element={<Products_Card_Page/>} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
};

export default App;
