import React from "react";
import { withRouter } from "react-router-dom";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import ProductDetailFeed from "./ProductDetailFeed/ProductDetailFeed";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import ProductDetailRecommend from "./ProductDetailRecommend/ProductDetailRecommend";
import MiniCart from "../../Components/MiniCart/MiniCart";
import Footer from "../../Components/Footer/Footer";
import "./ProductDetail.scss";
import { secondAPI } from "../../Config";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: "",
      productInfo: [],
      isMiniCartDrop: false,
    };
  }

  componentDidMount() {
    fetch(`${secondAPI}/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.product_information) {
          this.setState({
            productId: this.props.match.params.id,
            productInfo: res["product_information"][0],
          });
        } else {
          console.log("제품 정보 가져오기 실패");
        }
      });
  }

  showMiniCart = () => {
    this.setState({
      isMiniCartDrop: !this.state.isMiniCartDrop,
    });
  };

  render() {
    const {
      productId,
      productInfo,
      isMiniCartDrop,
      handleOneDelete,
    } = this.state;

    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="ProductDetailContainer">
          <div className="ProductDetail">
            <nav></nav>
            <section className="ProductMain">
              <ProductDetailFeed productInfo={productInfo} />
              <ProductDetailRight
                productId={productId}
                productInfo={productInfo}
                showMiniCart={this.showMiniCart}
              />
            </section>
            <ProductDetailRecommend
              productId={productId}
              productInfo={productInfo}
            />
          </div>
          {isMiniCartDrop && <MiniCart showMiniCart={this.showMiniCart} />}
        </section>
        <Footer />
      </>
    );
  }
}

export default withRouter(ProductDetail);
