import React from "react";
import "./ProductCommunity.scss";

class ProductCommunity extends React.Component {
  constructor() {
    super();
    this.state = {
      communityProductList: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/data/ProductDetail/CommunityProductsMOCK.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          communityProductList: res.article,
        });
      });
  }

  render() {
    const { communityProductList } = this.state;

    return (
      <section className="ProductCommunity">
        <h1>LOOKS FROM THE CONVERSE COMMUNITY</h1>
        <p>컨버스 커뮤니티가 전하는 인스타그램 속 #컨버스스타일</p>
        <section className="communityArticles">
          <ul>
            {communityProductList.map((product, index) => {
              return (
                <li key={index}>
                  <div className="imgContainer">
                    <img
                      className="profileMainPic"
                      alt="product before hover"
                      src={product.picture}
                    />
                    <div className="hovered">
                      <div className="hoveredProfile">
                        <div className="hoveredProfileTop">
                          <img alt="profileTopImg" src={product.profilePic} />
                          <div className="hoveredProfileRight">
                            <span>{product.profileName}</span>
                            <span>{product.uploadTime}</span>
                          </div>
                        </div>
                        <div className="hoveredProfileBottom">
                          <span>{product.uploadMessage}</span>
                          <span>{product.uploadHashtags}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    );
  }
}

export default ProductCommunity;
