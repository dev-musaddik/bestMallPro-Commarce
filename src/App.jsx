import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Use React.lazy to load components lazily
const Home = lazy(() => import('./Pages/Home/Home'));
const SingleProduct = lazy(() => import('./Components/SingleProduct/SingleProduct'));
const ShoppingCart = lazy(() => import('./Components/ShoppingCart/ShoppingCart'));
const Products_Card_Page = lazy(() => import('./Pages/Products_Card_Page/Products_Card_Page'));
const FormComponent = lazy(() => import('./Components/ComfromOder/DeliveryMethod'));

import MyContext, { MyProvider } from './ContextApi/myContext';

import "react-toastify/dist/ReactToastify.css";
import CircleLoader from './Components/Loader/Loader';
import NavbarCss from './Components/Navbar/navbar/NavbarCss';
import ResponsiveDropdownMenu from './Components/Navbar/navbar2/test';

const App = () => {
  return (
    <div>
      <MyProvider>
        <BrowserRouter>
          <Suspense fallback={<CircleLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:key" element={<SingleProduct />} />
              <Route path="/products/:category" element={<Products_Card_Page />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/shopping-conform" element={<FormComponent />} />
              <Route path="/n" element={<ResponsiveDropdownMenu />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
};

export default App;
