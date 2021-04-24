import React from "react";
import productData from "../data/productData"

class Checkout extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };

  handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
      e.preventDefault();
     const { total } = this.props;
      const { firstName, lastName, email, creditCard, zipCode } = this.state;
      if(!firstName || !lastName || !email || !creditCard || !zipCode){
        window.alert("Input is not valid")
      } else if (creditCard.length !== 16){
          window.alert("Credit card number is not valid")
      } else if(zipCode.length !==5){
          window.alert("Zip code is not valid")
      } else{
          window.alert(`Purchase complete\n Your total is $${total.toFixed(2)}`)
      }
  }

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <section>
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />

          <label htmlFor="creditCard">Credit Card</label>
          <input
            id="creditCard"
            name="creditCard"
            onChange={this.handleChange}
            value={creditCard}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            onChange={this.handleChange}
            value={zipCode}
          />

          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
