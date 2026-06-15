import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectionMenu, setSelectionMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectionMenu(index);
  };

  const handleProfileClick = () => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    
    window.location.href = "https://zerodhafrontend-cg69.onrender.com";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectionMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectionMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectionMenu === 2 ? activeMenuClass : menuClass}>Holding</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectionMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectionMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectionMenu === 5 ? activeMenuClass : menuClass}>Sell</p>
            </Link>
          </li>
        </ul>
        <hr />

       

        {/* Sirf logout button add kiya */}
        <p 
          onClick={handleLogout} 
          style={{
            cursor: "pointer",
            color: "red",
            fontSize: "14px",
            marginTop: "10px",
            paddingLeft: "10px"
          }} 
        >
          Home
        </p>

      </div>
    </div>
  );
};

export default Menu;