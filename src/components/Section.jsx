import React from "react";
import "./Section.scss";
import Acc from "./icons/acc.svg";
import circle from "./icons/circle-check.svg";
import cloud from "./icons/Cloud.svg";
import glass from "./icons/glass-plus.svg";
import arrow from "./icons/arrow-right.svg";
import building from "./icons/acc.svg";
import code from "./icons/code.svg";
import design from "./icons/design.svg";
import aid from "./icons/first-aid.svg";
import music from "./icons/music.svg";
import play from "./icons/play.svg";
import digital from "./icons/digital.svg";

function Section() {
    return (
        <div className="sections">
            <div className="section_1">
                <div className="header_sect">
                    <h1>How jobpilot work</h1>
                </div>
                <div className="section_ways">
                    <div className="section_way">
                        <div className="info_way">
                            <div  className="img_way">
                                <img src={Acc} alt="" />
                            </div>
                            <h3>Create account</h3>
                            <p>Aliquam facilisis egestas sapien,<br/> nec tempor leo tristique at.</p>
                    </div>
                    </div>
                    <div className="section_way">
                        <div className="info_way">
                            <div  className="img_way">
                                <img src={circle} alt="" />
                            </div>
                            <h3>Upload CV/Resume</h3>
                            <p>Aliquam facilisis egestas sapien,<br/> nec tempor leo tristique at.</p>
                        </div>
                    </div>
                    <div className="section_way">
                        <div className="info_way">
                            <div  className="img_way">
                                <img src={cloud} alt="" />
                            </div>
                            <h3>Find suitable job</h3>
                            <p>Aliquam facilisis egestas sapien,<br/> nec tempor leo tristique at.</p>
                        </div>
                    </div>
                    <div className="section_way">
                        <div className="info_way">
                            <div  className="img_way">
                                <img src={glass} alt="" />
                            </div>
                            <h3>Apply job</h3>
                            <p>Aliquam facilisis egestas sapien,<br/> nec tempor leo tristique at.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_2">
                <div className="header2">
                    <h1>Most Popular Vacancies</h1>
                </div>
                <div className="vacancy">
                    <div className="sub_vacancy">
                        <div className="sub_info">
                            <a href="#!">Anesthesiologists</a>
                            <p>45,904 Open Positions</p>
                        </div>
                        <div className="sub_info">
                            <a href="#!">Maxillofacial Surgeons</a>
                            <p>74,875 Open Positions</p>
                        </div>
                        <div className="sub_info">
                            <a href="#!">Financial Manager</a>
                            <p>61,391 Open Positions</p>
                        </div>
                    </div>
                    <div className="sub_vacancy">
                        <div>
                            <a href="#!">Gynecologists</a>
                            <p>4,339 Open Positions</p>
                        </div>
                        <div>
                            <a href="#!">Psychiatrists</a>
                            <p>18,599 Open Position</p>
                        </div>
                        <div>
                            <a href="#!">IT Manager</a>
                            <p>50,963 Open Positions</p>
                        </div>
                    </div>
                    <div className="sub_vacancy">
                        <div>
                            <a href="#!">Surgeons</a>
                            <p>50,364 Open Positions</p>
                        </div>
                        <div>
                            <a href="#!">Orthodontists</a>
                            <p>20,079 Open Positions</p>
                        </div>
                        <div>
                            <a href="#!">Software Developer</a>
                            <p>43359 Open Positions</p>
                        </div>
                    </div>
                    <div className="sub_vacancy">
                        <div>
                            <a href="#!">Data Scientist</a>
                            <p>28,200 Open Positions</p>
                        </div>
                        <div>
                            <a href="#!">Management Analysis</a>
                            <p>93,046 Open Positions</p>
                        </div>
                        <div>
                            <a href="#!">Operations Analysis</a>
                            <p>16,627 Open Positions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_3">
                <div className="header_3">
                    <h1>Popular category</h1>
                    <button className="header_3_btn">View All <img src={arrow} alt="arrow" /></button>
                </div>
                <div className="popular">
                    <div className="most_pop">
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={design} alt="" />
                            </div>
                            <div>
                                <a href="#!">Graphics & Design</a>
                                <p>357 Open position</p>
                                </div>
                            </div>
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={code} alt="" />
                            </div>
                            <div>
                                <a href="#!">Code & Programing</a>
                                <p>312 Open position</p>
                            </div>
                        </div>
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={digital} alt="" />
                            </div>
                            <div>
                                <a href="#!">Digital Marketing</a>
                                <p>297 Open position</p>
                            </div>
                        </div>
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={play} alt="" />
                            </div>
                            <div>
                                <a href="#!">Video & Animation</a>
                                <p>247 Open position</p>
                            </div>
                        </div>
                    </div>
                    <div className="most_pop">
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={music} alt="" />
                            </div>
                            <div>
                                <a href="#!">Music & Audio</a>
                                <p>204 Open position</p>
                            </div>
                        </div>
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={building} alt="" />
                            </div>
                            <div>
                                <a href="#!">Account & Finance</a>
                                <p>167 Open position</p>
                            </div>
                        </div>
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={aid} alt="" />
                            </div>
                            <div>
                                <a href="#!">Health & Care</a>
                                <p>125 Open position</p>
                            </div>
                        </div>
                        <div className="pop_vacancy">
                            <div>
                                <img className="pic_vacan" src={design} alt="" />
                            </div>
                            <div>
                                <a href="#!">Data & Science</a>
                                <p>57 Open position</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;