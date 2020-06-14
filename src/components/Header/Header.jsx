import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Badge,
} from "@material-ui/core";
import { useDispatch, connect } from "react-redux";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { showCart } from "./Header.actions";

const Header = () => {
  //const dispatch = useDispatch();

  const handleOnClick = () => {
    //dispatch(showCart());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item spacing={10}>
            <Typography variant="h6" component="h1">
              Toy Mart
            </Typography>
          </Grid>
          <Grid item spacing={2}>
            <Button color="inherit" onClick={handleOnClick}>
              <Badge badgeContent={0} color="secondary">
                <ShoppingCart />
              </Badge>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
