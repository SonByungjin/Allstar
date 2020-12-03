import React from "react";
import SliderContent from "./SliderContent";
import "./PromoBanner.scss";

class PromoBanner extends React.Component {
  render() {
    return (
      <>
        <div className="promoBanner">
          <div className="content">
            <section className="languageBox">
              <img
                alt="flag"
                src="https://image.converse.co.kr/cmsstatic/theme/b-commerce/assets/images/locale-kr.svg"
              />
              <div className="text">
                KR <span>|</span> 한국어
              </div>
            </section>
            <section className="sliderBox">
              <div className="sliderContents">
                <SliderContent />
              </div>
            </section>
            <section className="emptyBox"></section>
          </div>
        </div>
      </>
    );
  }
}

export default PromoBanner;
