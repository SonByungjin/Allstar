import React from "react";
import "./ProductInfo.scss";

class ProductInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      isClicked: true,
    };
  }

  handleClick = (e) => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    const { productInfo } = this.props;
    const { isClicked } = this.state;

    return (
      <section className="ProductInfo">
        <div className="ProductInfoTitle">
          <h1>상품정보</h1>
          <span className="expandToggle" onClick={this.handleClick}>
            <img
              className="minusIcon"
              alt=""
              src={
                isClicked
                  ? "/images/productDetail/minus_icon.png"
                  : "/images/productDetail/plus_icon.png"
              }
            />
          </span>
        </div>
        <section className="ProductInfoDetail">
          <div className={isClicked ? "active" : "deactive"}>
            <dl className="productInfoTable">
              <dt>Model</dt>
              <dd>{productInfo.serial_number}</dd>
              <dt>제품소재</dt>
              <dd>{productInfo.material}</dd>
              <dt>색상</dt>
              <dd>{productInfo.color}</dd>
              <dt>치수</dt>
              <dd>{productInfo.size_range}</dd>
              <dt>제조자</dt>
              <dd>{productInfo.manufacturer}</dd>
              <dt>제조국</dt>
              <dd>{productInfo.country}</dd>
              <dt>취급시 주의사항</dt>
              <dd>{productInfo.caution}</dd>
              <dt>퓸질보증기준</dt>
              <dd>{productInfo.assurance}</dd>
              <dt>A/S 책임자와 전화번호</dt>
              <dd>{productInfo.as_center}</dd>
              <dt>제조연월</dt>
              <dd>{productInfo.manufacture_date}</dd>
            </dl>
          </div>
        </section>
      </section>
    );
  }
}

export default ProductInfo;
