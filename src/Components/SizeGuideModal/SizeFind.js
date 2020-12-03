import React from "react";
import "./SizeFind.scss";

class SizeFind extends React.Component {
  render() {
    return (
      <div className="SizeFind">
        <div className="sizeFindContainer">
          <div className="top">
            <img
              alt="SizeFindOne"
              src="https://cfdist.thefitapi.com/shoes_b2b_images/service_images/converse_logo_s4.png"
            />
            <span className="sizeCloseBtn" onClick={this.props.isSizeFindOpen}>
              X
            </span>
          </div>
          <div className="containerTwo">
            <div className="first">
              <div>
                <img
                  alt="SizeFindTwo"
                  src="https://cfdist.thefitapi.com/shoes_b2b_images/service_images/step0_foot.png"
                />
                <span>나의 발 사이즈로 알맞는 사이즈 찾아보기</span>
              </div>
            </div>
            <div className="second">
              <div>
                <img
                  alt="SizeFindThree"
                  src="https://cfdist.thefitapi.com/shoes_b2b_images/service_images/step0_shoes.png"
                />
                <span>기존에 신던 신발로 알맞는 사이즈 찾아보기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeFind;
