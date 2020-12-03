import React, { Component } from "react";
import "./CommunityTiles.scss";
import CommunityTilesData from "./CommunityTilesData";

class CommunityTiles extends Component {
  render() {
    return (
      <div className="communityTiles">
        <h1>CONVERSE COMMUNITY</h1>
        <ul className="tileContainer">
          {CommunityTilesData.map((data) => {
            return (
              <li key={data.id} className="tile">
                <img src={data.image} alt={data.id} />
              </li>
            );
          })}
        </ul>
        <button>더 보기</button>
      </div>
    );
  }
}

export default CommunityTiles;
