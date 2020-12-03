import React from "react";
import { firstAPI, secondAPI } from "../../../Config";
import "./ProductRightColor.scss";

class ProductRightColor extends React.Component {
  render() {
    const { productId, productInfo } = this.props;

    return (
      <section className="ProductRightColor">
        <div className="ProductColorInfo">
          <div className="colorSection">
            <span className="colorSectionTitle">컬러</span>
            <span className="colorSectionProp">{productInfo?.color}</span>
          </div>
          <div className="styleSection">
            <span className="styleSectionTitle">스타일 : </span>
            <span className="styleSectionProp">
              {productInfo?.serial_number}
            </span>
          </div>
        </div>
        <div className="ProductColorPic">
          <ul>
            {productInfo?.related_products &&
              productInfo?.related_products.map((product, index) => {
                return (
                  <a href={`${firstAPI}/productDetail/${product.id}`}>
                    <li key={index}>
                      <img
                        alt="productSubImg"
                        src={product.main_image}
                        className={
                          productId == product.id
                            ? "productSubImg selected"
                            : "productSubImg"
                        }
                      ></img>
                    </li>
                  </a>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductRightColor;
