import React from "react";

import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
// import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@mui/icons-material";
import { BsLayoutTextSidebar as SideBarButtonIcon } from "react-icons/bs";

const Navbar = ({ transitionSidebar }) => {
  return (
    <div className="header">
      
      <div className="SideBarDiv">
        <SideBarButtonIcon className="SideBar_button" onClick={transitionSidebar}/>
      </div>

      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/*category selection*/}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_item">
          <span className="header_itemLineOne">Hello Guest</span>
          <span className="header_itemLineTwo">Sign in</span>
        </div>
        <div className="header_item">
          <span className="header_itemLineOne">Returns</span>
          <span className="header_itemLineTwo">& Orders</span>
        </div>
        <div className="header_item">
          <span className="header_itemLineOne">Your</span>
          <span className="header_itemLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasket />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

