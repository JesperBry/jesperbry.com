import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./styles/Navbar.scss";

import BarsIcon from "../assets/icons/grip-lines-solid.svg";
import CrossIcon from "../assets/icons/times-solid.svg";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const isActive: any = (path: string, match: any, location: any) =>
    !!(match || path === location.pathname);

  const toggleNav: VoidFunction = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar">
        <button className="menuButton" onClick={toggleNav}>
          {toggle ? (
            <img src={CrossIcon} alt="" className="menuIcons" />
          ) : (
            <img src={BarsIcon} alt="" className="menuIcons" />
          )}
        </button>
        <div className="navLinks">
          <ul className={toggle ? "links show-nav" : "links"}>
            <li>
              <NavLink
                to={"/about"}
                activeClassName="nav-link--active"
                isActive={isActive.bind(this, "/about")}
              >
                {"ABOUT"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/skills"}
                activeClassName="nav-link--active"
                isActive={isActive.bind(this, "/skills")}
              >
                {"SKILLS"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                activeClassName="nav-link--active"
                isActive={isActive.bind(this, "/contact")}
              >
                {"CONTACT"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
