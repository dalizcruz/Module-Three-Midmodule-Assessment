import React from "react";
import productData from "../data/productData";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";

const ProductList = ({ addProduct }) => {
  const products = productData.map((product) => {
    return (
      <ProductListItem
        product={product}
        addProduct={addProduct}
        key={product.id}
      />
    );
  });
  return (
    <section className="Products">
      <h2>My Garage Sale</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default ProductList;
