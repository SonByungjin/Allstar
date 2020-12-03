import React from "react";
import ProductInfo from "./ProductInfo";
import "./DashBoard2.scss";

class DashBoard2 extends React.Component {
  render() {
    return (
      <section className="dashBoard2">
        <div className="productMain">
          <h1>
            CHUCK 70 <br />
            NEW COLORWAY
          </h1>
          <h2>
            디지털과 자연에서 영감을 받은 <br />
            새로운 컬러의 척 70을 만나보세요.
          </h2>
          <button>구매하기</button>
        </div>
        <a href="/main" className="productSub">
          <div className="top">
            <h2>척 70 빈티지 캔버스 러쉬블루</h2>
            <div className="buyBtn">구매하기</div>
            <div className="topOverlay"></div>
          </div>
          <div className="bottom">
            <div className="bottomLeft">
              <ProductInfo
                newArrival={"NEW ARRIVAL"}
                name={"척 70 시즈널 컬러"}
                price={"95,000 원"}
              />
            </div>
            <div className="bottomRight">
              <ProductInfo
                bestSeller={"BEST SELLER"}
                newArrival={"NEW ARRIVAL"}
                name={"척 70 빈티지 캔버스"}
                price={"89,000 원"}
              />
            </div>
          </div>
        </a>
      </section>
    );
  }
}

export default DashBoard2;
