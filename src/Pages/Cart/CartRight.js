import React from "react";
import "./CartRight.scss";

class CartRight extends React.Component {
  render() {
    const { totalPrice, totalDiscountPrice, finalPrice } = this.props;

    return (
      <section className="CartRight">
        <section className="Order">
          <span>
            <h1>주문금액</h1>
          </span>
          <section className="OrderContainer">
            <div className="OrderPrice">
              <div className="OrderPriceItem">
                <span>상품금액</span>
                <span>{totalPrice.toLocaleString()} 원</span>
              </div>
              <div className="OrderPriceShip">
                <span>배송비</span>
                <span>원</span>
              </div>
              <div className="OrderPriceDiscount">
                <span>총 할인 금액</span>
                <span>{totalDiscountPrice.toLocaleString()} 원</span>
              </div>
              <div className="OrderPriceTotal">
                <span>총 결제 금액</span>
                <span>{finalPrice.toLocaleString()} 원</span>
              </div>
            </div>
            <div className="OrderBtnContainer">
              <div className="OrderBtn">주문하기</div>
            </div>
          </section>
        </section>
        <section className="PromoCodeContainer">
          <div className="PromoCodeMessage">
            고객님의 프로모션 코드를 지금 확인하세요!
          </div>
          <div className="PromoCode">
            <input className="PromoCodeInput" placeholder="코드입력"></input>
            <button className="PromoCodeApply">적용</button>
          </div>
        </section>
        <section className="OrderInfo">
          <div className="OrderInfoOne">
            <div>이용안내</div>
          </div>
          <div className="OrderInfoTwo">
            <div>배송비 안내</div>
          </div>
        </section>
      </section>
    );
  }
}

export default CartRight;
