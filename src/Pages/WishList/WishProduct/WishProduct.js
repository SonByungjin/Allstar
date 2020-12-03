import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WishProduct.scss";

class WishProduct extends Component {
  render() {
    const {
      imgUrl,
      price,
      id,
      name,
      productModal,
      DeleteWishList,
    } = this.props;
    return (
      <div className="WishProduct">
        <div className="wishProductImg">
          <div onClick={DeleteWishList} className="heartImgContainer">
            <img alt="heartImg" src="/images/WishList/heart_fill.png" />
          </div>
          <Link to={`/productDetail/${id}`}>
            <img alt="mainWishImg" className="mainWishImg" src={imgUrl} />
          </Link>
        </div>
        <div className="wishProductInfo">
          <span>{name}</span>
          <span>{Number(price).toLocaleString("en")}원</span>
        </div>
        <div className="wishProductBuy">
          <span onClick={productModal}>장바구니 담기</span>
        </div>
      </div>
    );
  }
}

export default WishProduct;
