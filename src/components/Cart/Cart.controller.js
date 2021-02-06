import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import {
  showCartProducts,
  hideCartProducts,
  removeProductFromCart,
} from "./Cart.actions";

class CartController extends Component {
  render() {
    return (
      <Cart
        onOpenCart={this.props.openCart}
        isCartOpen={this.props.isCartOpen}
        onCloseCart={this.props.closeCart}
        onRemoveProductFromCart={this.props.removeProductFromCart}
        products={this.props.products}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.show_products,
  products: state.cart.products,
});
const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(showCartProducts()),
  closeCart: () => dispatch(hideCartProducts()),
  removeProductFromCart: (productId) =>
    dispatch(removeProductFromCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartController);
