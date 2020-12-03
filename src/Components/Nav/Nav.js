import React from "react";
import { Link } from "react-router-dom";
import ActiveSearchBar from "./ActiveSearchBar";
import ShoesMenuList from "./ShoesMenuList";
import ClothesMenuList from "./ClothesMenuList";
import KidsMenuList from "./KidsMenuList";
import NavData from "./NavData";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      activeId: 0,
      onSearchBar: false,
      leftMenuList: NavData.leftMenuList,
      rightMenuIcons: NavData.rightMenuIcons,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 68;
      this.setState({
        scrolled: isScrolled,
      });
    });
  }

  activeMenuList = (id) => {
    const { activeId } = this.state;
    this.setState({
      activeId: activeId === id ? 0 : id,
    });
  };

  closeMenu = () => {
    this.setState({
      activeId: 0,
    });
  };

  toggleSearchBar = () => {
    const { onSearchBar } = this.state;
    this.setState({
      onSearchBar: !onSearchBar,
    });
  };

  render() {
    const {
      scrolled,
      activeId,
      leftMenuList,
      rightMenuIcons,
      onSearchBar,
    } = this.state;
    const { closeMenu, toggleSearchBar } = this;
    const leftMenuObj = {
      0: "",
      1: <ShoesMenuList activeId={activeId} closeMenu={closeMenu} />,
      2: <ClothesMenuList activeId={activeId} closeMenu={closeMenu} />,
      3: <KidsMenuList activeId={activeId} closeMenu={closeMenu} />,
    };
    return (
      <div className={scrolled ? "navWrap navWrapScrolled" : "navWrap"}>
        <nav>
          <ul className="leftMenu">
            <li>
              <Link to="/main">
                <img alt="navLogo" src="/images/Nav/navLogo.png" />
              </Link>
            </li>
            {leftMenuList.map((menu) => {
              return (
                <li
                  key={menu.id}
                  onClick={() => this.activeMenuList(menu.id)}
                  className={activeId === menu.id ? "leftMenuOn" : ""}
                >
                  <div>{menu.name}</div>
                </li>
              );
            })}
          </ul>
          <ul className="rightMenu">
            {rightMenuIcons.map((icon, index) => {
              return (
                <li key={index}>
                  <Link to={`/${icon.path}`}>{icon.imgSrc}</Link>
                </li>
              );
            })}
            <li
              className={scrolled ? "searchBarScrolled" : "searchBar"}
              onClick={toggleSearchBar}
            >
              <div className="text">검색</div>
              <div className="icon">
                <img
                  alt="searchIcon"
                  src="https://www.tenforums.com/geek/gars/images/2/types/thumb_Search_Taskbar.jpg"
                />
              </div>
            </li>
          </ul>
          <div className="onMenuList">{leftMenuObj[activeId]}</div>
          <ActiveSearchBar onSearchBar={onSearchBar} />
        </nav>
      </div>
    );
  }
}

export default Nav;
