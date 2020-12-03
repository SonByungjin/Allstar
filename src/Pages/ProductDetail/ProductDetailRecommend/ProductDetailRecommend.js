import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetailRecommend.scss";

class ProductDetailRecommend extends React.Component {
  render() {
    const { productInfo } = this.props;

    return (
      <section className="ProductDetailRecommend">
        <h1 className="title">추천상품</h1>
        <div className="ProductRecommend">
          <ul>
            {productInfo.recommended_products?.map((product, index) => {
              return (
                <li key={index}>
                  <a href={`/productDetail/${product.id}`}>
                    <div className="picContainer">
                      <img
                        className="picBeforeHover"
                        alt="product before hover"
                        src={product.main_image}
                      />
                      <img
                        className="picAfterHover"
                        alt="product after hover"
                        src={product.hover_image}
                      />
                      <span
                        className={
                          product.isBestSeller
                            ? "isBestSeller"
                            : "isNotBestSeller"
                        }
                      >
                        BEST SELLER
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductDetailRecommend;
