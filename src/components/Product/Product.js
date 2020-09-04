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
            <td className="Product-column_1">{name}</td>
            <td className="Product-column_2">{ean}</td>
            <td className="Product-column_3">{type}</td>
            <td className="Product-column_3">{weight}</td>
            <td className="Product-column_3">{color}</td>
            <td className="Product-column_3">{quantity}</td>
            <td className="Product-column_3">{price}</td>

            <ProductConsumer>
              {(value) => {
                return (
                  <>
                    <td className="Product-column_4">
                      <input
                        type="checkbox"
                        onChange={() => value.checkHandler(id)}
                        defaultChecked={value.checked}
                      />
                    </td>

                    <td className="Product-column_5">
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
