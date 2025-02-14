import React from "react";
import { Link } from "react-router-dom";
import Button from './Button';
import "./Header.scss"

function Header () {
    return (
        <div className="header">
            <nav className="header-top">
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>  {/* Переход на главную страницу */}
                    <li><Link to="/find-job">Find Job</Link></li>  {/* Переход на FindJob */}
                    <li>Employers</li>
                    <li>Candidates</li>
                    <li>Pricing Plans</li>
                    <li>Customer Supports</li>
                </ul>
                <div className="header__phone">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66965 9.7014C6.44762 11.2919 7.73687 12.5753 9.3309 13.346C9.44753 13.4013 9.57654 13.4252 9.70523 13.4155C9.83392 13.4058 9.95786 13.3627 10.0648 13.2905L12.4119 11.7254C12.5157 11.6562 12.6352 11.6139 12.7594 11.6025C12.8837 11.5911 13.0088 11.6109 13.1235 11.66L17.5144 13.5419C17.6636 13.6052 17.7881 13.7154 17.8693 13.8556C17.9504 13.9959 17.9838 14.1588 17.9643 14.3197C17.8255 15.4057 17.2956 16.4039 16.4739 17.1273C15.6521 17.8508 14.5948 18.2499 13.5 18.25C10.1185 18.25 6.87548 16.9067 4.48439 14.5156C2.0933 12.1245 0.75 8.88148 0.75 5.49997C0.750058 4.40513 1.14918 3.34786 1.87264 2.5261C2.5961 1.70435 3.59428 1.17448 4.68028 1.03569C4.84117 1.01622 5.00403 1.04956 5.14432 1.1307C5.28461 1.21183 5.39473 1.33636 5.4581 1.48552L7.34158 5.88032C7.3903 5.994 7.41015 6.11796 7.39936 6.24116C7.38858 6.36436 7.3475 6.48299 7.27977 6.58647L5.72011 8.96957C5.64912 9.07677 5.60716 9.20056 5.59831 9.32883C5.58947 9.4571 5.61405 9.58547 5.66965 9.7014V9.7014Z" stroke="#18191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>+1-202-555-0178</p>
                </div>
                <div className="header-bottom">
                 < Button />   
            </div>
            </nav> 
        </div>
    )
}

export default Header;