import React, { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    // console.log(category)
    this.getProducts(category.id);
  };

  getProducts = categoryId => {

    let url ="http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId="+ categoryId;      
    }


    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
