import React from "react";
import { Product } from "../../components";
import "./ProductsPage.scss";
const ProductsPage = () => {
  return (
    <div id = "products" className="products">
      <div className="products-header-image">
        <div className="page-title-container">
          <div className="products-heading-container">
            <div className="products-info-container">
              <h2 className="page-title">PRODUCTS</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="products-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductsPage;
