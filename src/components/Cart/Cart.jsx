import React, { useRef } from "react";
import {
  Button,
  Badge,
  Menu,
  MenuItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";

const Cart = ({ onOpenCart, isCartOpen, onCloseCart }) => {
  const cartElemRef = useRef();

  return (
    <>
      <Button
        ref={cartElemRef}
        aria-controls="cart-menu"
        aria-haspopup="true"
        onClick={onOpenCart}
        color="inherit"
      >
        <Badge badgeContent={0} color="secondary">
          <ShoppingCart /> {isCartOpen}
        </Badge>
      </Button>
      <Menu
        id="cart-menu"
        anchorEl={cartElemRef.current}
        keepMounted
        open={isCartOpen}
        onClose={onCloseCart}
      >
        <MenuItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" secondary="Secondary text" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </MenuItem>
        <MenuItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" secondary="Secondary text" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Cart;
