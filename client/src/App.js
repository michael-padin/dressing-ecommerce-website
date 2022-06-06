
import "./App.css";
import { BrowserRouter, Routes, Route,  Outlet, Navigate } from "react-router-dom";
import {Navbar, Footer} from "./components";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Form from "./pages/Form/Form.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import { useSelector } from "react-redux";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  const {products} = useSelector((state) => state.cart);
  

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
        <Route element = {(<><Navbar/> <Outlet/> <Footer/></>)}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={user && Object.keys(products).length !== 0 ? <CheckoutPage /> : <Navigate replace to ="/" /> } />
        <Route path="/success" element={user && Object.keys(products).length !== 0 ? <CheckoutPage /> : <Navigate replace to ="/" /> } />
        </Route>
        <Route path={`/form`} element={user ?  <Navigate replace to="/" /> : <Form/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
