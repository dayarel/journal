import React from "react";
import logo from "../../images/journal_logo.svg";
import avatar from "../../images/avatar.jpg";
const Navbar = () => {
  return (
    <nav className="navbar__main">
      <div className="navbar__navbar-brand">
        <img src={logo} alt="Journal logo" />
      </div>
      <p>WELCOME TO YOUR PERSONAL JOURNAL APP</p>
      <div className="navbar__user">
        <div className="navbar__navbar-avatar">
          <img src={avatar} alt="User Avatar" />
        </div>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
