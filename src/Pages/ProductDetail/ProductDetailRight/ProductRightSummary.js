import React from "react";
import "./ProductRightSummary.scss";

class ProductRightSummary extends React.Component {
  render() {
    const { productInfo } = this.props;

    return (
      <section className="ProductRightSummary">
        <h1 className="productName">{productInfo.series_name}</h1>
        <span
          className={
            !productInfo.discount_rate
              ? "productPrice"
              : "productPrice underline"
          }
        >
          {productInfo.price && productInfo.price.toLocaleString()} 원
        </span>
        <span className="productDiscountPrice">
          {productInfo.discount_rate &&
            `${
              productInfo.price * ((100 - productInfo.discount_rate) / 100)
            } 원`}{" "}
        </span>
        <span className="discountRate">
          {productInfo.discount_rate && `${productInfo.discount_rate} %`}
        </span>
        <p className="productGender">{productInfo.sex}</p>
        <div className="productDetailsBox">
          <span className="productDetails">
            {productInfo?.simple_description}
          </span>
          <span className="showMore">더보기</span>
        </div>
        <p className="productReview">☆☆☆☆☆</p>
      </section>
    );
  }
}

export default ProductRightSummary;
