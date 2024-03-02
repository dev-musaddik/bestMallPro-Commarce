import React, { useRef, useState } from "react";
import { Form, FormControl, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import "./navbar.css";
import image from "../../assets/i.jpg";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import "../../Styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const NavbarC = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [position, setPosition] = useState(true);

  const barFn = (e) => {
    showNavbar();
    // handleToggle();
    if (position === false) {
      setPosition(true);
    } else {
      setPosition(false);
    }
    console.log(position);
  };
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      fontSize: "36px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginRight: "10px",
      color: "#ecf0f1",
      fontFamily: "Arial, sans-serif",
    },
    icon: {
      color: "#3498db",
      fontSize: "24px",
    },
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const categories = [
    {
        label: "Desktop",
        subCategories: [
            {
                label: "Desktop SubCategory 1",
                subOptions: ["Option 1.1", "Option 1.2"],
            },
            "Desktop SubCategory 2",
        ],
    },
    {
        label: "Laptop",
        subCategories: [
            {
                label: "Laptop SubCategory 1",
                subOptions: ["Option 1.1", "Option 1.2"],
            },
            "Laptop SubCategory 2",
        ],
    },
    {
        label: "Component",
        subCategories: [
            {
                label: "Component SubCategory 1",
                subOptions: ["Option 1.1", "Option 1.2"],
            },
            "Component SubCategory 2",
        ],
    },
    {
        label: "Monitor",
        subCategories: [
            {
                label: "Monitor SubCategory 1",
                subOptions: ["Option 1.1", "Option 1.2"],
            },
            "Monitor SubCategory 2",
        ],
    },
    {
        label: "UPS",
        subCategories: [
            {
                label: "UPS SubCategory 1",
                subOptions: ["Option 1.1", "Option 1.2"],
            },
            "UPS SubCategory 2",
        ],
    },
    {
      label: "Phone",
      subCategories: [
          {
              label: "Phone SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Phone SubCategory 2",
      ],
  },
  {
      label: "Tablet",
      subCategories: [
          {
              label: "Tablet SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Tablet SubCategory 2",
      ],
  },
  {
      label: "Office Equipment",
      subCategories: [
          {
              label: "Office Equipment SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Office Equipment SubCategory 2",
      ],
  },
  {
      label: "Camera",
      subCategories: [
          {
              label: "Camera SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Camera SubCategory 2",
      ],
  },
  {
      label: "Security",
      subCategories: [
          {
              label: "Security SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Security SubCategory 2",
      ],
  },
  {
      label: "Networking",
      subCategories: [
          {
              label: "Networking SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Networking SubCategory 2",
      ],
  },
  {
      label: "Software",
      subCategories: [
          {
              label: "Software SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Software SubCategory 2",
      ],
  },
  {
      label: "Server & Storage",
      subCategories: [
          {
              label: "Server & Storage SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Server & Storage SubCategory 2",
      ],
  },
  {
      label: "Accessories",
      subCategories: [
          {
              label: "Accessories SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Accessories SubCategory 2",
      ],
  },
  {
      label: "Gadget",
      subCategories: [
          {
              label: "Gadget SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Gadget SubCategory 2",
      ],
  },
  {
      label: "Gaming",
      subCategories: [
          {
              label: "Gaming SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Gaming SubCategory 2",
      ],
  },
  {
      label: "TV",
      subCategories: [
          {
              label: "TV SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "TV SubCategory 2",
      ],
  },
  {
      label: "Appliance",
      subCategories: [
          {
              label: "Appliance SubCategory 1",
              subOptions: ["Option 1.1", "Option 1.2"],
          },
          "Appliance SubCategory 2",
      ],
  },
];

  const handleOptionChange = (option) => {
    setSelectedOptions([option.label || option]);
  };

  const handleSubOptionChange = (subOption) => {
    setSelectedOptions([selectedOptions[0], subOption.label || subOption]);
  };

  const handleSubSubOptionChange = (subSubOption) => {
    // Handle sub-sub-option selection if needed
    console.log("Selected sub-sub-option:", subSubOption);
  };
  const handleMouseLeave = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="navbar pt-0 pb-0 text-light">
      <div className="up bg-dark w-100 d-flex justify-content-between align-items-center p-2">
        <div
          className="bar-icons d-flex align-items-center pl-2 d-none"
          id="barI"
        >
          {position ? (
            <FaBars onClick={() => barFn("open")} size={28} />
          ) : (
            <FaBars onClick={() => barFn("corse")} size={28} />
          )}
        </div>
        <div className="logo_search d-flex align-items-center  justify-content-center">
          <div className="logo w-25">
            <img src={image} className="w-25 h-25 img-fluid" alt="logo" />
          </div>
          <div className="search d-flex h-75">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-primary" type="button">
              <IoIosSearch size={20} />
            </button>
          </div>
        </div>
        <div className="icons-bar d-flex  justify-content-between align-items-center p-2">
          <div   id="hot"  className="item  d-flex flex-column  flex-lg-row  justify-content-center h-100 align-items-center ">
            <FcElectricity style={{ color: 'red' }} size={28}   />
            <div className="text h-100 d-flex flex-column justify-content-center align-items-center">
              <h6>Hot Deals</h6>
              <div
                id="hide"
                className="d-flex justify-content-center align-items-center"
              >
                <p>enjoy most discount </p>
              </div>
            </div>
          </div>
          <div className="item d-flex flex-column flex-lg-row  justify-content-center h-100 align-items-center   ">
            <FaCartArrowDown  size={28}  />
            <div className="text h-100 d-flex flex-column justify-content-center align-items-center text-center ">
              <h6>Cart</h6>
              <div
                id="hide"
                className="d-flex justify-content-center align-items-center text-center"
              >
                <p>your added items</p>
              </div>
            </div>
          </div>

          <div className="item d-flex flex-column flex-lg-row  justify-content-center h-100 align-items-center ">
            <RiAccountCircleFill size={28} />
            <div className="text d-flex flex-column justify-content-center align-items-center h-100 ">
              <h6
                className="d-flex justify-content-center align-items-center text-center
                
                "
              >
                Account
              </h6>
              <div
                id="hide"
                className="d-flex justify-content-center align-items-center"
              >
                <p>Register or Login</p>
              </div>
            </div>
          </div>
          <div className="item d-flex justify-content-center h-100 align-items-center ">
            <button className="color-changing-button">Pc Builder</button>
          </div>
        </div>
      </div>
     
       
        <header id="navbar-header" className="">
        <div style={styles.container} id="logo-icon">
          <div style={styles.logo}>E-Shop</div>
          <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        </div>
          <nav ref={navRef}>
            <div
              className="container  d-flex flex-column justify-content-start align-items-start"
              onMouseLeave={handleMouseLeave}
            >
              <div className="d-flex flex-column  flex-lg-row text-start justify-content-start align-items-start">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className=" d-flex flex-column  hover-dropdown text-start justify-content-start align-items-start"
                  >
                    <div
                      className="option   pr-2 pt-2 pb-0 text-info text-start"
                      onMouseEnter={() => handleOptionChange(category)}
                    >
                      <li>{category.label || category}</li>
                    </div>

                    {selectedOptions.includes(category.label || category) &&
                      typeof category.subCategories !== "undefined" &&
                      category.subCategories.length > 0 && (
                        <div className="sub-options bg-danger d-flex flex-column">
                          {category.subCategories.map(
                            (subCategory, subIndex) => (
                              <div
                                key={subIndex}
                                className="option"
                                onMouseEnter={() =>
                                  handleSubOptionChange(subCategory)
                                }
                              >
                                <li>{subCategory.label || subCategory}</li>
                              </div>
                            )
                          )}
                        </div>
                      )}

                    {selectedOptions.includes(category.label || category) &&
                      typeof category.subCategories !== "undefined" &&
                      category.subCategories.length > 0 &&
                      typeof category.subCategories[0] === "object" &&
                      category.subCategories[0].label &&
                      selectedOptions.includes(
                        category.subCategories[0].label
                      ) && (
                        <div className="sub-sub-options d-flex flex-column">
                          {category.subCategories[0].subOptions.map(
                            (subSubCategory, subSubIndex) => (
                              <div
                                key={subSubIndex}
                                className="option "
                                onMouseEnter={() =>
                                  handleSubSubOptionChange(subSubCategory)
                                }
                              >
                                <li>{subSubCategory}</li>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>

            <button className="nav-btn nav-close-btn pt-0 mt-0" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </header>
      </div>
  );
};

export default NavbarC;
