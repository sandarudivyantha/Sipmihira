import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/sipmihira_logo.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <div className="dropdown">
      <p style={{ color: "black" }}>Project Scope</p>
      <div className="dropdown-content">
        <a href="#project-scope-a">Literature Survey</a>
        <a href="#project-scope-b">Research Gap</a>
        <a href="#research-problmes">Research Problem & Solution</a>
        <a href="#researchObjectives">Research Objectives</a>
        <a href="#methodology">Methodology</a>
        <a href="#technolog">Technologies</a>
      </div>
    </div>
    <p><a href="#milestones">Milestones</a></p>
    <div className="dropdown">
      <p style={{ color: "black" }}>Downloads</p>
      <div className="dropdown-content">
        <a href="#documents">Documents</a>
        <a href="#presentations">Presentations</a>
      </div>
    </div>
    <p><a href="#blog">About Us</a></p>
    <p><a href="#contactUs">Contact Us</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sipmihira__navbar ${isNavbarVisible ? '' : 'hidden'}`}>
      <div className='sipmihira__navbar-links'>
        <div className='sipmihira__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="sipmihira__navbar-menulist">
        <Menu />
      </div>

      <div className="sipmihira__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="sipmihira__navbar-menu_container scale-up-center">
            <div className="sipmihira__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
