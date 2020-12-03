import React, { Component } from "react";
import "./FilterHorizontalBar.scss";

class FilterHorizontalBar extends Component {
  render() {
    const { hideFilterValid, handleFilter } = this.props;
    return (
      <div className="FilterHorizontalBar">
        <div className="filterContainer">
          <div
            className={hideFilterValid ? "hideFilterVaild" : "hideFilter"}
            onClick={handleFilter}
          >
            <span>필터 숨기기</span>
            <img alt="filterImg" src="/images/productList/filter.png" />
          </div>
          <div className="numberingProduct">
            <span>총 {this.props.cnt}개의 상품</span>
          </div>
          <div className="arrayProduct">
            <select name="arrayProduct">
              <option value="">신상품순</option>
              <option value="popular">인기상품순</option>
              <option value="highPrice">높은가격순</option>
              <option value="lowPrice">낮은가격순</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterHorizontalBar;
