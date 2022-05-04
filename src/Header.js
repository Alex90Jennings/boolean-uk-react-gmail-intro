import LeftMenuHeader from "./LeftMenuHeader.js";
import SearchBar from "./SearchBar.js";

import "./styles/header-styles.css";

function Header() {
  return (
    <header className="header">
      <LeftMenuHeader />
      <SearchBar />
    </header>
  );
}

export default Header;
