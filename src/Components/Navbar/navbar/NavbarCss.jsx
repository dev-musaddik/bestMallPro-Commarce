// NavbarCss.jsx
import React, { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import './NavbarCss.css';

const NavbarCss = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="menu-bar">
        <h1 className="logo">
          Light<span>Code.</span>
        </h1>
        <div className="mobile-icon" onClick={toggleMenu}>
          <FaCaretDown />
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              Pages <FaCaretDown />
            </a>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">
                    Team <FaCaretRight />
                  </a>
                  <div className="dropdown-menu-1">
                    <ul>
                      <li>
                        <a href="#">Team-1</a>
                      </li>
                      <li>
                        <a href="#">Team-2</a>
                      </li>
                      <li>
                        <a href="#">Team-3</a>
                      </li>
                      <li>
                        <a href="#">Team-4</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="hero">&nbsp;</div>
    </>
  );
};

export default NavbarCss;
