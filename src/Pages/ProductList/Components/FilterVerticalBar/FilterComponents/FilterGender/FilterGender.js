import React, { Component } from "react";
import "./FilterGender.scss";

class FilterGender extends Component {
  render() {
    const { hideFilterImage, filterImage, hideFilter } = this.props;

    return (
      <div className="FilterGender">
        <div onClick={() => hideFilter(0)} className="hideBar">
          <span>구분</span>
          <div
            className={hideFilterImage[0] ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div
          className={hideFilterImage[0] ? "hideKindsOfGender" : "kindsOfGender"}
        >
          <a>남성</a>
          <a>여성</a>
        </div>
      </div>
    );
  }
}

export default FilterGender;
