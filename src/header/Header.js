import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Dezign.png";
import "./Header.css";

const navigation = [
  { name: "Home", href: "/demo" },
  { name: "Work", href: "/demo1" },
  { name: "About", href: "/demo2" },
];

function Header() {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="portfolio-logo" />

      <div className="header-nav-wrapper label-semibold">
        {navigation.map(({ name, href }) => (
          <NavLink
            key={name}
            to={href}
            className={({ isActive }) =>
              `header-nav button-semibold ${isActive ? "active" : ""}`
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
