import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList/ProductList.js";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductEditForm from "./components/ProductForm/ProductEditForm";
import ProductDetails from "./components/ProductDetails/ProductDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>STOCK MANAGEMENT</h1>
        <Switch location={this.props.location}>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/{id}" component={ProductDetails} />
          <Route path="/products/create" component={ProductForm} />
          <Route path="/products/edit/{id}" component={ProductEditForm} />
          <Route component={ProductList} />
        </Switch>
      </div>
    );
  }
}

export default App;
