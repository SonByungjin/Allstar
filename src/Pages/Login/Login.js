import React from "react";
import { Link } from "react-router-dom";
import { secondAPI } from "../../Config";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      idValue: "",
      passwordValue: "",
      idError: "",
      passwordError: "",
    };
  }

  handleClick = (e) => {
    const { idValue, passwordValue } = this.state;
    //   if (idValue.length < 1 && passwordValue.length < 1) {
    //     this.setState({
    //       idError: "필수 입력 항목입니다",
    //       passwordError: "필수 입력 항목입니다",
    //     });
    //   }
    // };
    fetch(`${secondAPI}/account/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: idValue,
        password: passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
          alert("로그인 성공");
          this.props.history.push("/main");
        } else if (result.message === "UNAUTHORIZED") {
          this.setState({ idError: "아이디와 비밀번호를 확인해주세요." });
        }
      });
  };

  handleEnterValue = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  handleIdValue = (e) => {
    const { idValue } = this.state;
    const { value } = e.target;
    //   const isValid = value.includes("@") && value.includes(".");
    //   const isEmpty = !idValue.length;

    //   const errorMsg = {
    //     1: "이메일 형태로 입력해주세요.",
    //     2: "필수 항목입니다",
    //     3: "",
    //   };

    //   this.setState({
    //     idError: errorMsg[],
    //   });
    // };

    // validate = (조건, condition) => {

    //   let result = ""

    //   this.setState({idError: result})

    // }

    this.setState(
      {
        idValue: value,
      },
      () => {
        if (value.includes("@") && value.includes(".")) {
          this.setState({ idError: "" });
        } else if (this.state.idValue.length === 0) {
          this.setState({ idError: "필수 입력 항목입니다" });
        } else {
          this.setState({ idError: "이메일 형태로 입력해주세요" });
        }
      }
    );
  };

  handlePassValue = (e) => {
    const { value } = e.target;
    const passwordRegExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%]).{8,16}$/;
    this.setState(
      {
        passwordValue: value,
      },
      () => {
        if (value.match(passwordRegExp)) {
          this.setState({ passwordError: "" });
        } else if (this.state.passwordValue.length === 0) {
          this.setState({ passwordError: "필수 입력 항목입니다" });
        } else {
          this.setState({
            passwordError:
              "영문/숫자/특수문자 조합 8~16자 조합으로 입력해주세요.",
          });
        }
      }
    );
  };

  render() {
    const { idValue, passwordValue } = this.state;

    return (
      <>
        <PromoBanner />
        <Nav />
        <div className="login">
          <div className="loginMain">
            <div className="loginBody">
              <div className="loginHeader">로그인</div>
              <div className="loginContent">
                <div className="loginForm" onKeyPress={this.handleEnterValue}>
                  <input
                    className="inputLoginId"
                    value={idValue}
                    onChange={this.handleIdValue}
                    type="text"
                    placeholder="이메일 형태로 입력해주세요"
                  ></input>
                  <span>{this.state.idError}</span>
                  <input
                    className="inputLoginPw"
                    value={passwordValue}
                    onChange={this.handlePassValue}
                    type="password"
                    placeholder="비밀번호(영문/숫자/특수문자 조합 8자 이상)"
                  ></input>
                  <span>{this.state.passwordError}</span>
                </div>
                <div className="loginTools">
                  <label className="loginCheckbox">
                    <input type="checkbox"></input>
                    <span>로그인 상태 유지</span>
                  </label>
                  <a className="findIdPw" href="dd">
                    아이디/비밀번호 찾기
                  </a>
                </div>
                <div className="loginButtons">
                  <button
                    className="loginButton"
                    onClick={this.handleClick}
                    type="submit"
                  >
                    로그인
                  </button>
                  <button className="socialLoginBtn" type="social">
                    <svg id="icon-kakao" viewBox="0 0 24 22">
                      <path d="M12,0C5.373,0,0,4.238,0,9.465c0,3.403,2.277,6.386,5.693,8.054 c-0.251,0.935-0.909,3.387-1.04,3.912c-0.163,0.65,0.239,0.643,0.502,0.467c0.206-0.138,3.288-2.229,4.618-3.13 c0.722,0.106,1.466,0.163,2.227,0.163c6.627,0,12-4.238,12-9.466C24,4.238,18.627,0,12,0"></path>
                    </svg>
                    <span>카카오 계정으로 1초 로그인</span>
                  </button>
                </div>
                <div className="register">
                  <Link to="/signup">회원가입</Link>
                  <a href="ddd" className="unRegistered">
                    비회원 주문조회
                  </a>
                </div>
                <div className="giftPromo">
                  <p className="textProm">
                    <svg id="icon-giftbox" viewBox="0 0 32 32">
                      <path d="M24.96,6.197c0.607-0.653,0.986-1.541,0.986-2.521C25.946,1.632,24.313,0,22.335,0 c-1.502,0-4.964,2.246-6.348,4.264c-1.43-2.018-4.879-4.199-6.321-4.199c-1.973,0-3.612,1.633-3.612,3.677 c0,0.946,0.353,1.802,0.921,2.448H0v8.784h1.907V32h10.012h8.169H30.1V14.981H32V6.197H24.96z M22.335,1.365 c1.228,0,2.246,1.018,2.246,2.383c0,1.149-0.803,2.136-1.842,2.345h-5.524c-0.353-0.105-0.464-0.229-0.464-0.301 C16.751,4.63,20.833,1.365,22.335,1.365 M9.666,1.365c1.43,0,5.583,3.265,5.583,4.427c0,0.105-0.242,0.222-0.418,0.301H9.267 C8.229,5.884,7.425,4.897,7.425,3.749C7.419,2.449,8.444,1.365,9.666,1.365 M11.912,30.636H3.266V14.981h8.646V30.636z M11.912,13.688H1.365V7.563h10.554v6.126H11.912z M18.717,30.636H13.27V7.557h5.447V30.636z M28.729,30.636h-8.646V14.981h8.646 V30.636z M30.629,13.688H20.082V7.563h10.553v6.126H30.629z"></path>
                    </svg>
                    <span>
                      지금 회원으로 가입하시고,특별한 멤버십 혜택과 다양한 회원
                      전용 상품을 만나보세요.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
