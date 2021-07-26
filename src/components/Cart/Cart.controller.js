import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { showCartProducts, hideCartProducts } from "./Cart.actions";

class CartController extends Component {
  render() {
    return (
      <Cart
        onOpenCart={this.props.openCart}
        isCartOpen={this.props.isCartOpen}
        onCloseCart={this.props.closeCart}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.show_products,
});
const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(showCartProducts()),
  closeCart: () => dispatch(hideCartProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartController);
