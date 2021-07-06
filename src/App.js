//Feature 1
import data from "./data.json";
import React, { Component } from "react";
import Products from "./components/Products";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shoping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}

export default App;
