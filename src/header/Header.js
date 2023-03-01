import React from "react";
import { NavHashLink } from "react-router-hash-link";
import manavresume from "../files/manavresume.pdf";
import "./header.css";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Resume", href: manavresume, target: "_blank" },
];

function Header() {
  return (
    <div className="header-wrapper">
      <span className="header-title">Manav</span>

      <div className="header-nav-wrapper label-semibold">
        {navigation.map(({ name, href, target }) => (
          <NavHashLink
            key={name}
            to={href}
            className={({ isActive }) =>
              `header-nav button-semibold ${isActive ? "" : "active"}`
            }
            target={target}
          >
            {name}
          </NavHashLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
