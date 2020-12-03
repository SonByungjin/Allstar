import React from "react";
import "./ProductMainImg.scss";

class ProductMainImg extends React.Component {
  constructor() {
    super();
    this.state = {
      subImgNewArr: [],
    };
  }

  render() {
    const { productMainImg } = this.props;
    const { productSubImg } = this.props;

    return (
      <div className="ProductMainImg">
        <section className="mainImg">
          <img alt="Product Main img" src={productMainImg} />
        </section>
        <section className="mainImgMore">
          <div className="imgMoreContainer">
            <ul>
              {productSubImg &&
                productSubImg.map((product, index) => {
                  return (
                    <li key={index}>
                      {product.medium_type === "VIDEO" && (
                        <video autoPlay loop muted>
                          <source
                            src={product.medium_url}
                            type="video/mp4"
                          ></source>
                        </video>
                      )}
                      {product.medium_type === "IMAGE" && (
                        <img alt="productSubImg" src={product.medium_url} />
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductMainImg;
