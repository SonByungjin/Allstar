import React from "react";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import MediaTile1 from "./Components/MediaTile1";
import MediaTile2 from "./Components/MediaTile2";
import MediaTile3 from "./Components/MediaTile3";
import DashBoard1 from "./Components/DashBoard1";
import DashBoard2 from "./Components/DashBoard2";
import DashBoard3 from "./Components/DashBoard3";
import DashBoard4 from "./Components/DashBoard4";
import DashBoard5 from "./Components/DashBoard5";
import ShoesIconList from "./Components/ShoesIconList";
import MarketingTile from "./Components/MarketingTile";
import CommunityTiles from "./Components/CommunityTiles";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <PromoBanner />
        <Nav />
        <article className="main">
          <MediaTile1 />
          <ShoesIconList />
          <MediaTile2 />
          <DashBoard1 />
          <DashBoard2 />
          <DashBoard3 />
          <DashBoard4 />
          <DashBoard5 />
          <MediaTile3 />
          <CommunityTiles />
        </article>
        <MarketingTile />
        <Footer />
      </>
    );
  }
}

export default Main;
