import React from "react";
import "./ShoesIconList.scss";

class ShoesIconList extends React.Component {
  constructor() {
    super();
    this.state = {
      shoesIconList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/Main/SHOESICONDATA.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          shoesIconList: res.data,
        });
      });
  }
  render() {
    const { shoesIconList } = this.state;
    return (
      <section className="shoesIcons">
        <h1>CHOOSE YOUR ICON</h1>
        <a href="/main">
          <svg id="icon-arrow" viewBox="0 0 46.7 36">
            <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
          </svg>
          신발 전체 보기
        </a>
        <ul className="shoes">
          {shoesIconList.map((shoes) => {
            return (
              <li key={shoes.id}>
                <a href="/main">
                  <img alt={shoes.name} src={shoes.url} />
                  <div className="caption">{shoes.name}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ShoesIconList;
