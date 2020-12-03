import React from "react";
import ProductInfo from "./ProductInfo";
import "./DashBoard4.scss";

class DashBoard4 extends React.Component {
  render() {
    return (
      <section className="dashBoard4">
        <div className="productSub">
          <div className="top">
            <h1>UNT1TL3D RIVALS</h1>
            <h2>
              과감한 컬러블록 디자인과 리믹스 러버 디테일로 완성된 <br />
              언타이틀드 라이블을 만나보세요
            </h2>
            <button>구매하기</button>
          </div>
          <a href="/main" className="bottom">
            <div className="bottomLeft">
              <ProductInfo
                newArrival={"NEW ARRIVAL"}
                name={"언타이틀드 라이벌"}
                price={"85,000 원"}
              />
            </div>
            <div className="bottomRight">
              <ProductInfo
                newArrival={"NEW ARRIVAL"}
                name={"언타이틀드 라이벌"}
                price={"85,000 원"}
              />
            </div>
          </a>
        </div>
        <a href="/main" className="productMain">
          <div className="desc">CLASSIC, BUT DIFFERENT</div>
          <div className="overLay"></div>
        </a>
      </section>
    );
  }
}

export default DashBoard4;
