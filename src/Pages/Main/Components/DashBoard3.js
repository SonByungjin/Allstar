import React from "react";
import "./DashBoard3.scss";

class DashBoard3 extends React.Component {
  render() {
    return (
      <section className="dashBoard3">
        <a href="/main" className="modelPhoto">
          <div className="name">잭 퍼셀 컬러블록</div>
          <div className="buyBtn">구매하기</div>
          <div className="overLay"></div>
        </a>
        <div className="productDesc">
          <h1>
            JACK PURCELL <br />
            HACKED FASHION
          </h1>
          <h2>
            새로운 조합으로 나만의 새로움을. <br />
            잭퍼셀과 함께 믹스 앤 매치 패션을 완성하세요.
          </h2>
          <button>구매하기</button>
        </div>
      </section>
    );
  }
}

export default DashBoard3;
