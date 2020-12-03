import React, { Component } from "react";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    const {
      userInput,
      handleChange,
      filteredItems,
      filteredItemsNames,
      hybridAreaCondition,
    } = this.props;
    return (
      <div className="searchBar">
        <section className="searchArea">
          <h1>검색</h1>
          <div className="box">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              onChange={handleChange}
            />
            <svg id="nav-search" viewBox="0 0 32 32">
              <path d="M19 0C11.8 0 6 5.8 6 13c0 3 1 5.7 2.7 7.9L.8 28.8l2.4 2.4 7.9-7.9C13.3 25 16 26 19 26c7.2 0 13-5.8 13-13S26.2 0 19 0zm0 22.5c-5.3 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5c5.3 0 9.5 4.3 9.5 9.5s-4.2 9.5-9.5 9.5z"></path>
            </svg>
          </div>
          <ul
            className={
              userInput.length >= 2 &&
              filteredItemsNames.join().includes(userInput)
                ? "recommendWords"
                : "hidden"
            }
          >
            {filteredItemsNames.slice(0, 4).map((product, index) => {
              return <li key={index}>{product}</li>;
            })}
          </ul>
        </section>
        <section className="hybridArea">
          <div
            className={hybridAreaCondition ? "hidden" : "popularSearchWords"}
          >
            <h1>인기 검색어</h1>
            <ul>
              <li>척테일러</li>
              <li>잭퍼셀</li>
              <li>척 70</li>
              <li>셰입스</li>
            </ul>
          </div>
          <div className={hybridAreaCondition ? "searchResults" : "hidden"}>
            <h1>추천 상품</h1>
            <ul>
              {filteredItems.slice(0, 4).map((product) => {
                return (
                  <li key={product.id}>
                    <img alt={product.name} src={product.image} />
                    <div className="name">{product.name}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchBar;
