import React from "react";
import ProductCommunity from "./ProductCommunity";
import "./ProductDetailImg.scss";

class ProductDetailImg extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosed: true,
    };
  }

  handleClick = () => {
    const { isClosed } = this.state;
    this.setState({
      isClosed: !isClosed,
    });
  };

  render() {
    const { productInfo } = this.props;

    return (
      <div className="ProductDetailImg">
        <section className="ProductDetailImgInfo">
          <h1>{productInfo.series_name}</h1>
          <p>{productInfo.detail_description}</p>
          <p>{productInfo.features}</p>
        </section>
        <section className="ProductDetailImgPic">
          <img
            className={this.state.isClosed ? "imgClosed" : "imgOpened"}
            alt="Product DetailedImg"
            src={productInfo.series_image}
          />
        </section>
        <span className="showMore" onClick={this.handleClick}>
          {this.state.isClosed ? "더보기 +" : "닫기 -"}
        </span>
      </div>
    );
  }
}

export default ProductDetailImg;
