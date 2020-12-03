import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderContent.scss";

export default class SliderContent extends Component {
  render() {
    const settings = {
      arrows: true,
      variableWidth: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="sliderContent">
        <Slider {...settings}>
          {SLIDERCONTENTS.map((textContent, index) => {
            return (
              <div className="textContent" key={index}>
                <span>NEW</span> <br /> {textContent.content}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export const SLIDERCONTENTS = [
  {
    id: 1,
    content: "컨버스 CX & Shapes 출시",
  },
  {
    id: 2,
    content: "컨버스 X 어콜드월 컬렉션 드로우 당첨자 확인",
  },
  {
    id: 3,
    content: "CPX 유틸리티 출시",
  },
  {
    id: 4,
    content: "컨버스 X 더솔로이스트 ERX 260 출시 ",
  },
];
