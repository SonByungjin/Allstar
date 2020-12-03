import React, { Component } from "react";
import ProductDetailRight from "../../ProductDetail/ProductDetailRight/ProductDetailRight";
import "./WishLIstModal.scss";

class WishLIstModal extends Component {
  render() {
    const {
      idx,
      mainImg,
      productModal,
      productModalToggle,
      productInfo,
    } = this.props;
    return (
      <>
        <div
          className={
            productModal === idx ? "WishLIstModal" : "closeWishLIstModal"
          }
        >
          <div className="productPopup">
            <div className="productModal">
              <div className="productImgContainer">
                <img
                  alt="heartImg"
                  className="heartImg"
                  src="/images/productList/heart_fill.png"
                />
                <img alt="productImg" className="productImg" src={mainImg} />
              </div>
              <div className="productInfo">
                <ProductDetailRight productInfo={productInfo} />
              </div>
              <div className="closeModal">
                <span onClick={productModalToggle}>x</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WishLIstModal;
