import React from "react";
import {
  Typography,
  Box,
  Grid,
  GridList,
  GridListTile,
} from "@material-ui/core";

const Home = () => {
  return (
    <Box>
      <Typography variant="h1" align="center">
        Home Page
      </Typography>
      <GridList cellHeight={160} cols={3}>
        <GridListTile cols={1}>
          <Typography variant="body1" align="center">
            Home Page
          </Typography>
        </GridListTile>
        <GridListTile cols={1}>Item 2</GridListTile>
        <GridListTile cols={1}>Item 3</GridListTile>
        <GridListTile cols={1}>Item 4</GridListTile>
        <GridListTile cols={1}>Item 5</GridListTile>
        <GridListTile cols={1}>Item 6</GridListTile>
      </GridList>
    </Box>
  );
};

export default Home;
