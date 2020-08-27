          import React, { Component } from "react";
          import { Link } from "react-router-dom";
          import { ProductConsumer } from "../../context";
          import "./ProductForm.css";

          class ProductForm extends Component {

            render() {
              return (
                <ProductConsumer>
                  {(value) => (
                    <form className="Form" onSubmit={value.addItemHandler}>
                      <h1>Item Input Form</h1>
                      <p>
                        Item Name{" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="text"
                          name="name"
                          value={value.products.name}
                          required
                        />
                      </p>
                      <p>
                        EAN{" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="text"
                          name="ean"
                          value={value.products.ean}
                          required
                        />
                      </p>
                      <p>
                        Type{" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="text"
                          name="type"
                          value={value.products.type}
                          required
                        />
                      </p>
                      <p>
                        Weight, kg{" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="number"
                          min="0"
                          step="0.1"
                          name="weight"
                          value={value.products.weight}
                          required
                        />
                      </p>
                      <p>
                        Color{" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="text"
                          name="color"
                          value={value.products.color}
                          required
                        />
                      </p>

                      <p>
                        Quantity{" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="number"
                          min="0"
                          step="1"
                          name="quantity"
                          value={value.products.quantity}
                          required
                        />
                      </p>
                      <p>
                        Price, ${" "}
                        <input
                          onChange={value.changeHandler}
                          className="Form_input"
                          type="number"
                          min="0"
                          step="0.1"
                          name="price"
                          value={value.products.price}
                          required
                        />
                      </p>

                      <p>
                        Description{" "}
                        <textarea
                          onChange={value.changeHandler}
                          className="Form_info"
                          type="text"
                          name="info"
                          value={value.products.info}
                          required
                        />
                      </p>

                      <div>
                        <button className="Btn" type="submit">
                          ADD
                        </button>
                        <Link to="/products">
                          <button className="Back">BACK TO PRODUCTS</button>
                        </Link>
                      </div>
                    </form>
                  )}
                </ProductConsumer>
              );
            }
          }

          export default ProductForm;
