import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import ProductCard from "../ProductCard/ProductCard.controller";

const renderGridTiles = (products = []) => {
  return products.map((product) => (
    <GridListTile cols={1} key={product.id}>
      <ProductCard product={product} />
    </GridListTile>
  ));
};

export default function ProductsGrid({ products = [] }) {
  return products.length > 0 ? (
    <GridList cellHeight="auto" cols={3}>
      {renderGridTiles(products)}
    </GridList>
  ) : null;
}
