import React from "react";
import "./MediaTile1.scss";

class MediaTile1 extends React.Component {
  render() {
    return (
      <section className="mediaTile1">
        <h1>
          CONVERSE X <br />
          A-COLD-WALL* COLLECTION <br />
          DRAW
        </h1>
        <h2>
          언더그라운드 스트릿 컬처와 건축물. <br />
          그리고 자연환경을 정밀하게 조합해 디자인된 <br />
          럭셔리 브랜드 어콜드월*과의 콜라보레이션을 드로우 발매합니다.
        </h2>
        <a href="/main">
          <svg id="icon-arrow" viewBox="0 0 46.7 36">
            <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
          </svg>
          드로우 참여하기
        </a>
        <br />
        <a href="/main">
          <svg id="icon-arrow" viewBox="0 0 46.7 36">
            <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
          </svg>
          더 알아보기
        </a>
      </section>
    );
  }
}

export default MediaTile1;
