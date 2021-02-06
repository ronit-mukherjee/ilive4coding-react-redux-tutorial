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

const Cart = ({
  onOpenCart,
  isCartOpen,
  onCloseCart,
  products,
  onRemoveProductFromCart,
}) => {
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
        <Badge badgeContent={products.length} color="secondary">
          <ShoppingCart />
        </Badge>
      </Button>
      {products.length > 0 ? (
        <Menu
          id="cart-menu"
          anchorEl={cartElemRef.current}
          keepMounted
          open={isCartOpen}
          onClose={onCloseCart}
        >
          {products.map((product) => (
            <MenuItem key={product.id}>
              <ListItemAvatar>
                <Avatar variant="rounded" src={"https://" + product.imageUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={product.price.current.text}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onRemoveProductFromCart(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </MenuItem>
          ))}
        </Menu>
      ) : null}
    </>
  );
};

export default Cart;
