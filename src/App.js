import React from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";


class App extends React.Component {
  state = { cart: [] };

  addProduct = (product) => {
    this.setState((prevState) => {
      return { cart: [product, ...prevState.cart] };
    });
  };

  render() {
    const { cart } = this.state;
    let subTotal = 0;
    cart.forEach((product) => (subTotal += product.price));

    let tax = 0;
    cart.forEach((product) => (tax += product.price * 0.05));

    const total = subTotal + tax;

    return (
      <div>
        <ProductList addProduct={this.addProduct} />
        <Cart
          cart={this.state.cart}
          subTotal={subTotal || 0}
          tax={tax || 0}
          total={total || 0}
        />
        <Checkout total={total || 0} />
      </div>
    );
  }
}

export default App;
