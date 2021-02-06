import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import Cart from "../Cart/Cart.controller";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item spacing={10}>
            <Typography variant="h6" component="h1">
              Footwear Mart
            </Typography>
          </Grid>
          <Grid item spacing={2}>
            <Cart />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
