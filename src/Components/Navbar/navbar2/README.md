// ResponsiveDropdownMenu.jsx (or any desired filename)
// ResponsiveDropdownMenu.jsx (or any desired filename)
import React, { useEffect, useRef } from 'react';

import { RiMenuLine, RiCloseLine, RiPlanetLine, RiArrowDownSLine, RiArrowUpDownLine, RiBarChartLine, RiAddLine, RiPieChartLine, RiUserLine, RiLockLine, RiMessage3Line } from 'react-icons/ri';
import './assets/css/styles.css'; // Adjust the path accordingly

const ResponsiveDropdownMenu = () => {
    const navToggleRef = useRef(null);
    const navMenuRef = useRef(null);
  
    useEffect(() => {
      const toggle = navToggleRef.current;
      const nav = navMenuRef.current;
  
      const handleClick = () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');
  
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
      };
  
      // Add event listener
      toggle.addEventListener('click', handleClick);
  
      // Remove event listener on component unmount
      return () => {
        toggle.removeEventListener('click', handleClick);
      };
    }, []); // Empty dependency array ensures it runs only once on mount
  return (
      <header className="header">
        <nav className="nav container">
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
          <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
               <ul className="nav__list">
                  <li><a href="#" className="nav__link">Home</a></li>

                  <li><a href="#" className="nav__link">Company</a></li>


              {/* DROPDOWN 1 */}
              <li className="dropdown__item">
                <div className="nav__link">
                  Analytics <RiArrowDownSLine className="dropdown__arrow" />
                </div>

                <ul className="dropdown__menu">
                  <li>
                    <a href="#" className="dropdown__link">
                      <RiPieChartLine /> Overview
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown__link">
                      <RiArrowUpDownLine /> Transactions
                    </a>
                  </li>

                  {/* DROPDOWN SUBMENU */}
                  <li className="dropdown__subitem">
                    <div className="dropdown__link">
                      <RiBarChartLine /> Reports <RiAddLine className="dropdown__add" />
                    </div>

                    <ul className="dropdown__submenu">
                      <li>
                        <a href="#" className="dropdown__sublink">
                          <RiPieChartLine /> Documents
                        </a>
                      </li>

                      <li>
                        <a href="#" className="dropdown__sublink">
                          <RiLockLine /> Payments
                        </a>
                      </li>

                      <li>
                        <a href="#" className="dropdown__sublink">
                          <RiMessage3Line /> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li><a href="#" className="nav__link">Products</a></li>

              {/* DROPDOWN 2 */}
              <li className="dropdown__item">
                <div className="nav__link">
                  Users <RiArrowDownSLine className="dropdown__arrow" />
                </div>

                <ul className="dropdown__menu">
                  <li>
                    <a href="#" className="dropdown__link">
                      <RiUserLine /> Profiles
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown__link">
                      <RiLockLine /> Accounts
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown__link">
                      <RiMessage3Line /> Messages
                    </a>
                  </li>
                </ul>
              </li>

              <li><a href="#" className="nav__link">Contact</a></li>
            </ul>
          </div>
        </nav>
      {/* <script src="./assets/js"></script> */}

      </header>

  );
};

export default ResponsiveDropdownMenu;

//
////////////////////////////////////////////////////////////


// ResponsiveDropdownMenu.jsx
import React, { useEffect, useRef, useState } from 'react';
import { RiMenuLine, RiCloseLine, RiPlanetLine, RiArrowDownSLine, RiArrowUpDownLine, RiBarChartLine, RiAddLine, RiPieChartLine, RiUserLine, RiLockLine, RiMessage3Line } from 'react-icons/ri';
import './assets/css/styles.css'; // Adjust the path accordingly

const ResponsiveDropdownMenu = () => {
  const navToggleRef = useRef(null);
  const navMenuRef = useRef(null);

  const menuData = [
    { label: 'Home', link: '#' },
    { label: 'Company', link: '#' },
    {
      label: 'Analytics',
      subMenu: [
        { label: 'Overview', link: '#' },
        { label: 'Transactions', link: '#' },
        {
          label: 'Reports',
          subMenu: [
            { label: 'Documents', link: '#' },
            { label: 'Payments', link: '#' },
            { label: 'Refunds', link: '#' },
          ],
        },
      ],
    },
    { label: 'Products', link: '#' },
    {
      label: 'Users',
      subMenu: [
        { label: 'Profiles', link: '#' },
        { label: 'Accounts', link: '#' },
        { label: 'Messages', link: '#' },
      ],
    },
    { label: 'Contact', link: '#' },
  ];
  useEffect(() => {
    const toggle = navToggleRef.current;
    const nav = navMenuRef.current;

    const handleClick = () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu');

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon');
    };

    // Add event listener
    toggle.addEventListener('click', handleClick);

    // Remove event listener on component unmount
    return () => {
      toggle.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  const renderSubMenu = (subMenuData) => {
    console.log(subMenuData)
    if (!subMenuData || subMenuData.length === 0) return null;

    return (
      <ul className="dropdown__submenu">
        {subMenuData.map((subMenuItem, subIndex) => (
          <li key={subIndex}>
            <a href={subMenuItem.link} className="dropdown__sublink">
              {subMenuItem.label}
              <h1>hi</h1>
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <RiPlanetLine /> Company
          </a>

          <div className="nav__toggle" id="nav-toggle" ref={navToggleRef}>
            <RiMenuLine className="nav__burger" />
            <RiCloseLine className="nav__close" />
          </div>
        </div>

        <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
      <ul className="nav__list">
        {menuData.map((menuItem, index) => (
          <li key={index} className="dropdown__item">
            {menuItem.subMenu ? (
              <>
                <div className="nav__link">
                  {/* {menuItem.label} <RiArrowDownSLine className="dropdown__arrow" /> */}
                </div>
                {renderSubMenu(menuItem.subMenu)}
              </>
            ) : (
              <a href={menuItem.link} className="nav__link">
                {menuItem.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
      </nav>
    </header>
  );
};

export default ResponsiveDropdownMenu;
