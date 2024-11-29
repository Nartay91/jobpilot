import React, { useState } from "react";
import "../Main.scss";
import google from "../icons/google.svg";
import { jobs } from "../data/JobData"; // Импортируем данные

const JobCard = ({ title, type, salary, company, location }) => (
  <div className="job-card">
    <h3 className="header_jobs">{title}</h3>
    <div className="types">
      <p className="green">{type}</p>
      <p><strong>Salary:</strong> {salary}</p>
    </div>
    <div className="jobs_info">
      <div className="img_job">
        <img src={google} alt="Google" />
      </div>
      <div className="location_jobs">
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
    </div>
  </div>
);

const Jobcard = () => {
  // Стейт для текущей страницы и кол-ва элементов на странице
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const currentJobs = jobs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1); // Генерация чисел для страниц

  return (
    <div className="job-col">
    <div className="job-list">
      {currentJobs.map((job, index) => (
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
    {/* Кнопки пагинации с цифрами */}
    <div className="pagination">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`page-btn ${currentPage === page - 1 ? "active" : ""}`} 
            onClick={() => handlePageChange(page - 1)}
            onMouseEnter={(e) => e.target.classList.add('hover')}
            onMouseLeave={(e) => e.target.classList.remove('hover')}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Jobcard;
