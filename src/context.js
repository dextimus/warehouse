import React, { Component, createContext } from "react";
import uuid from "react-uuid";
import { warehouseProducts } from "./data";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: "",
    editItem: "",
    isDisabled: true,
    checked: true,
  };

  componentDidMount() {
    this.setProducts();
  }

  //copy products
  setProducts = () => {
    let products = [];
    warehouseProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products: products };
    });
  };

  // get item by id
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // show product details based on id
  productDetailHandler = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // get inputs for the new item
  changeHandler = (event) => {
    const value = event.target.value;
    const { newProductItem } = this.state;
    this.setState({
      newProductItem: { ...newProductItem, [event.target.name]: value },
    });
  };

  // add new item to the list
  addItemHandler = (
    event,
    name,
    ean,
    type,
    weight,
    color,
    quantity,
    price,
    info
  ) => {
    event.preventDefault();
    event.target.reset();
    const { newProductItem } = this.state;
    const products = [
      ...this.state.products,
      { ...newProductItem, id: uuid() },
    ];

    this.setState({ products, newProductItem: {} });
  };

  // remove product from the list
  removeProduct = (id) => {
    const products = this.state.products.filter((item) => item.id !== id);
    this.setState({ products: products });
  };

  // find item for editing
  findItemToEdit = (id) => {
    const product = this.getItem(id);
    this.setState({ editItem: product });
  };

  // update input fields
  updateHandler = (event) => {
    const value = event.target.value;
    this.setState({
      editItem: [{ [event.target.name]: value }],
    });
  };

  // submiting the form with updated fields
  updateProductHandler = (
    event,
    name,
    ean,
    type,
    weight,
    color,
    quantity,
    price,
    info,
    id
  ) => {
    event.preventDefault();
    event.target.reset();
    const products = this.state.products;
    const newItem = this.state.editItem;
    const newItemId = newItem.map((item) => item.id === id);
    const index = products.map((item) => item.id === id);
    if (newItemId === index) {
      products.splice(index, 1, newItem);
      this.setState({ products: products });
    }
  };

  // activate checkbox
  checkHandler = (id) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id)
        return { ...product, checked: !this.state.checked };
      return { ...product };
    });
    this.setState({ products: updatedProducts });
  };


  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          productDetailHandler: this.productDetailHandler,
          changeHandler: this.changeHandler,
          addItemHandler: this.addItemHandler,
          removeProduct: this.removeProduct,
          findItemToEdit: this.findItemToEdit,
          updateHandler: this.updateHandler,
          updateProductHandler: this.updateProductHandler,
          checkHandler: this.checkHandler,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
