// Modal.js
import React from "react";
import "./Modal.scss";
import Pic from "./img/Illustration.png";
import Search1 from "./icons/search.svg";
import Map from "./icons/map-pin.svg";
import Case from "./icons/briefcase.svg";
import Building from "./icons/acc.svg";
import User from "./icons/users.svg"

// Компонент модального окна
const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Если модальное окно не открыто, не рендерим его

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="up_content">
            <div className="left-content">
                <h1 className="title_h">Find a job that suits<br/> your interest & skills.</h1>
                <p className="info_h">Aliquam vitae turpis in diam convallis finibus in at risus.
                    Nullam<br/> in scelerisque leo, eget sollicitudin velit bestibulum.
                </p>
                <form className="find_job_form">
                    <img src={Search1} alt="" />
                    <input className="info-input" type="text" placeholder="Job tittle, Keyword..." />
                    <img src={Map} alt="" />
                    <input className="info-input" type="text" placeholder="Your Location" />
                    <button type="submit" className="modal_btn">Find Job</button>
                </form>
            </div>
            <div className="right-content">
                <img src={Pic} alt="illustration" />
            </div>
        </div>
        <div className="down-content">
            <div className="live-job">
                <button className="pic_content">
                <img src={Case} alt="" />
                </button>
                <div className="info__p">
                    <p>175,134</p>
                    <p>Live Job</p>
                </div>
            </div>
            <div className="live-job">
                <button className="pic_content">
                <img src={Building} alt="" />
                </button>
                <div className="info__p">
                    <p>97,354</p>
                    <p>Companies</p>
                </div>
            </div>
            <div className="live-job">
                <button className="pic_content">
                <img src={User} alt="" />
                </button>
                <div className="info__p">
                    <p>38,243,475</p>
                    <p>Candidates</p>
                </div>
            </div>
            <div className="live-job">
                <button className="pic_content">
                    <img src={Case}  alt="" />
                </button>
               
                <div className="info__p">
                    <p>7,453</p>
                    <p>New Jobs</p>
                </div>
            </div>
        </div>
        <button className="modal_btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
