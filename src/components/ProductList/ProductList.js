import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Header from "../Header/Header";
import { ProductConsumer } from "../../context";
import "./ProductList.css";

class ProductList extends Component {


  render() {
    let prodClass = [];

    const products = (
      <div>
        <ProductConsumer>
          {(value) => {
            return value.products.map((prod) => {
              const {
                id,
                name,
                ean,
                type,
                weight,
                color,
                quantity,
                price,
              } = prod;
              return (
                <Product
                  key={id}
                  id={id}
                  name={name}
                  ean={ean}
                  type={type}
                  weight={weight}
                  color={color}
                  quantity={quantity}
                  price={price}
                  style={prodClass}
                />
              );
            });
          }}
        </ProductConsumer>
      </div>
    );

    if (products.quantity === 0) {
      prodClass.push("red");
    }

    return (
      <div>
        <div className="New_stock">
          <Link to="/products/create">
            <button>NEW ITEM</button>
          </Link>
        </div>

        <div className="Products_table">
          <Header />
          <div className="Row">{products}</div>
        </div>
      </div>
    );
  }
}

export default ProductList;
