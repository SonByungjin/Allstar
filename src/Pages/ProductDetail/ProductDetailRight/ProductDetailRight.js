import React from "react";
import "./ProductDetailRight.scss";
import ProductRightSummary from "./ProductRightSummary";
import ProductRightColor from "./ProductRightColor";
import ProductRightSize from "./ProductRightSize";
import ProductRightEtc from "./ProductRightEtc";

class ProductDetailRight extends React.Component {
  render() {
    const { productId, productInfo, showMiniCart } = this.props;

    return (
      <section className="ProductDetailRight">
        <ProductRightSummary productInfo={productInfo} />
        <ProductRightColor productId={productId} productInfo={productInfo} />
        <ProductRightSize
          productId={productId}
          productInfo={productInfo}
          showMiniCart={showMiniCart}
        />
        <ProductRightEtc />
      </section>
    );
  }
}

export default ProductDetailRight;
