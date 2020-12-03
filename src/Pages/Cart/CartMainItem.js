import React from "react";
import "./CartMainItem.scss";

class CartMainItem extends React.Component {
  render() {
    const {
      cartItem,
      increaseQuantity,
      decreaseQuantity,
      handleOneDelete,
    } = this.props;

    return (
      <section className="cartMainItem">
        <div className="cartMainItemPic">
          <img alt="cartMainItemPic" src={cartItem.main_image}></img>
        </div>
        <div className="cartMainItemInfoContainer">
          <div className="cartMainItemInfo">
            <div className="cartMainItemName">{cartItem.series_name}</div>
            <div className="cartMainItemDetailContainer">
              <span>
                {cartItem.color} / {cartItem.size}
              </span>
              <span>수량 : {cartItem.quantity}</span>
            </div>
            <div className="cartMainItemDetailContainerTwo">
              <span className="wishListDelete">❤ 위시리스트 삭제</span>
              <span className="buyLater">나중에 구매하기</span>
            </div>
          </div>
          <div className="cartMainItemPrice">
            <div className="cartMainItemPriceContainerOne">
              <span
                className={
                  !cartItem.discount_rate
                    ? "originalPrice"
                    : "originalPrice underline"
                }
              >
                {cartItem.price.toLocaleString()} 원
              </span>
              {cartItem.discount_rate && (
                <span className="discountPrice">
                  {(
                    cartItem.price *
                    ((100 - cartItem.discount_rate) / 100)
                  ).toLocaleString()}{" "}
                  원
                </span>
              )}
              {cartItem.discount_rate && (
                <span className="discountRatio">{cartItem.discount_rate}%</span>
              )}
            </div>
            <div className="cartMainItemPriceContainerTwo">
              <div className="quantityOne">
                <span className="quantitySelect">{cartItem.quantity}</span>
                <button
                  className="decrease"
                  onClick={() => decreaseQuantity(cartItem.cart_id)}
                >
                  -
                </button>
                <button
                  className="increase"
                  onClick={() => increaseQuantity(cartItem.cart_id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="cartMainItemPriceContainerThree">
              <span className="optionChange">옵션변경</span>
              <span
                className="delete"
                onClick={() => handleOneDelete(cartItem.cart_id)}
              >
                삭제
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CartMainItem;
