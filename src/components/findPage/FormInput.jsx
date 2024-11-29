import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./FormInput.scss";
import search from "../icons/search.svg";
import map from "../icons/map-pin.svg";
import shoot from "../icons/shoot.svg";
import filter from "../icons/filter.svg";

function Form() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate("/job-details", { state: { jobTitle, location } });
  };

  return (
    <div className="form-inputs">
      <div className="form-input">
        <img src={search} alt="search icon" />
        <input
          className="input__job"
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <img src={map} alt="location icon" />
        <input
          className="input__job"
          type="text"
          placeholder="City, state or zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <img src={shoot} alt="shoot icon" />
        <button className="input_jobs_btn">
          <img src={filter} alt="filter icon" /> Filters
        </button>
        <button className="input_job_btn" onClick={handleSubmit}>
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default Form;
