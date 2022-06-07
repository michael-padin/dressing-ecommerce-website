
import { BrowserRouter, Routes, Route,  Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import {Navbar, Footer} from "./components";

// pages
import Home from "./pages/Home.jsx";
import { CartPage, CheckoutPage, FormPage, ProductPage, ProductsPage, SuccessPage } from "./pages/index.js";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route element = {(<><Navbar/> <Outlet/> <Footer/></>)}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={user ? <CheckoutPage /> : <Navigate replace to ="/" /> } />
        </Route>
        <Route path="/success" element={user ? <SuccessPage /> : <Navigate replace to ="/" /> } />
        <Route path={`/form`} element={user ?  <Navigate replace to="/" /> : <FormPage/>}/>
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
