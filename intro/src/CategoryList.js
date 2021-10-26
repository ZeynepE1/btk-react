import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

export default class CategoryList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       categories: [
  //         { categoryId: 1, categoryName: "Beverages" },
  //         { categoryId: 2, categoryName: "Condiments" },
  //       ],
  //     };
  //   }

  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={category.categoryName === this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
