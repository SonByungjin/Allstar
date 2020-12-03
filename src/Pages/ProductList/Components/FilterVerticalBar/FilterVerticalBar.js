import React, { Component } from "react";
import {
  productColor,
  productSize,
  productSilluet,
  filterImage,
} from "./filterContents";
import FilterGender from "./FilterComponents/FilterGender/FilterGender";
import FilterType from "./FilterComponents/FilterType/FilterType";
import "./FilterVerticalBar.scss";
import FilterColor from "./FilterComponents/FilterColor/FilterColor";
import FilterSize from "./FilterComponents/FilterSize/FilterSize";
import FilterSilluet from "./FilterComponents/FilterSilluet/FilterSilluet";
import FilterSection from "./FilterComponents/FilterSection/FilterSection";
import FilterChildren from "./FilterComponents/FilterChildren/FilterChildren"

export class FilterVerticalBar extends Component {
  constructor() {
    super();
    this.state = {
      productColor: [],
      productSize: [],
      productSilluet: [],
      // hideFilterImage: [false, false, false, false, false],
    };
  }

  componentDidMount() {
    this.setState({
      productColor: productColor,
      productSize: productSize,
      productSilluet: productSilluet,
    });
  }

  // hideFilter = (e) => {
  //   this.setState({
  //     hideFilterImage: [
  //       ...this.state.hideFilterImage.slice(0, e),
  //       !this.state.hideFilterImage[e],
  //       ...this.state.hideFilterImage.slice(e + 1),
  //     ],
  //   });
  // };

  render() {
    const {
      productColor,
      productSize,
      productSilluet,
      // hideFilterImage,
    } = this.state;
    const { filteringColor, filteringSize, filteringSilluet, filtering } = this.props;
    return (
      <div className="FilterVerticalBar">
        {/* <FilterGender
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
        />
        <FilterType
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
        />
        <FilterColor
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
          productColor={productColor}
          filteringColor={(Color) => filteringColor(Color)}
        />
        <FilterSize
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
          productSize={productSize}
          filteringSize={(size) => filteringSize(size)}
        />
        <FilterSilluet
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
          productSilluet={productSilluet}
          filteringSilluet={(silluetEngName) =>
            filteringSilluet(silluetEngName)
          }
        /> */}
        <FilterSection>
          <FilterChildren
            content={["남성", "여성"]}
            filtering={filtering}
          />
        </ FilterSection>

        <FilterSection>
          <FilterChildren
            content={["뮬", "샌들", "스니커즈"]}
            filtering={filtering}
          />
        </ FilterSection>

        <FilterSection>
          <FilterChildren
            content={productColor}
            filtering={filtering}
          />
        </ FilterSection>

        <FilterSection>
          <FilterChildren
            content={productSize}
            filtering={filtering}
          />
        </ FilterSection>

        <FilterSection>
          <FilterChildren
            content={productSilluet}
            filtering={filtering}
          />
        </ FilterSection>
      </div>
    );
  }
}

export default FilterVerticalBar;
