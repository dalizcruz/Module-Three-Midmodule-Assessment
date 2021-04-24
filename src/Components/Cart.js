import React from "react";

const Cart = ({cart, subTotal, tax, total}) => {  //subTotal, tax, total
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => {
          const { name, price, id } = product;
          return (
            <li key={id}>
              {name}: ${price.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
      <h3>Tax: ${tax.toFixed(2)}</h3>
      <h3>Total: ${total.toFixed(2)}</h3>
    </section>
  );
};

export default Cart;
