import React, { Component } from "react";
import "./FilterSize.scss";

class FilterSize extends Component {
  constructor() {
    super();
    this.state = {
      selectSize: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  }
  handleSize = (idx, size) => {
    this.setState({
      selectSize: [
        ...this.state.selectSize.slice(0, idx),
        !this.state.selectSize[idx],
        ...this.state.selectSize.slice(idx + 1),
      ],
    });
    this.props.filteringSize(size);
  };

  render() {
    const {
      hideFilter,
      hideFilterImage,
      filterImage,
      productSize,
    } = this.props;
    const { selectSize } = this.state;

    return (
      <div className="FilterSize">
        <div onClick={() => hideFilter(3)} className="hideBar">
          <span>사이즈</span>
          <div
            className={hideFilterImage[3] ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div className={hideFilterImage[3] ? "hideTypeOfSize" : "typeOfSize"}>
          {productSize.map((size, idx) => (
            <div
              key={idx}
              className={selectSize[idx] ? "selectSizeSquare" : "sizeSquare"}
              onClick={() => this.handleSize(idx, size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterSize;
