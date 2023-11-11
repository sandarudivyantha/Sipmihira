import React from 'react';
import logo from '../../assets/sipmihira_logo.png';
import './footer.css';

const Footer = () => (
  <div className="sipmihira__footer section__padding">
 
    <div className="sipmihira__footer-links">
   
      <div className="sipmihira__footer-links_logo">
      <div className='sipmihira__footer-logo'>
        <img  src={logo} alt="logo" />
        </div >
        <p>Malabe colombo Sri Lanka <br /> All Rights Reserved</p>
      </div>
      <div className="sipmihira__footer-links_div">
        <h4>Social Media </h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Linkedin</p>
        <p>Twitter</p>
        <p></p>
      </div>
      <div className="sipmihira__footer-links_div">
        <h4>Company Mission Statement</h4>
        <p>Commitment to Excellence </p>
        <p>Social Responsibility</p>
        <p>Customer-Centric Approach</p>
      </div>
      <div className="sipmihira__footer-links_div">
        <h4>Get in touch</h4>
        <p>Malabe  colombo Sri Lanka</p>
        <p>0713 141 728</p>
        <p>info.sipmihira@gmail.com</p>
      </div>
    </div>

    <div className="sipmihira__footer-copyright">
      <p>@2023 සිප්මිහිර . All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
