import React from "react";
import "./methodology.css";
import { systemOverview } from "../productScope/import";

function Methodology() {
  return (
    <div className='section__padding' id="methodology">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Methodology</h1>
      </div>
      
      <div className="raw-container">
        <div className="raw-flex">
          <div className="image-container">
            <img className="image" src={systemOverview} alt="systemOverview" />
          </div>

          <div className="paragraph-container">
            <p>
              The proposed E-learning application consists of 4 main components.
              They are:
            </p>
            <br />

            <ul>
              <li><strong>Sinhala letter writing component</strong></li>
              <li><strong>Letter-teaching component</strong></li>
              <li><strong>Shapes and color component</strong></li>
              <li><strong>Storytelling component</strong></li>
            </ul>
            <br />

            <p>
              The system overview consists of four key components aimed at
              enhancing early childhood education through modern technology.
            </p><br></br>
            <p>
              The <strong>Sinhala letter-writing component</strong> introduces children to Sinhala letters
              through engaging videos and interactive animation, allowing them to
              physically write letters on a mobile screen with audibly presented
              examples and constructive feedback. Convolutional Neural Networks (CNN)
              and Optical Character Recognition (OCR) techniques ensure accurate
              recognition of written letters.</p>
            <br></br><p> The <strong>Letter-teaching component</strong>
              associates Sinhala letters with corresponding images of objects,
              encouraging hands-on participation and utilizing CNN technology for
              image analysis and personalized feedback.</p><br></br>
            <p> The <strong>Shapes and Color
              component</strong>  leverages advanced technologies to teach shapes and colors,
              enabling children to draw shapes on the screen and improve their skills
              through feedback.</p><br></br>
            <p> The <strong>Storytelling component</strong> uses datasets like
              CoCo 2017 and Writing Prompts to generate stories, preprocesses
              text and images, and applies neural network models to create engaging
              educational content. These components collectively aim to provide an
              interactive and effective learning experience for young children while
              incorporating modern technology and feedback mechanisms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;