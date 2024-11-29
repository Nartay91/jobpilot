import React from "react";
import Country from "../Country";
import Case from "../icons/briefcase.svg";
import Search from "../icons/search.svg";
import bell from "../icons/Bell.svg";
import Ellipse from "../icons/Ellipse.svg"
import "../Search.scss";

function SearchArea() {
  return (
    <div className="search">
      <div className="search-area">
        <div className="logo">
          <img src={Case} alt="" />
          <h1 className="logo_h">Jobpilot</h1>
        </div>
        <form className="form-search">
          <Country />
          <div className="input-container">
            <img src={Search} alt="search-icon" className="search-icon" />
            <input className="search-text" type="text" placeholder="Job title, keyword, company" />
          </div>
        </form>
        <img className="bell_icon" src={bell} alt="" />
        <img className="ellipse_icon" src={Ellipse} alt="" />
      </div>
    </div>
  );
}

export default SearchArea;
