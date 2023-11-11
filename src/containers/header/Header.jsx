import React from 'react';
import './header.css';
import sipmihira_key from '../../assets/sipmihira_key.png';
import sipmihira_home_first from '../../assets/sipmihira_home_first.gif';

const Header = () => {
  return (
    <div className="sipmihira__header section__padding" id="home">
    <div className="sipmihira__header-content">
      <h1 className="gradient__text">Where Classrooms Become Homes</h1>
      <p> "The transformation of traditional teaching into home learning has redefined the boundaries of education by enabling students to bring the classroom experience into the comfort of their own homes. With the advancement of technology and online resources, we enable students to have access to a wealth of educational materials and interactive ways."</p>

        <div className="sipmihira__header-content__people">
          <img src={sipmihira_key} alt="sipmihira_key" />
          <p className="app__header-h1">Key To The future</p>
        </div>
      </div>

      <div className="sipmihira__header-image">
        <img src={sipmihira_home_first} alt="sipmihira_home_first" />
      </div>
    </div>
  )
}

export default Header