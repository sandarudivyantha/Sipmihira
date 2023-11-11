import React from "react";
import { researchProblems } from "../import";
import "./researchProblem.css";

function ReseacrhProblem() {
  return (
    <div className="gpt3__header section__padding" id="research-problmes">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Problem & Solution</h1>
      </div>
      <div className="raw-container">
        <div className="raw-flex2">
          <div className="paragraph-container">
            <div className="image-container2">
              <img
                className="image2"
                src={researchProblems}
                alt="researchProblems"
              />
            </div>
            <h2>Research Problems</h2>
            <br></br>
            <p className="gap">
              The primary research problems revolve around developing a
              comprehensive mobile application for preschoolers to learn Sinhala
              letters, shapes, and storytelling. <br></br> <br></br>
              Challenges include ensuring effective engagement and understanding
              of educational content, providing clear voice guidance,
              facilitating interactive letter-writing tasks, and incorporating
              user-generated images for personalized feedback.<br></br>
              <br></br> Additionally, the generation of meaningful stories from
              disjoint images presents a challenge in maintaining coherence and
              relevance, especially when translated into Sinhala.
            </p>
          </div>
          <br></br>

          <div className="paragraph-container">
            <h2>Solutions</h2>
            <p className="gap">
              To address these challenges, the mobile application should focus
              on refining the user interface for intuitive navigation and
              incorporate interactive elements such as touch-based letter
              writing and color-selecting exercises.<br></br>
              <br></br>
              Clear voice guidance throughout the learning process is crucial,
              and incorporating feedback mechanisms for user-uploaded images can
              enhance personalization.<br></br>
              <br></br> For the storytelling component, implementing advanced
              image feature extraction and utilizing Bidirectional Gated
              Recurrent Unit (GRU) for caption and story generation can improve
              the coherence of the generated content.<br></br>
              <br></br>
              Translation to Sinhala and audio output should be optimized for
              accurate and engaging delivery, ensuring a holistic and effective
              learning experience for preschoolers.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ReseacrhProblem;
