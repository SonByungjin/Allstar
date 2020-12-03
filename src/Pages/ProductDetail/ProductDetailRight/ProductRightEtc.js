import React from "react";
import "./ProductRightEtc.scss";

class ProductRightEtc extends React.Component {
  render() {
    return (
      <section className="ProductRightEtc">
        <div className="shareIcons">
          <ul>
            {shareImgs.map((icon, index) => {
              return (
                <li key={index}>
                  <img alt={`share_icons_${index}`} src={icon} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="freeShippingBtn">
          <p>5만원이상 구매시 무료배송</p>
        </div>
        <div className="shippingInfo">
          <p>배송정보</p>
          <p>교환반품</p>
        </div>
      </section>
    );
  }
}

export default ProductRightEtc;

const shareImgs = [
  "/images/productDetail/facebook_icon.png",
  "/images/productDetail/kakao_icon.png",
  "/images/productDetail/line_icon.png",
];
