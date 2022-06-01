import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Product } from "../../components";
import {
  fetchAsyncProducts,
  getAllProducts,
} from "../../features/productSlice.js";
import "./ProductsPage.scss";

const ProductsPage = () => {
  const location =useLocation();
  const pathname = location.pathname.split("/")[1];
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  
console.log(pathname);
  return (
    <div id="products" className="products">
      <div className="products-header-image">
        <div className="page-title-container">
          <div className="products-heading-container">
            <div className="products-info-container">
              <h2 className={`${pathname === 'products' && 'active'} page-title`}>PRODUCTS</h2>
              <ul>
                <li><Link to = "/" className={`${pathname === '' ? 'active' : 'link-items'} `}>Home</Link></li>
                <div className="separator"></div> 
                <li ><Link to = "/products" className={`${pathname === 'products' ? 'active' : 'link-items'} `}>products</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="products-container">
        {products?.map((product, idx) => (
          <Product product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
