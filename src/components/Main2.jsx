import React from "react";
import "./Main2.scss";
import Camp from "./icons/campus.svg";

const companies = [
  {
    name: "Dribbble",
    isFeatured: true,
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
  {
    name: "Dribbble",
    isFeatured: true,
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
  {
    name: "Dribbble",
    isFeatured: true,
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
  {
    name: "Dribbble",
    isFeatured: true,
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
  {
    name: "Dribbble",
    isFeatured: true,
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
  {
    name: "Dribbble",
    isFeatured: true,
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
];

const CompanyCard = ({ name, isFeatured, location, openPositions }) => (
    <div>
        <div className="company-card">
            <div className="down">
            <div className="icon-placeholder">
                <img src={Camp} alt="" />
            </div>
        <div className="company-info">
            <h3>{name} {isFeatured && <span className="featured">Featured</span>}</h3>
            <p>{location}</p>
        </div>
        </div>
        <a className="opens_comp" href="#!">{`Open Positions (${openPositions})`}</a>
    </div>
  </div>
);

const Cardscomp = () => (
  <div className="company-list">
    <h1 className="header_list">Top companies</h1>
    <div className="lists">
    {companies.map((company, index) => (
      <CompanyCard
        key={index}
        name={company.name}
        isFeatured={company.isFeatured}
        location={company.location}
        openPositions={company.openPositions}
      />
    ))}
    </div>
  </div>
);

export default Cardscomp;
