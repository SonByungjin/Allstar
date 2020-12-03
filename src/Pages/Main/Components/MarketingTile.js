import React from "react";
import "./MarketingTile.scss";

class MarketingTile extends React.Component {
  render() {
    return (
      <>
        <section className="marketingTile">
          <div className="tileBox">
            <div className="imgWrap">
              <img alt="delivery" src="images/Main/delivery.png" />
            </div>
            <div className="title">무료배송</div>
            <div className="desc">5만원 이상 구매 시 무료배송</div>
          </div>
          <div className="tileBox">
            <div className="imgWrap">
              <img
                alt="changeAndRefund"
                src="images/Main/changeAndRefund.png"
              />
            </div>
            <div className="title">교환/반품 서비스</div>
            <div className="desc">
              사이즈를 잘못 선택하셨나요? <br />
              교환/반품 서비스에 대해 <br /> 더 알아보세요
            </div>
            <a href="/main" className="textLink">
              자세히 보기
            </a>
          </div>
          <div className="tileBox">
            <div className="imgWrap">
              <img alt="memberBenefit" src="images/Main/memberBenefit.png" />
            </div>
            <div className="title">회원 전용 혜택</div>
            <div className="desc">
              신규 가입 축하 쿠폰, 드로우 응모 등 <br />
              지금 회원 가입 하시고 <br />
              더욱 특별한 혜택을 누려보세요.
            </div>
            <a href="/main" className="textLink">
              회원 가입 하기
            </a>
          </div>
          <div className="tileBox">
            <div className="imgWrap">
              <a
                href="https://www.facebook.com/converse.kr"
                title="facebook"
                target="blank"
              >
                <img alt="facebook" src="images/Main/facebook.png" />
              </a>
              <a
                href="https://www.instagram.com/converse_kr/"
                title="instagram"
                target="blank"
              >
                <img alt="insta" src="images/Main/insta.png" />
              </a>
            </div>
            <div className="title">Follow US</div>
            <div className="desc">
              컨버스의 SNS 채널을 통해 <br />
              신상품 정보 및 이벤트 등 새로운 소식을
              <br /> 확인하세요.
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MarketingTile;
