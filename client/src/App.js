
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import {Navbar, Footer} from "./components";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Form from "./pages/Form/Form.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route element = {(<><Navbar/> <Outlet/> <Footer/></>)}>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        </Route>
        <Route path="/form" element={<Form/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
