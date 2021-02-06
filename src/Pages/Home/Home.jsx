import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.controller";
import { fetchProducts } from "../../actions/products.actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box>
      <ProductsGrid />
    </Box>
  );
};

export default Home;
