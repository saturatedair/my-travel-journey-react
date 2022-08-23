import React from "react";
import Logo from "../images/travel-logo.svg";
function Nav() {
  return (
    <nav>
      <img src={Logo} className="logo" alt="nav-logo" />
      <h3>my travel journal</h3>
    </nav>
  );
}

export default Nav;
