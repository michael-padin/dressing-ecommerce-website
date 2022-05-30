
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Navbar, Footer} from "./components";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
