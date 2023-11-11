import React from "react";
import "./objective.css";

const ResearchObjectives = () => {
  return (
    <div className="gpt3__header section__padding" id="researchObjectives">
      <div className="gpt3__header-content">
        <h1 class="gradient__text">Research Objectives</h1>
      </div>
      <div className="research-objectives">
        <div className="objective">
          <p className="objectives_header"> Sinhala Letter Writting </p>{" "}
          <br></br>
          <p className="gap">
            {" "}
            he main objectives and specific objectives of this research
            component revolve around the development of an innovative and
            technologically advanced Sinhala language learning platform for
            young children. By leveraging OpenCV, TensorFlow, Keras, CNN, and
            MobileNet pretrained models, the research aims to create a dynamic
            and engaging learning experience that enhances Sinhala character
            writing skills while promoting digital literacy
          </p>
        </div>
        <div className="half-border"></div>
        <div className="objective">
          <p className="objectives_header">Sinhala Letter Teaching</p> <br></br>
          <p className="gap">
            The primary objective of this endeavor is to develop a mobile-based
            solution dedicated to fostering the acquisition of the Sinhala
            language among preschool children. This holistic approach aims to
            nurture both linguistic proficiency and creative thinking, enhancing
            their capabilities in childcare and future professional endeavors
            through active interaction with the platform.
          </p>
        </div>
        <div className="half-border"></div>
        <div className="objective">
          <p className="objectives_header">Colors And Shapes detection </p>{" "}
          <br></br>
          <p className="gap">
            The research goals serve as the core of our study, enabling us to
            conduct a thorough examination of the multifaceted effects of the
            Shape and Color component within our mobile application. Through
            careful evaluation and deep analysis, our aim is to provide
            substantial contributions to the realm of young childhood education
            for the Sinhala children. Our ambition is to shed light on the
            educational, cultural, technological, and enduring consequences of
            integrating this component, thereby offering valuable perspectives
            to the field.
          </p>
        </div>
        <div className="half-border"></div>
        <div className="objective">
          <p className="objectives_header">Storytelling </p> <br></br>
          <p className="gap">
            {" "}
            The proposed system will be able to generate narratives using an
            input image. The generated stories can be listened to by the
            children in Sinhala. So, they can improve their thinking knowledge
            to describe a single image according to the features in the image.
            It will improve the child's creativity and thinking knowledge which
            will help in future education.
          </p>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default ResearchObjectives;
