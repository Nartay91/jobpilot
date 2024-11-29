import React from "react";
import "./Main.scss";
import google from "./icons/google.svg"

const jobs = [
  {
    title: "Technical Support Specialist",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Senior UX Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Marketing Officer",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Junior Graphic Designer",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Interaction Designer",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Visual Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Project Manager",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Front End Developer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Marketing Manager",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Marketing Manager",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  },
  {
    title: "Marketing Manager",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh"
  }
];


const JobCard = ({ title, type, salary, company, location }) => (
  <div className="job-card">
    <h3 className="header_jobs">{title}</h3>
    <div className="types">
        <p className="green">{type}</p>
        <p><strong>Salary:</strong> {salary}</p>
    </div>
    <div className="jobs_info">
        <div className="img_job">
            <img src={google} alt="" />
        </div>
        <div className="location_jobs">
            <p><strong></strong> {company}</p>
            <p><strong></strong> {location}</p>
        </div>
    </div>
  </div>
);

const Jobcard = () => (
  <div className="job-list">
    {jobs.map((job, index) => (
      <JobCard 
        key={index} 
        title={job.title}
        type={job.type}
        salary={job.salary}
        company={job.company}
        location={job.location}
      />
    ))}
  </div>
);

export default Jobcard;


