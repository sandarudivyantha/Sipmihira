import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06 } from './imports';
import './aboutUs.css';

const AboutUs = () => (
  <div className="sipmihira__blog section__padding" id="blog">
    <div className="sipmihira__blog-heading">
    <div className="gpt3__header-content">
        <h1 className="gradient__text" style={{ fontSize: '43px' }}>About Us </h1><br/>
      </div>
      <h3 className="subHeadindg2 h3">Meet Our Team !</h3>
    </div>
    <div className="sipmihira__blog-container">
      <div className="sipmihira__blog-container_groupB">
        <Article imgUrl={blog01} name="Ms. Suriyaa Kumari" status="Supervisor" possision="Lecturer" campus="Sri Lanka Institute of Information Technology" department="Department" department_possion="Faculty Of Computing | Information Technology"/>
        <Article imgUrl={blog02} name="Mr. Supunya Swarnakantha" status="Co-Supervisor" possision="Lecturer" campus="Sri Lanka Institute of Information Technology" department="Department" department_possion="Faculty Of Computing | Information Technology"/>
      </div>
    </div><p style={{paddingBottom:'40px'}}></p><br/>
    <div className="sipmihira__blog-container">
      <div className="sipmihira__blog-container_groupB">
        <Article imgUrl={blog03} name="Saranga R.G.V." status="Developer" possision="Undergraduate" campus="Sri Lanka Institute of Information Technology" department="Department" department_possion="Computer Science & Software Engineering"/>
        <Article imgUrl={blog04} name="Divyantha U.A.S." status="Developer" possision="Undergraduate" campus="Sri Lanka Institute of Information Technology" department="Department" department_possion="Computer Science & Software Engineering"/>
        <Article imgUrl={blog05} name="Jayasinghe A.H.N." status="Developer" possision="Undergraduate" campus="Sri Lanka Institute of Information Technology" department="Department" department_possion="Computer Science & Software Engineering"/>
        <Article imgUrl={blog06} name="Lankani de Silva" status="Developer" possision="Undergraduate" campus="Sri Lanka Institute of Information Technology" department="Department" department_possion="Computer Science & Software Engineering"/>
      </div>
    </div>
  </div>
);

export default AboutUs;
