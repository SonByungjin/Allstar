import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import WishProduct from "./WishProduct/WishProduct";
import ProfileImg from "./ProfileImg";
import WishLIstModal from "./WishLIstModal/WishLIstModal";
import { firstAPI, secondAPI } from "../../Config";
import "./WishList.scss";

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishlist: [],
      productModal: null,
      productInfo: [],
    };
  }

  componentDidMount() {
    this.getWishList();
  }

  getWishList = () => {
    fetch(
      // "/data/ProductList/wishlist.json",
      `${secondAPI}/account/wishlist`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          wishlist: res.wishlist,
        });
      });
  };

  productModalToggle = (product_id, idx) => {
    this.setState(
      {
        productModal: idx,
      },
      () => {
        this.modalData(product_id);
      }
    );
  };

  modalData = (product_id) => {
    fetch(`${firstAPI}/products/${product_id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.product_information) {
          this.setState({
            productInfo: res["product_information"][0],
          });
        }
      });
  };

  deleteWishList = (product_id) => {
    fetch(`${firstAPI}/account/wishlist`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: product_id,
      }),
    });
    setTimeout(this.getWishList(), 0);
  };

  AlertDeleteWishList = (product_id) => {
    window.confirm("위시리스트에서 정말 삭제하시겠습니까?") &&
      this.deleteWishList(product_id);
  };

  render() {
    const { wishlist, productModal, productInfo } = this.state;
    console.log(wishlist);
    return (
      <div className="WishList">
        <PromoBanner />
        <Nav />

        {wishlist.map((wishproduct, idx) => {
          return (
            <WishLIstModal
              idx={idx}
              mainImg={wishproduct.main_image}
              productModal={productModal}
              productModalToggle={this.productModalToggle}
              productInfo={productInfo}
            />
          );
        })}
        <div className="wishlistMain">
          <div className="userInfo">
            <div className="userName">
              <ProfileImg className="UserIcon" />
              <span>아무개 고객님</span>
            </div>
            <ul className="shoppingInfo">
              <li className="subTitle">쇼핑 정보</li>
              <li>주문/배송 조회</li>
              <li>교환/반품 신청</li>
              <li>교환/반품 조회</li>
              <li>입고 알림 신청 내역</li>
            </ul>
            <ul className="activityInfo">
              <li className="subTitle">활동 정보</li>
              <li>드로우 내역</li>
              <li>프로모션 코드 조회</li>
              <li>상품 리뷰</li>
              <li>위시리스트</li>
              <li>1:1 문의</li>
            </ul>
            <ul className="privateInfo">
              <li className="subTitle">나의 정보</li>
              <li>배송지 관리</li>
              <li>회원 정보 수정</li>
              <li>비밀번호 변경</li>
              <li>회원 탈퇴</li>
            </ul>
            <div className="logout">
              <span>로그아웃</span>
            </div>
          </div>
          <div className="wishProductList">
            <p>위시리스트</p>
            <div className="wishProductListMain">
              {wishlist.map((wishProduct, idx) => {
                const {
                  main_image,
                  price,
                  series_name,
                  product_id,
                } = wishProduct;
                return (
                  <WishProduct
                    DeleteWishList={() => this.AlertDeleteWishList(product_id)}
                    imgUrl={main_image}
                    price={price}
                    id={product_id}
                    name={series_name}
                    productModal={() =>
                      this.productModalToggle(product_id, idx)
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WishList;
