// SearchArea.js
import React, { useState } from "react";
import Country from "./Country";
import Case from "./icons/briefcase.svg";
import Search from "./icons/search.svg";
import Modal from "./Modal"; // импортируем компонент модального окна
import "./Search.scss";

function SearchArea() {
  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обработчик для формы, предотвращающий перезагрузку страницы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Форма отправлена!");
  };

  // Открыть модальное окно
  const openModal = () => setIsModalOpen(true);

  // Закрыть модальное окно
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="search">
      <div className="search-area">
        <div className="logo">
          <img src={Case} alt="" />
          <h1 className="logo_h">Jobpilot</h1>
        </div>
        <form className="form-search" onSubmit={handleSubmit}>
          <Country />
          <div className="input-container">
            <img src={Search} alt="search-icon" className="search-icon" />
            <input className="search-text" type="text" placeholder="Job title, keyword, company" />
          </div>
        </form>
        <button className="sign-btn" type="submit">Sign In</button>
        <button className="post-btn" onClick={openModal}>Post a Job</button>
      </div>
      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default SearchArea;
