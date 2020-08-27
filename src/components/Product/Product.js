import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import "./Product.css";

class Product extends Component {
  render() {
    const { id, name, ean, type, weight, color, quantity, price } = this.props;
    return (
      <table>
        <tbody>
          <tr id="Product" className={this.props.style}>
            <td style={{ width: "200px", textAlign: "left" }}>{name}</td>
            <td style={{ width: "120px" }}>{ean}</td>
            <td style={{ width: "80px" }}>{type}</td>
            <td style={{ width: "80px" }}>{weight}</td>
            <td style={{ width: "80px" }}>{color}</td>
            <td style={{ width: "80px" }}>{quantity}</td>
            <td style={{ width: "80px" }}>{price}</td>

            <ProductConsumer>
              {(value) => {
                return (
                  <>
                    <td style={{ width: "60px" }}>
                      <input
                        type="checkbox"
                        onChange={() => value.checkHandler(id)}
                        defaultChecked={value.checked}
                      />
                    </td>

                    <td style={{ width: "250px" }}>
                      <Link to="/products/{id}">
                        {value.checked ? (
                          <button
                            className="View"
                            onClick={() => value.productDetailHandler(id)}
                          >
                            View
                          </button>
                        ) : (
                          value.isDisabled
                        )}
                      </Link>
                      <Link to="/products/edit/{id}">
                        {value.checked ? (
                          <button
                            className="Edit"
                            onClick={() => value.findItemToEdit(id)}
                          >
                            Edit
                          </button>
                        ) : (
                          value.isDisabled
                        )}
                      </Link>
                      {value.checked ? (
                        <button
                          className="Delete"
                          onClick={() => value.removeProduct(id)}
                        >
                          Delete
                        </button>
                      ) : (
                        value.isDisabled
                      )}
                    </td>
                  </>
                );
              }}
            </ProductConsumer>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Product;
