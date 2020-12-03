import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <section className="footerMenu">
          <div className="tileBox">
            <div className="tile">
              <div className="subject">FOLLOW US</div>
              <div className="socialIconBox">
                <div className="iconWrap">
                  <img alt="facebook" src="/images/Footer/facebook.png" />
                </div>
                <div className="iconWrap">
                  <img alt="facebook" src="/images/Footer/insta.png" />
                </div>
              </div>
            </div>
            <div className="tile">
              <div className="subject">SUPPORT</div>
              <ul className="contents">
                <li>
                  <a href="/main">고객지원센터</a>
                </li>
                <li>
                  <a href="/main">1:1 문의</a>
                </li>
                <li>
                  <a href="/main">주문/배송 조회</a>
                </li>
              </ul>
            </div>
            <div className="tile">
              <div className="subject">INFORMATION</div>
              <ul className="contents">
                <li>
                  <a href="/main">컨버스에 대하여</a>
                </li>
                <li>
                  <a href="/main">회원가입</a>
                </li>
                <li>
                  <a href="/main">매장안내</a>
                </li>
                <li>
                  <a href="/main">공지사항</a>
                </li>
              </ul>
            </div>
            <div className="tile">
              <div className="subject">POLICY</div>
              <ul className="contents">
                <li>
                  <a href="/main">이용약관</a>
                </li>
                <li>
                  <a href="/main">개인정보처리방침</a>
                </li>
              </ul>
            </div>
            <div className="tile">
              <div className="subject">FAMILY SITES</div>
              <ul className="contents">
                <li>
                  <a href="/main">NIKE</a>
                </li>
                <li>
                  <a href="/main">Jordan</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="footerCompanyInfo">
          <div className="infoBox">
            <div className="siteInfo">
              <address>
                <div>
                  (유)컨버스코리아 &nbsp;|&nbsp; 대표 주형준 &nbsp;|&nbsp;
                  개인정보책임 주형준 &nbsp;|&nbsp; 사업자등록번호 220-88-74818
                </div>
                <div>
                  통신판매업 신고번호: 제2016-서울강남-00478호 &nbsp;|&nbsp;
                  <a href="/main">&nbsp;통신판매업자 신원정보 확인</a>
                </div>
                <div>주소: 서울시 강남구 테헤란로 152 강남파이낸스센터 32F</div>
                <div>
                  고객상담팀: 080-987-0182 (상담시간 월-금 : AM 09:00 - PM
                  05:30, 주말/공휴일 휴무) &nbsp;|&nbsp;
                  <a href="/main"> conversekorea@converse.co.kr</a>
                  &nbsp; (24시간 접수 가능)
                </div>
              </address>
              <p>2020 Converse Korea LLC. All Rights Reserved.</p>
            </div>
            <div className="insuranceInfo">
              <dt>소비자피해 보증보험</dt>
              <dd>
                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서
                가입한 구매
                <br />
                안전서비스 소비자피해보증보험 서비스를 이용하실 수 있습니다.
                <br />
                보증대상: 미배송, 반품/환불거부, 쇼핑몰 부도
              </dd>
              <a href="/main">보증보험 가입사실 확인하기</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
