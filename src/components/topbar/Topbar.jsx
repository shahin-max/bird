import React from "react";
import "./topbar.css";
import { NotificationsNone, ArrowDropDown } from "@material-ui/icons";
import logo from '../../images/logo.png'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img src={logo} alt="logo" style={{width:'80px',height:"80px"}}/>
          <span style={{color:"white",position:"absolute",marginTop:"25px"}}>Ramaera Industries</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
           
            <span className="topText">English(UK)</span><ArrowDropDown/>
          </div>
         
         
        </div>
      </div>
    </div>
  );
}
