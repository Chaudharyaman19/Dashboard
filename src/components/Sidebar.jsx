import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaTh,
  FaShoppingCart,
  FaThList,
  FaUserAlt,
  FaChevronDown, // Import the dropdown arrow icon
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar({ children, darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggle = () => setIsOpen(!isOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state between true and false
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh className="icon-dashboard" />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt className="icon-about" />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar className="icon-analytics" />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt className="icon-comment" />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingCart className="icon-product" />,
    },
    {
      path: "/productlist",
      name: "ProductList",
      icon: <FaThList className="icon-productlist" />,
    },
  ];

  const dropdownItems = [
    { path: "/setting", name: "Profile Settings" },
    { path: "/account", name: "Account Settings" },
    { path: "/privacy", name: "Privacy Settings" },
  ];

  return (
    <div
      className={` ${isOpen ? "open" : ""},`}
      style={{
        width: "100%",
        position: "fixed",
        display: "flex",
      }}
    >
      <div
        style={{
          // Fixes the sidebar position

          zIndex: 999,
          width: isOpen ? "250px" : "50px",
          transition: "width 0.3s ease",
          // Keeps it above other elements
        }}
        className={`sidebar ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } ${isOpen ? "open" : ""}`}
      >
        <div className="top_section">
          <h1
            style={{
              display: isOpen ? "block" : "none",
              transition: "display 0.3s ease",
            }}
            className={`logo  ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            } ${isOpen ? "open" : ""}`}
          >
            Dashboard
          </h1>
          <div
            style={{ marginLeft: isOpen ? "25px" : "0px" }}
            className="bars"
            onClick={toggleSidebar}
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div
              className={`icon  ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } ${isOpen ? "open" : ""}`}
            >
              {item.icon}
            </div>
            <div
              className={`link_test  ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } ${isOpen ? "open" : ""}`}
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}

        {/* Dropdown Section */}
        <div className="dropdown">
          <div
            className="dropdown_header"
            onClick={toggleDropdown}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaUserAlt className="icon" />
            <span
              className="link_text"
              style={{ display: isOpen ? "block" : "none", marginLeft: "10px" }}
            >
              Settings
            </span>
            {/* Dropdown Arrow */}
            <FaChevronDown
              style={{
                marginLeft: "10px",
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", // Rotate the arrow when the dropdown is opened
                transition: "transform 0.3s ease", // Smooth transition for rotation
              }}
            />
          </div>

          {isDropdownOpen && (
            <div
              className="dropdown_menu"
              style={{
                display: isOpen ? "block" : "none",
                marginLeft: isOpen ? "20px" : "0",
                transition: "margin-left 0.3s ease",
              }}
            >
              {dropdownItems.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="dropdown_item"
                  style={{
                    padding: "4px 10px",

                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

export default Sidebar;
