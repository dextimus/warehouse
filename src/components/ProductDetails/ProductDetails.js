import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, ean, color, weight, price, name, info } = value.detailProduct;
          return (
            <div>
              <div className="Name">
                <h2>{name}</h2>
              </div>
              <h3 className="Id">id: <span> {id}</span> </h3>
              <h3 className="Id">EAN: <span> {ean}</span> </h3>
              <h3 className="Id">Weight, kg: <span> {weight}</span> </h3>
              <h3 className="Id">Color: <span> {color}</span> </h3>
              <h3 className="Id">Price, $: <span> {price}</span></h3>
              <h3>Description: </h3>
              <div className="Info">{info}</div>
              <Link to="/products">
                <button className="Back">BACK TO PRODUCTS</button>
              </Link>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductDetails;
