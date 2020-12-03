import React from "react";
import ProductInfo from "./ProductInfo";
import "./DashBoard5.scss";

class DashBoard5 extends React.Component {
  render() {
    return (
      <section className="dashBoard5">
        <div className="productMain">
          <h1>CONVERSE SHAPES</h1>
          <h2>
            모두를 위한 컨버스 셰입스. <br />
            정해진 기준에서 벗어나 나만의 방식으로 스타일링 하세요.
          </h2>
          <button>더 알아보기</button>
          <button>구매하기</button>
        </div>
        <a href="/main" className="productSub">
          <div className="top">
            <div className="topLeft">
              <ProductInfo
                newArrival={"NEW ARRIVAL"}
                name={"컨버스 셰입스 트라이앵글 후디"}
                price={"85,000 원"}
              />
            </div>
            <div className="topRight">
              <ProductInfo
                newArrival={"NEW ARRIVAL"}
                name={"컨버스 셰입스 버블 크루"}
                price={"79,000 원"}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="bottomLeft">
              <ProductInfo
                newArrival={"NEW ARRIVAL"}
                name={"컨버스 셰입스 트라이앵글 래글런티"}
                price={"29,000 원"}
              />
            </div>
            <div className="bottomRight">
              <ProductInfo
                bestSeller={"BEST SELLER"}
                newArrival={"NEW ARRIVAL"}
                name={"컨버스 셰입스 트라이앵글 프론트 치노 팬츠"}
                price={"79,000 원"}
              />
            </div>
          </div>
        </a>
      </section>
    );
  }
}

export default DashBoard5;
