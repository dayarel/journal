import React from "react";
import logo from "../../images/journal_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

const Navbar = () => {
  const { photo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <nav className="navbar__main">
      <div className="navbar__navbar-brand">
        <img src={logo} alt="Journal logo" />
      </div>
      <p>WELCOME TO YOUR PERSONAL JOURNAL APP</p>
      <div className="navbar__user">
        <div className="navbar__navbar-avatar">
          <img src={photo} alt="User Avatar" />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
