import React, { Component } from "react";
import { filterImage } from "../../filterContents"
import "./FilterSection.scss";

class FilterSection extends Component {
  constructor() {
    super();
    this.state = {
      hideFilterImage: false,
    }
  }

  hideFilter = () => {
    this.setState({
      hideFilterImage: !this.state.hideFilterImage
    });
  };

  render() {
    const { hideFilterImage } = this.state
    return (
      <div className="FilterSection">
        <div onClick={this.hideFilter}
          className="hideBar">
          <span>구분</span>
          <div
            className={hideFilterImage ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div
          className={hideFilterImage ? "hideKindsOfGender" : "kindsOfGender"}
        >
          {/* <a>남성</a>
          <a>여성</a> */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default FilterSection;
