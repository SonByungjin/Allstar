import React from "react";
import "./ProductInfo.scss";

class ProductInfo extends React.Component {
  render() {
    const { bestSeller, newArrival, onlineOnly, name, price } = this.props;
    return (
      <>
        <div className="wrap">
          <img alt="heart" src="images/Main/heart.jpg" />
          <div className="productFeature">
            <div>{bestSeller}</div>
            <div>{newArrival}</div>
            <div>{onlineOnly}</div>
          </div>
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
        </div>
      </>
    );
  }
}

export default ProductInfo;
