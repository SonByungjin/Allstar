import React from "react";
import "./SizeGuidePanel.scss";

class SizeGuide extends React.Component {
  render() {
    return (
      <div className="SizeGuide">
        <div className="sizeContainer">
          <span className="sizeCloseBtn" onClick={this.props.isSizeGuideOpen}>
            X
          </span>
          <div className="sizeTitle">신발 사이즈 차트</div>
          <div className="sizeTitleSecond">
            <span className="converseSize">컨버스 사이즈</span>
            <span className="converseSizeMM">밀리미터(mm)</span>
          </div>
          <div className="sizeTable">
            <table id="sizes">
              <tbody>
                <tr>
                  {sizesHEAD.map((el, index) => {
                    return <th key={index}>{el}</th>;
                  })}
                </tr>
                <tr>
                  <td>3</td>
                  <td>220</td>
                  <td>3</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3.5</td>
                  <td>225</td>
                  <td>3.5</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>230</td>
                  <td>4</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4.5</td>
                  <td>235</td>
                  <td>4.5</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>240</td>
                  <td>5</td>
                  <td>220</td>
                </tr>
                <tr>
                  <td>5.5/6</td>
                  <td>245</td>
                  <td>5.5/6</td>
                  <td>225</td>
                </tr>
                <tr>
                  <td>6.5</td>
                  <td>250</td>
                  <td>6.5</td>
                  <td>230</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>255</td>
                  <td>7</td>
                  <td>235</td>
                </tr>
                <tr>
                  <td>7.5</td>
                  <td>260</td>
                  <td>7.5</td>
                  <td>240</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>265</td>
                  <td>8</td>
                  <td>245</td>
                </tr>
                <tr>
                  <td>8.5</td>
                  <td>270</td>
                  <td>8.5</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>275</td>
                  <td>9</td>
                  <td>255</td>
                </tr>
                <tr>
                  <td>9.5</td>
                  <td>280</td>
                  <td>9.5</td>
                  <td>260</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>285</td>
                  <td>10</td>
                  <td>265</td>
                </tr>
                <tr>
                  <td>10.5</td>
                  <td>290</td>
                  <td>10.5</td>
                  <td>270</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>295</td>
                  <td>11</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeGuide;

const sizesHEAD = ["US MEN", "KOREA MEN", "US WOMEN", "KOREA WOMEN"];
