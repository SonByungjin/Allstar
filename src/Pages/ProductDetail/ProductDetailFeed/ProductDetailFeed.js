import React from "react";
import ProductMainImg from "./ProductMainImg";
import ProductDetailImg from "./ProductDetailImg";
import ProductReview from "./ProductReview";
import ProductCommunity from "./ProductCommunity";
import ProductInfo from "./ProductInfo";
import "./ProductDetailFeed.scss";

class ProductDetailFeed extends React.Component {
  render() {
    const { productInfo } = this.props;
    return (
      <div className="ProductDetailFeed">
        <ProductMainImg
          productMainImg={productInfo.main_image}
          productSubImg={productInfo.sub_images}
        />
        <ProductDetailImg productInfo={productInfo} />
        <ProductReview />
        <ProductCommunity />
        <ProductInfo productInfo={productInfo} />
      </div>
    );
  }
}

export default ProductDetailFeed;
