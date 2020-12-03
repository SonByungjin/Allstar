import React from "react";
import "./MediaTile3.scss";

class MediaTile3 extends React.Component {
  render() {
    return (
      <section className="mediaTile3">
        <div className="videoInfo">
          <h1>CONVERSE CX</h1>
          <h2>새로운 차원의 디자인과 최상의 편안함</h2>
          <button>더 알아보기</button>
          <button>구매하기</button>
        </div>
        <video
          playsInline
          preload="auto"
          tabIndex="-1"
          role="application"
          loop
          muted="muted"
          autoPlay
          data-module-lazymedia="https://image.converse.co.kr/structured-content/18035/[SHANA]Converse_CX_master_1920x1080.mp4"
          src="https://image.converse.co.kr/structured-content/18035/[SHANA]Converse_CX_master_1920x1080.mp4"
        ></video>
      </section>
    );
  }
}

export default MediaTile3;
