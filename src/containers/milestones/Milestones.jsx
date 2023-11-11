import React from 'react';
import './milestones.css';
import { ReactComponent as WorkIcon } from "./sipmihira-work.svg";


import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Milestones() {
  let workIconStyles = { background: "#fff" };

  return (

    <div className="sipmihira__blog section__padding" id="milestones">
      <br /><br />
      <div className="gpt3__header-content">
        <h1 className="gradient__text" style={{ fontSize: '43px' }}>Milestones</h1>
      </div>
      <br />
      <h2>Timeline in Brief</h2><br />
      <div className='sipmihira__timeline'>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={workIconStyles}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Milestones;
