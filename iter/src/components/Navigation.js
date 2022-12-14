import "../styles/navigation.scss";
import Menu from "./Menu";
import searchIcon from "../images/searchIcon.png";
import logo from "../images/로고1투명.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo"/>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
