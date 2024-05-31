import React from "react";
import Logo from "./icons_assets/Logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Little Lemon Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
