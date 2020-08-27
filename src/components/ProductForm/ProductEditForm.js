import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import "./ProductForm.css";

class ProductEditForm extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <form className="Form" onSubmit={value.updateProductHandler}>
            <h1>Item Edit Form</h1>
            <p>
              Item Name{" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="text"
                name="name"
                value={value.editItem.name}
                contentEditable="true"
                required
              />
            </p>
            <p>
              EAN{" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="text"
                name="ean"
                value={value.editItem.ean}
                required
              />
            </p>
            <p>
              Type{" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="text"
                name="type"
                value={value.editItem.type}
                required
              />
            </p>
            <p>
              Weight, kg{" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="number"
                name="weight"
                value={value.editItem.weight}
                required
              />
            </p>
            <p>
              Color{" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="text"
                name="color"
                value={value.editItem.color}
                required
              />
            </p>

            <p>
              Quantity{" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="number"
                name="quantity"
                value={value.editItem.quantity}
                required
              />
            </p>
            <p>
              Price, ${" "}
              <input
                onChange={value.updateHandler}
                className="Form_input"
                type="number"
                name="price"
                value={value.editItem.price}
                required
              />
            </p>

            <p>
              Description{" "}
              <textarea
                onChange={value.updateHandler}
                className="Form_info"
                type="text"
                name="info"
                value={value.editItem.info}
                required
              />
            </p>

            <div>
              <button className="Btn" type="submit">
                UPDATE
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

export default ProductEditForm;
