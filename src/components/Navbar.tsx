import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import MenuBtn from "./MenuBtn";

import "./styles/Navbar.scss";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const menuBtn = useRef() as React.MutableRefObject<HTMLDivElement>;

  const isActive: any = (path: string, match: any, location: any) =>
    !!(match || path === location.pathname);

  const toggleNav: VoidFunction = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar">
        <div ref={menuBtn} className="menuButton" onClick={toggleNav}>
          <MenuBtn enabled={toggle} />
        </div>
        <div className="navLinks">
          <ul className={toggle ? "links show-nav" : "links"}>
            <li>
              <NavLink
                to={"/about"}
                activeClassName="nav-link--active"
                isActive={isActive.bind(this, "/about")}
                onClick={() => {
                  menuBtn.current.click();
                }}
              >
                {"ABOUT"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/skills"}
                activeClassName="nav-link--active"
                isActive={isActive.bind(this, "/skills")}
                onClick={() => {
                  menuBtn.current.click();
                }}
              >
                {"SKILLS"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                activeClassName="nav-link--active"
                isActive={isActive.bind(this, "/contact")}
                onClick={() => {
                  menuBtn.current.click();
                }}
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
