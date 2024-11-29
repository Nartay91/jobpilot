import React from 'react';
import './JobDescription.scss';
import location from "../icons/location.svg";
import big_facebook from '../icons/facebook-big.svg';
import book from "../icons/book.png";
import calendar from "../icons/calendar.svg";
import suit from "../icons/briefcase.svg";
import timer from "../icons/timer.svg";
import stack from "../icons/Stack.svg";
import wallet from "../icons/wallet.svg";
import post from "../icons/post.svg";
import linked from "../icons/linkedin.svg";
import twitter from "../icons/twitter.svg";



const JobDescription = () => {
  return (
    <div className="job__chapter">
    <div className="job-container">
      <div className="job-header">
        <div className="big_facebook">
        <img src={big_facebook} alt="" />
        </div>
        <div className="right_side">
        <h1>Senior UX Designer</h1>
        <div className="describe__">
          <h3>at Facebook</h3>
          <span className="badge full-time">FULL-TIME</span>
          <span className="badge featured">Featured</span>
        </div>
        </div>
      </div>

      <section className="job-section">
        <h2>Job Description</h2>
        <p>
          Velstar is a Shopify Plus agency, and we partner with brands to help them grow; we also do the same with our people!
        </p>
        <p>
          Here at Velstar, we don’t just make websites; we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
        </p>
        <p>
          The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work within the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional and non-functional requirements. You will have the opportunity to create new, innovative, secure, and scalable features for our clients on the Shopify platform.
        </p>
        <p><strong>Want to work with us? You’re in good company!</strong></p>
      </section>

      <section className="job-section">
        <h2>Requirements</h2>
        <ul>
          <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on.</li>
          <li>3+ years of experience in back-end development working on multiple smaller projects or large-scale applications.</li>
          <li>Experience with HTML, JavaScript, CSS, PHP, Symfony, and/or Laravel.</li>
          <li>Working regularly with APIs, Web Services (REST, GraphQL, SOAP, etc.).</li>
          <li>Familiarity with version control systems such as Git.</li>
          <li>Great troubleshooting skills in complex environments.</li>
          <li>Proactive and hungry to grow and improve.</li>
        </ul>
      </section>
      <section className="job-section">
        <h2>Desirable</h2>
        <ul>
          <li>Experience with Shopify.</li>
          <li>Familiarity with design tools like Figma or Sketch.</li>
        </ul>
      </section>
    </div>


     <div className="job-card__">
      <div className="apply_btn">
        <div className="book__">
          <img src={book} alt="" />
        </div>
        <button className="btn__apply">Apply Now
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>
     <div className="header_salary">
       <div className="salary">
         <p className="label">Salary (USD)</p>
         <h3 className="value">$100,000 - $120,000</h3>
         <p className="sub-label">Yearly salary</p>
       </div>
       <div className="location">
           <img src={location} alt="" />
         <p className="label">Job Location</p>
         <p className="value__">Dhaka, Bangladesh</p>
       </div>
     </div>

     <div className="overview">
      <div className="row_1">
       <div className="item">
         <img src={calendar} alt="" />
         <div>
           <p>Job Posted:</p>
           <p>14 Jun, 2021</p>
         </div>
       </div>
       <div className="item">
         <img src={timer} alt="" />
         <div>
           <p>Job Expire In:</p>
           <p>14 Aug, 2021</p>
         </div>
       </div>
       <div className="item">
         <img src={stack} alt="" />
         <div>
           <p>Job Level:</p>
           <p>Entry Level</p>
         </div>
       </div>
       </div>
       <div className="row_2">
       <div className="item">
         <img src={suit} alt="" />
         <div>
           <p>Experience:</p>
           <p>$50k-80k/month</p>
         </div>
       </div>
       <div className="item">
         <img src={wallet} alt="" />
         <div>
           <p>Education:</p>
           <p>Graduation</p>
         </div>
       </div>
       </div>
     </div>

     <div className="share">
       <p>Share this job:</p>
       <div className="links">
         <button className="link_copy">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.81787 15.1811L15.1818 8.81714" stroke="#0A65CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5904 16.7729L10.9388 19.4245C10.0948 20.2682 8.95028 20.7421 7.75694 20.742C6.5636 20.7419 5.41916 20.2678 4.57534 19.424C3.73152 18.5802 3.25743 17.4357 3.25732 16.2424C3.25722 15.0491 3.73112 13.9045 4.5748 13.0606L7.22645 10.4089" stroke="#0A65CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7727 13.5904L19.4243 10.9388C20.268 10.0948 20.7419 8.95028 20.7418 7.75694C20.7417 6.5636 20.2676 5.41916 19.4238 4.57534C18.5799 3.73152 17.4355 3.25743 16.2422 3.25732C15.0488 3.25722 13.9043 3.73112 13.0603 4.5748L10.4087 7.22645" stroke="#0A65CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  
          Copy Link
         </button>
         <button className="btn-socials"><img src={twitter} alt="" /></button>
         <button className="btn-socials"><img src={linked} alt="" /></button>
         <button className="btn-socials"><img src={post} alt="" /></button>
       </div>
     </div>
   </div>
   </div>
  );
};

export default JobDescription;