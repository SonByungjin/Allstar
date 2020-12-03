import React, { Component } from "react";
import "./DashBoard.scss";

class DashBoard extends Component {
  render() {
    return (
      <div className="dashBoard">
        <section className="content">
          <div className="productName">컨버스 셰입스</div>
          <video
            playsInline="playsinline"
            preload="auto"
            tabIndex="-1"
            role="application"
            loop
            muted="muted"
            autoPlay
            data-module-lazymedia="https://image.converse.co.kr/structured-content/15200/[SHANA]The Valdez x Converse Shapes 10s-9x16-r8.mp4"
            src="https://image.converse.co.kr/structured-content/15200/[SHANA]The Valdez x Converse Shapes 10s-9x16-r8.mp4"
          />
        </section>
        <section className="content">
          <div className="top">
            <h1>베스트셀러</h1>
            <br />
            <svg id="icon-arrow" viewBox="0 0 46.7 36">
              <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
            </svg>
            <h2>구매하기</h2>
          </div>
          <div className="bottom">
            <div className="productName">회원전용상품</div>
            <img
              alt="memberOnlyProductImage"
              src="https://image.converse.co.kr/cmsstatic/structured-content/15202/03_Search_02_Banner_352x185_02.jpg?gallery"
            />
          </div>
        </section>
        <section className="content">
          <div className="top">
            <h1>무엇을 도와드릴까요?</h1>
            <br />
            <svg id="icon-arrow" viewBox="0 0 46.7 36">
              <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
            </svg>
            <h2>FAQ에서 궁금한 내용을 찾아보세요.</h2>
          </div>
          <div className="bottom">
            <div className="productName">척테일러 올스타 런웨이 케이블</div>
            <img
              alt="allStarRunWayCableImage"
              src="https://image.converse.co.kr/cmsstatic/structured-content/15204/03_Search_02_Banner_352x185_03.gif"
            />
          </div>
        </section>
        <section className="content">
          <div className="productName">올스타 BB EVO 라이벌</div>
          <img
            alt="allStarBbEvoRivalImage"
            src="https://image.converse.co.kr/cmsstatic/structured-content/15205/03_Search_01_Banner_352x370_04.jpg?gallery"
          />
        </section>
      </div>
    );
  }
}

export default DashBoard;
