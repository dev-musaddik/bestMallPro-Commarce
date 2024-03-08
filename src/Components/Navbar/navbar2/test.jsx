// ResponsiveDropdownMenu.jsx (or any desired filename)
import React, { useEffect, useRef } from "react";

import {
  RiMenuLine,
  RiCloseLine,
  RiPlanetLine,
  RiArrowDownSLine,
  RiArrowUpDownLine,
  RiBarChartLine,
  RiAddLine,
  RiPieChartLine,
  RiUserLine,
  RiLockLine,
  RiMessage3Line,
} from "react-icons/ri";
import "./assets/css/styles.css"; // Adjust the path accordingly

const ResponsiveDropdownMenu = () => {
  const menuData = [
    { label: "Home", link: "#" },
    { label: "Company", link: "#" },
    {
      label: "Analytics",
      subMenu: [
        { label: "Overview", link: "#" },
        { label: "Transactions", link: "#" },
        {
          label: "Reports",
          subMenu: [
            { label: "Documents", link: "#" },
            { label: "Payments", link: "#" },
            { label: "Refunds", link: "#" },
          ],
        },
      ],
    },
    { label: "Products", link: "#" },
    {
      label: "Users",
      subMenu: [
        { label: "Profiles", link: "#" },
        { label: "Accounts", link: "#" },
        { label: "Messages", link: "#" },
      ],
    },
    { label: "Contact", link: "#" },
  ];
  console.log(menuData.map((item) => item.label));
  console.log(menuData);
  const navToggleRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const toggle = navToggleRef.current;
    const nav = navMenuRef.current;

    const handleClick = () => {
      // Add show-menu class to nav menu
      nav.classList.toggle("show-menu");

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle("show-icon");
    };

    // Add event listener
    toggle.addEventListener("click", handleClick);

    // Remove event listener on component unmount
    return () => {
      toggle.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array ensures it runs only once on mount
  return (
    <header className="header">
      <nav className="nav container d-flex flex-column">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <RiPlanetLine /> Company
          </a>

          <div className="nav__toggle" id="nav-toggle" ref={navToggleRef}>
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        {/* NAV MENU */}
      </nav>
      <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
        <ul className="nav__list">
          {menuData.map((item, i) => (
            <>
              {item.subMenu ? (
                <li className="dropdown__item">
                  <div className="nav__link">
                    <RiArrowDownSLine className="dropdown__arrow" />
                    {item.label}
                  </div>
                  <ul className="dropdown__menu">
                    {item.subMenu.map((item_inner, key) => (
                      <>
                        {item_inner.subMenu ? (
                          <li className="dropdown__subitem">
                            <div className="dropdown__link">
                              <RiAddLine className="dropdown__arrow" />
                              {item_inner.label}
                            </div>
                            <ul className="dropdown__submenu">
                              {item_inner.subMenu.map(
                                (item_inner_inner, key) => (
                                  <li key={key}>
                                    <a href="#" className="dropdown__sublink">
                                      {item_inner_inner.label}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </li>
                        ) : (
                          <li>
                            <a href="#" className="dropdown__link">
                              {item_inner.label}
                            </a>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </li>
              ) : (
                <li>
                  <a href="#" className="nav__link">
                    {item.label}
                  </a>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* <script src="./assets/js"></script> */}
    </header>
  );
};

export default ResponsiveDropdownMenu;
