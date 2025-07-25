import React from "react";
import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ category, products, headingText }) => {
  // Filter products based on the selected category
  const filteredProducts = category
    ? products?.data?.filter((item) => item.category.id === category)
    : products?.data;

  return (
    <div className="products-container">
      {!filteredProducts ? null : (
        <>
          <div className="sec-heading">{headingText}</div>
          <div className="products">
            {filteredProducts.map((item) => (
              <Product key={item.id} id={item.id} data={item.attributes} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

  

export default Products;
