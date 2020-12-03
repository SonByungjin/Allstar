import React, { Component } from "react";
import DashBoard from "./DashBoard";
import SearchBar from "./SearchBar";
import { firstAPI } from "../../Config";
import "./ActiveSearchBar.scss";

class ActiveSearchBar extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      userInput: "",
    };
  }

  componentDidMount() {
    fetch(`${firstAPI}/products/search`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productData: res.products,
        });
      });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      userInput: value,
    });
  };

  render() {
    const { productData, userInput } = this.state;
    const { onSearchBar } = this.props;
    const { handleChange } = this;
    const productNames = productData.map((product) => {
      return product.name;
    });
    const filteredItems = productData.filter((item) => {
      return item.name.indexOf(userInput) !== -1;
    });
    const filteredItemsNames = filteredItems.map((item) => {
      return item.name;
    });
    const hybridAreaCondition =
      userInput.length >= 2 && productNames.join().includes(userInput);

    return (
      <div className={onSearchBar ? "activeSearchBar" : "inactiveSearchBar"}>
        <div className="container">
          <DashBoard />
          <SearchBar
            userInput={userInput}
            handleChange={handleChange}
            filteredItems={filteredItems}
            filteredItemsNames={filteredItemsNames}
            hybridAreaCondition={hybridAreaCondition}
          />
        </div>
      </div>
    );
  }
}

export default ActiveSearchBar;
