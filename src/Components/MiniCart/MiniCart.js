import React from "react";
import { Link } from "react-router-dom";
import { secondAPI } from "../../Config";
import iconData from "./icon";
import "./MiniCart.scss";

class MiniCart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cartItems: [],
      totalPrice: "",
      totalDiscountPrice: "",
    };
  }

  componentDidMount() {
    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let finalPrice = 0;

    fetch(`${secondAPI}/orders/cart`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.cart_list.length; i++) {
          totalPrice += res.cart_list[i].price * res.cart_list[i].quantity;
          totalDiscountPrice +=
            res.cart_list[i].price * (res.cart_list[i].discount_rate / 100);
          finalPrice = totalPrice - totalDiscountPrice;
        }
        this.setState({
          cartItems: res.cart_list,
          totalPrice: totalPrice.toLocaleString(),
          totalDiscountPrice: totalDiscountPrice.toLocaleString(),
          finalPrice: finalPrice.toLocaleString(),
        });
      });
  }

  handleOneDelete = (cartId) => {
    const { cartItems } = this.state;

    const action = window.confirm("정말로 지우시겠습니까?");
    if (action === true) {
      fetch(`${secondAPI}/orders/cart/${cartId}`, {
        method: "DELETE",
        headers: { Authorization: localStorage.getItem("token") },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState(
            {
              cartItems: cartItems.filter((cartItem) => {
                if (cartItem.cart_id === cartId) {
                  return false;
                }
                return true;
              }),
            },
            this.updateItems()
          );
        });
    } else {
      return;
    }
  };

  updateItems = () => {
    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let finalPrice = 0;
    fetch(`${secondAPI}/orders/cart`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.cart_list.length; i++) {
          totalPrice += res.cart_list[i].price * res.cart_list[i].quantity;
          totalDiscountPrice +=
            res.cart_list[i].price * (res.cart_list[i].discount_rate / 100);
          finalPrice = totalPrice - totalDiscountPrice;
        }
        this.setState({
          cartItems: res.cart_list,
          totalPrice: totalPrice.toLocaleString(),
          totalDiscountPrice: totalDiscountPrice.toLocaleString(),
          finalPrice: finalPrice.toLocaleString(),
        });
      });
  };

  render() {
    const { cartItems, totalCost, totalDiscountPrice, finalPrice } = this.state;
    const { showMiniCart } = this.props;

    return (
      <>
        <section className="miniCart">
          <div className="sectionMiniCart">
            <div className="miniCartDrop">
              <div className="miniCartHeader">
                <h2 className="headerItems">미니 장바구니</h2>
                <div className="headerActions">
                  <div className="miniCartLink">
                    <Link to="/cart">{iconData.cartIcon}</Link>
                  </div>
                  <button className="miniCartClose" onClick={showMiniCart}>
                    {iconData.closeIcon}
                  </button>
                </div>
              </div>
              <div className="productContainer">
                {cartItems?.map((product, index) => (
                  <div className="miniCartProduct" key={index}>
                    <div className="productMini">
                      <div
                        className="imgShoes"
                        title="루이 로페즈 프로 클래식 스웨이드"
                      >
                        <img
                          src={product.main_image}
                          alt="루이 로페즈 프로 클래식 스웨이드"
                        ></img>
                      </div>
                    </div>
                    <div className="productMiniDetails">
                      <div className="productMiniName">
                        <span>{product.series_name}</span>
                      </div>
                      <div className="productMiniOptions">
                        <span>{product.color}/</span>
                        <span>{product.size}</span>
                        <span> {product.quantity}개</span>
                      </div>
                      <div className="productMiniPrice">
                        {
                          <span
                            className={
                              !product.discount_rate
                                ? "miniCartPrice"
                                : "miniCartPrice underline"
                            }
                          >
                            {product.price}원{" "}
                          </span>
                        }
                        {product.discount_rate && (
                          <span className="productSale">
                            {product.price *
                              ((100 - product.discount_rate) / 100)}
                            원
                          </span>
                        )}
                        {product.discount_rate && (
                          <span className="discountRate">
                            {product.discount_rate}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      className="removeBtn"
                      onClick={() => this.handleOneDelete(product.cart_id)}
                    >
                      {iconData.closeIcon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="miniCartTotals">
                <div className="subTotals">
                  <div className="subTotalsCalc">
                    <span className="totalCost">총 상품금액</span>
                    <strong className="totalValue">
                      {finalPrice} 원
                      {/* {totalDiscountPrice.toLocaleString()} */}
                    </strong>
                  </div>
                  <div className="subTotalsMsg">
                    <div className="deliveryText">
                      배송비 확인 및 프로모션 코드 사용은 주문서에서 가능합니다.
                    </div>
                  </div>
                </div>
                <div className="miniCartActions">
                  <button className="shopNow">바로구매</button>
                  <button className="goToCart">
                    <Link to="/cart">장바구니로 이동</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MiniCart;
