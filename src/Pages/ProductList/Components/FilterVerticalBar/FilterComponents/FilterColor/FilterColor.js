import React, { Component } from "react";
import "./FilterColor.scss";

class FilterColor extends Component {
  constructor() {
    super();
    this.state = {
      selectColor: {
        black: false,
        blue: false,
        green: false,
        navy: false,
        violet: false,
        brown: false,
        gray: false,
        kakhi: false,
        beige: false,
        red: false,
        orange: false,
        pink: false,
        yellow: false,
        white: false,
      },
    };
  }

  handleColor = (idx, Color) => {
    let updateSelectColor = this.state.selectColor;
    updateSelectColor[Color] = !updateSelectColor[Color];
    console.log(updateSelectColor);
    this.setState({
      selectColor: updateSelectColor,
    });
    this.props.filteringColor(Color);
  };

  render() {
    const {
      hideFilter,
      hideFilterImage,
      filterImage,
      productColor,
    } = this.props;
    const { selectColor } = this.state;

    return (
      <div className="FilterColor">
        <div onClick={() => hideFilter(2)} className="hideBar">
          <span>색상</span>
          <div
            className={hideFilterImage[2] ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div className={hideFilterImage[2] ? "hideTypeOfColor" : "typeOfColor"}>
          {productColor.map((Color, idx) => (
            <div
              key={idx}
              onClick={() => this.handleColor(idx, Color)}
              style={{ backgroundColor: Color }}
              className="colorCircle"
            >
              <div
                className={
                  selectColor[Color] ? "selectColorAfter" : "selectColorBefore"
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterColor;
