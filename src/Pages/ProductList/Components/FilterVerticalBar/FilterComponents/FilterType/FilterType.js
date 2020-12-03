import React, { Component } from "react";
import "./FilterType.scss";

class FilterType extends Component {
  render() {
    const { hideFilter, hideFilterImage, filterImage } = this.props;
    return (
      <div className="FilterType">
        <div onClick={() => hideFilter(1)} className="hideBar">
          <span>제품 타입</span>
          <div
            className={hideFilterImage[1] ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div className={hideFilterImage[1] ? "hideKindsOfType" : "kindsOfType"}>
          <a>뮬</a>
          <a>샌들&뮬</a>
          <a>스니커즈</a>
        </div>
      </div>
    );
  }
}

export default FilterType;
