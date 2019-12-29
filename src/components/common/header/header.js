import React from "react";
import './header.scss';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header">
        <NavLink exact className="header_link header_link-search" activeClassName="header_link-active" to="/">
          <img src="https://www.kamereo.vn/favicon.ico" className="header_logo" alt="logo"></img>
        </NavLink>
      </nav>
    </>
  );
}
export default Header;

