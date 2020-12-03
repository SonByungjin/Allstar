import React, { Component } from "react";
import "./FilterChildren.scss";

class FilterChildren extends Component {
  render() {
    const { content, filtering } = this.props;
    return (
      <div className="FilterChildren">
        {content.map((el) => {
          return (
            <div className="filterContent">
              {el}
            </div>
          )
        })}
      </div>
    )
  }
}

export default FilterChildren;
