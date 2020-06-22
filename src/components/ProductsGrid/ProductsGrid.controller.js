import React from "react";
import ProductsGrid from "./ProductsGrid";
import { useSelector } from "react-redux";

export default function ProductsGridController() {
  const products = useSelector((state) => state.products);
  return <ProductsGrid products={products} />;
}
