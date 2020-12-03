import React from "react";
import { withRouter } from "react-router-dom";
import { secondAPI } from "../../Config";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      emailValue: "",
      emailError: "",
      passwordValue: "",
      passwordError: "",
      rePasswordValue: "",
      rePasswordError: "",
      nameValue: "",
      nameError: "",
      phoneValue: "",
      phoneError: "",
      birthValue: "",
      birthError: "",
      isFemale: false,
      isMale: false, // isMale 만 true false 값으로
      isWomen: false,
      isMen: false,
      checkAll: false,
      checkOne: false,
      checkTwo: false,
      checkThree: false,
      checkFour: false,
    };
  }

  handleGenderValue = (e) => {
    const { name } = e.target;

    if (name === "male") {
      this.setState(
        {
          isWomen: false,
          isMen: true,
        },
        () => this.gender()
      );
    } else {
      this.setState(
        {
          isWomen: true,
          isMen: false,
        },
        () => this.gender()
      );
    }
    // this.gender();
  };

  gender = () => {
    if (this.state.isWomen) {
      return this.setState({
        isMale: "false",
      });
    } else {
      return this.setState({
        isMale: "true",
      });
    }
  };

  handleCheckAll = () => {
    console.log(this.handleCheckAll);
    this.setState({ checkAll: !this.state.checkAll });
    if (this.state.checkAll === false) {
      this.setState({
        checkOne: true,
        checkTwo: true,
        checkThree: true,
        checkFour: true,
      });
    } else if (this.state.checkAll === true) {
      this.setState({
        checkOne: false,
        checkTwo: false,
        checkThree: false,
        checkFour: false,
      });
    }
  };

  handleEmailValue = (e) => {
    const { value } = e.target;
    this.setState({ emailValue: value }, () => {
      if (value.includes("@") && value.includes(".")) {
        this.setState({ emailError: "" });
      } else if (this.state.emailValue.length === 0) {
        this.setState({ emailError: "필수 입력 항목입니다 " });
      } else {
        this.setState({ emailError: "이메일 형태로 입력해주세요" });
      }
    });
  };

  handlePasswordValue = (e) => {
    const { value } = e.target;
    const passwordRegExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%]).{8,16}$/;
    this.setState({ passwordValue: value }, () => {
      if (value.match(passwordRegExp)) {
        this.setState({ passwordError: "" });
      } else if (this.state.passwordValue.length === 0) {
        this.setState({ passwordError: "필수 입력 항목입니다" });
      } else {
        this.setState({
          passwordError: "영문/숫자/특수문자 조합 8~16자 조합으로 입력해주세요",
        });
      }
    });
  };

  handlerePasswordValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const { passwordValue, rePasswordValue } = this.state;
      if (rePasswordValue.length === 0) {
        this.setState({
          rePasswordError: "필수 입력 항목입니다.",
        });
      } else if (passwordValue === rePasswordValue) {
        this.setState({ rePasswordError: "" });
      } else {
        this.setState({ rePasswordError: " 입력값이 일치하지 않습니다. " });
      }
    });
  };

  handleNameValue = (e) => {
    const { value } = e.target;
    this.setState({ nameValue: value });
  };

  handlePhoneValue = (e) => {
    const { value } = e.target;
    const phoneNum = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    this.setState({ phoneValue: value }, () => {
      if (value.match(phoneNum)) {
        this.setState({ phoneError: "" });
      } else {
        this.setState({ phoneError: "올바른 휴대폰 번호를 입력해주세요." });
      }
    });
  };

  handleBirthValue = (e) => {
    const onlyNum = /^[0-9]*$/;
    const { value } = e.target;
    this.setState({ birthValue: value }, () => {
      if (value.match(onlyNum)) {
        this.setState({ birthError: "" });
      } else {
        this.setState({
          birthError: "생년월일(YYYYMMDD)은 숫자로만 입력 가능합니다.",
        });
      }
    });
  };

  handleClick = () => {
    console.log("Male", this.state.isMale);
    const {
      emailValue,
      passwordValue,
      rePasswordValue,
      phoneValue,
      birthValue,
      nameValue,
      isMale,
    } = this.state;

    fetch(`${secondAPI}/account/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        re_password: rePasswordValue,
        phone_number: phoneValue,
        date_of_birth: birthValue,
        name: nameValue,
        is_male: isMale,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert("회원가입을 축하드립니다!");
          this.props.history.push("/login");
        } else {
          alert("입력된 정보를 다시 확인해주세요.");
        }
      });
  };

  render() {
    // console.log(this.state.isone, this.state.istwo);
    const {
      emailValue,
      passwordValue,
      rePasswordValue,
      nameValue,
      birthValue,
      phoneValue,
      isFemale,
      isMale,
    } = this.state;
    console.log("Male", this.state.isMale);

    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="registerMain">
          <div className="signUpContainer">
            <div className="signUpHeader">
              <div className="headerInner">
                <div className="headerDisplay">
                  <h1 className="title">회원가입</h1>
                  <p className="descrText">
                    지금 컨버스 회원으로 가입하시고, 특별한 멤버십 혜택과 <br />
                    다양한 회원 전용 상품을 만나보세요
                  </p>
                </div>
              </div>
            </div>
            <div className="signUpBody">
              <div className="signUpForm">
                <div className="entryField">
                  <div className="signUpInfo">
                    <div className="socialSignUp">
                      <button className="kakao">
                        <svg id="icon-kakao" viewBox="0 0 24 22">
                          <path d="M12,0C5.373,0,0,4.238,0,9.465c0,3.403,2.277,6.386,5.693,8.054 c-0.251,0.935-0.909,3.387-1.04,3.912c-0.163,0.65,0.239,0.643,0.502,0.467c0.206-0.138,3.288-2.229,4.618-3.13 c0.722,0.106,1.466,0.163,2.227,0.163c6.627,0,12-4.238,12-9.466C24,4.238,18.627,0,12,0"></path>
                        </svg>
                        카카오 계정으로 1초 회원가입
                      </button>
                      <div className="makeOr">
                        <div></div>
                        <span>OR</span>
                        <div></div>
                      </div>
                    </div>
                    <div className="normalSignUp">
                      <div className="infoTitle">
                        <h1>필수정보</h1>
                      </div>
                      <div className="allInput">
                        <input
                          className="email"
                          name="emailValue"
                          type="email"
                          onChange={this.handleEmailValue}
                          value={emailValue}
                          placeholder="이메일 형태로 입력해주세요.(필수)"
                        ></input>
                        <span>{this.state.emailError}</span>
                        <input
                          className="password"
                          maxLength="16"
                          name="passwordValue"
                          type="password"
                          onChange={this.handlePasswordValue}
                          value={passwordValue}
                          placeholder="비밀번호 (영문/숫자/특수문자 조합 8자 이상)"
                        ></input>
                        <span>{this.state.passwordError}</span>
                        <input
                          className="rePassword"
                          maxLength="16"
                          name="rePasswordValue"
                          type="password"
                          onChange={this.handlerePasswordValue}
                          value={rePasswordValue}
                          placeholder="비밀번호 입력 확인"
                        ></input>
                        <span>{this.state.rePasswordError}</span>
                        <input
                          className="name"
                          name="nameValue"
                          type="text"
                          onChange={this.handleNameValue}
                          value={nameValue}
                          placeholder="이름을 입력해주세요.(필수)"
                        ></input>
                        <span>{this.state.nameError}</span>
                        <input
                          className="phoneNum"
                          maxLength="11"
                          name="phoneValue"
                          type="text"
                          onChange={this.handlePhoneValue}
                          value={phoneValue}
                          placeholder="휴대폰 번호 '-'표 없이 입력해주세요.(필수)"
                        ></input>
                        <span>{this.state.phoneError}</span>
                        <label>*생일/성별은 가입 후 수정이 불가합니다.</label>
                        <input
                          className="birth"
                          maxLength="8"
                          name="birthValue"
                          type="text"
                          onChange={this.handleBirthValue}
                          value={birthValue}
                          placeholder="생년월일을 입력해 주세요. (19990101)"
                        ></input>
                        <span>{this.state.birthError}</span>
                        <div className="gender">
                          <input
                            type="radio"
                            id="genderType0"
                            // name="genderType"
                            checked={this.state.isWomen ? true : ""}
                            onChange={this.handleGenderValue}
                            name="female"
                            // value="female"
                          ></input>
                          <label htmlFor="genderType0">여성</label>

                          <input
                            type="radio"
                            id="genderType1"
                            // name="genderType"
                            checked={this.state.isMen ? true : ""}
                            onChange={this.handleGenderValue}
                            name="male"
                          ></input>
                          <label htmlFor="genderType1">남성</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agreeField">
                  <div className="totalAgree">
                    <div className="allCheck">
                      <input
                        type="checkbox"
                        onClick={this.handleCheckAll}
                        checked={this.state.checkAll}
                      ></input>
                      <label for="checkAll" className="allAgree">
                        모든 약관 동의
                      </label>
                    </div>
                    <p className="allAgreeText">
                      아래 모든 약관(필수),개인정보 수집 및 이용에 대한
                      동의(필수) 및 광고성 정보수신 동의(선택) 내용을 확인하고
                      전체 동의합니다.
                    </p>
                    <ul className="allAgreeLi">
                      <li>
                        - 필수 정보의 수집 및 이용에 관한 동의를 거부하실 수
                        있으나, 다만 이 경우 회원 가입 및 관련 서비스 이용은
                        불가합니다.
                      </li>
                      <li>
                        - 선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을
                        미치지 않습니다.
                      </li>
                      <li>- 만 14세 미만은 서비스 이용이 불가합니다.</li>
                    </ul>
                  </div>
                  <div className="needAgree">
                    <h1>
                      컨버스 공식 온라인 스토어 회원 약관 및 개인정보
                      수집•이용에 대한 동의
                    </h1>
                    <div
                      className="needCheck"
                      onClick={() =>
                        this.setState({ checkOne: !this.state.checkOne })
                      }
                    >
                      <input
                        type="checkbox"
                        checked={this.state.checkOne}
                      ></input>
                      <label for="checkOne">(필수)이용 약관에 대한 동의</label>
                    </div>
                    <div
                      className="needCheckTwo"
                      onClick={() =>
                        this.setState({ checkTwo: !this.state.checkTwo })
                      }
                    >
                      <input
                        type="checkbox"
                        checked={this.state.checkTwo}
                      ></input>
                      <label for="checkTwo">
                        (필수)개인정보 수집 및 이용에 대한 동의
                      </label>
                    </div>
                  </div>
                  <div className="selectAgree">
                    <h2>광고성 정보 수신 동의</h2>
                    <p>(회원 전용 다양한 이벤트 소식을 받아보세요)</p>
                    <div
                      className="selectCheck"
                      onClick={() =>
                        this.setState({ checkThree: !this.state.checkThree })
                      }
                    >
                      <input
                        type="checkbox"
                        checked={this.state.checkThree}
                      ></input>
                      <label for="checkThree">(선택)이메일 수신 동의</label>
                    </div>
                    <div
                      className="selectCheckTwo"
                      onClick={() =>
                        this.setState({ checkFour: !this.state.checkFour })
                      }
                    >
                      <input
                        type="checkbox"
                        checked={this.state.checkFour}
                      ></input>
                      <label for="checkFour">(선택)문자 수신동의</label>
                    </div>
                  </div>
                  <div className="finalSignUp">
                    <button type="submit" onClick={this.handleClick}>
                      회원가입하기(만 14세 이상)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default withRouter(SignUp);
