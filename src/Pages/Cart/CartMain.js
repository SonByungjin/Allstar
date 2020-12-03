import React from "react";
import CartMainItem from "./CartMainItem";
import ProductDetailRecommend from "../ProductDetail/ProductDetailRecommend/ProductDetailRecommend";
import "./CartMain.scss";

class CartMain extends React.Component {
  render() {
    const {
      cartItems,
      recommendItems,
      increaseQuantity,
      decreaseQuantity,
      handleOneDelete,
      handleAllDelete,
    } = this.props;

    return (
      <section className="cartMain">
        <div className="cartMainTitle">
          <h1>{`장바구니 (${cartItems.length})`}</h1>
        </div>
        <div className="cartMainMessage">
          <span>
            신규 회원 가입 시, 즉시 사용 가능한 1만원 할인 코드 발급해드립니다.
            (*5만원 이상 결제 시)
          </span>
        </div>
        <section className="cartMainItems">
          <div className="cartMainItemsContainer">
            {cartItems.map((item, index) => {
              return (
                <CartMainItem
                  key={index}
                  cartItem={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleOneDelete={handleOneDelete}
                />
              );
            })}
          </div>
          <div className="cartMainItemsDeleteContainer">
            <button
              className="cartMainItemsDeleteBtn"
              onClick={handleAllDelete}
            >
              장바구니 비우기
            </button>
          </div>
        </section>
        <section className="cartProductRecommend">
          <ProductDetailRecommend productInfo={recommendItems} />
        </section>
      </section>
    );
  }
}

export default CartMain;
