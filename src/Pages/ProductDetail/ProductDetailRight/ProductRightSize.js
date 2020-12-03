import React from "react";
import SizeGuide from "../../../Components/SizeGuideModal/SizeGuide";
import SizeFind from "../../../Components/SizeGuideModal/SizeFind";
import { firstAPI, secondAPI } from "../../../Config";
import "./ProductRightSize.scss";
import { Link } from "react-router-dom";

class ProductRightSize extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogined: true,
      current: "",
      isSizeFindOpen: false,
      isSizeGuideOpen: false,
      quantity: 1,
      quantityOverFive: false,
      cartItems: [],
      cartItemsId: [],
    };
  }

  componentDidMount() {
    fetch(`${firstAPI}/orders/cart`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cartItems: res.cart_list,
        });
      });
    // sessionStorage.getItem("access_token")
    //   ? this.setState({ isLogined: true })
    //   : this.setState({ isLogined: false });
  }

  handleClick = (index) => {
    this.setState({ current: index });
  };

  openSizeFindModal = () => {
    this.setState({
      isSizeFindOpen: !this.state.isSizeFindOpen,
    });
  };

  openSizeGuideModal = () => {
    this.setState({
      isSizeGuideOpen: !this.state.isSizeGuideOpen,
    });
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
        quantityOverFive: false,
      });
    }
  };

  increaseQuantity = () => {
    if (this.state.quantity < 5) {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    } else {
      this.setState({ quantityOverFive: true });
    }
  };

  updateItems = () => {
    fetch(`${firstAPI}/orders/cart`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cartItems: res.cart_list,
        });
      });
  };

  addToCart = (id, quantity, size) => {
    const { cartItems } = this.state;
    const { showMiniCart } = this.props;

    console.log(cartItems);
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === Number(id) && cartItems[i].size == size) {
        fetch(`${firstAPI}/orders/cart`, {
          method: "PATCH",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            cart_id: cartItems[i].cart_id,
            quantity_change: +quantity,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.message === "MODIFIED") {
              console.log("success");
              showMiniCart();
              this.updateItems();
            } else {
              console.log(res.message);
            }
          });
        return;
      }
    }
    fetch(`${firstAPI}/orders/cart`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        product_id: id,
        quantity: quantity,
        size: size,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        showMiniCart();
        this.updateItems();
      });
  };

  render() {
    const { productId, productInfo } = this.props;

    return (
      <section className="ProductRightSize">
        <div className="first">
          <div className="sizeClick" onClick={this.openSizeFindModal}>
            사이즈가 고민되면 클릭하세요!
          </div>
          {this.state.isSizeFindOpen && (
            <SizeFind isSizeFindOpen={this.openSizeFindModal} />
          )}
          <span className="sizeGuideBtn" onClick={this.openSizeGuideModal}>
            사이즈 가이드
          </span>
          {this.state.isSizeGuideOpen && (
            <SizeGuide isSizeGuideOpen={this.openSizeGuideModal} />
          )}
        </div>
        <div className="second">
          <div className="size">
            {productInfo.size_list &&
              productInfo.size_list.map((size, index) => (
                <span
                  key={index}
                  className={
                    this.state.current === index ? "Focused" : "NotFocused"
                  }
                  onClick={() => {
                    this.handleClick(index);
                  }}
                >
                  {size}
                </span>
              ))}
          </div>
          <div className="quantity">
            <div className="quantityOne">
              <span className="quantitySelect">{this.state.quantity}</span>
              <button className="decrease" onClick={this.decreaseQuantity}>
                -
              </button>
              <button className="increase" onClick={this.increaseQuantity}>
                +
              </button>
            </div>
            {this.state.quantityOverFive && (
              <div className="quantityTwo">
                <span>5개 까지 구매가능 합니다</span>
              </div>
            )}
          </div>
        </div>
        <div className="third">
          {this.state.isLogined ? (
            <div className="isLogin">
              <span
                className="cart"
                onClick={() => {
                  this.addToCart(
                    productId,
                    this.state.quantity,
                    productInfo.size_list[this.state.current]
                  );
                }}
              >
                장바구니
              </span>
              <span className="buy">바로구매</span>
              <span className="heart">
                <p>♥</p>
              </span>
            </div>
          ) : (
            <div className="isLogout">
              <Link to="/Login">
                <div className="loginBtn">로그인</div>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ProductRightSize;
