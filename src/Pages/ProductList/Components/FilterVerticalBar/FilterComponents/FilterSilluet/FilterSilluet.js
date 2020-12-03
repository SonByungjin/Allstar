import React, { Component } from "react";
import "./FilterSilluet.scss";

class FilterSilluet extends Component {
  constructor() {
    super();
    this.state = {
      selectSilluet: [false, false, false, false, false],
    };
  }

  handleSilluet = (idx, silluetEngName) => {
    this.setState({
      selectSilluet: [
        ...this.state.selectSilluet.slice(0, idx),
        !this.state.selectSilluet[idx],
        ...this.state.selectSilluet.slice(idx + 1),
      ],
    });
    this.props.filteringSilluet(silluetEngName);
  };

  render() {
    const {
      hideFilter,
      hideFilterImage,
      filterImage,
      productSilluet,
    } = this.props;
    const { selectSilluet } = this.state;

    return (
      <div className="FilterSilluet">
        <div onClick={() => hideFilter(4)} className="hideBar">
          <span>실루엣</span>
          <div
            className={hideFilterImage[4] ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div
          className={hideFilterImage[4] ? "hideTypeOfSilluet" : "typeOfSilluet"}
        >
          {productSilluet.map((silluet, idx) => (
            <div
              key={idx}
              className={
                selectSilluet[idx] ? "selectSilluetSquare" : "silluetSquare"
              }
              onClick={() => this.handleSilluet(idx, silluet.EngName)}
            >
              {silluet.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterSilluet;
