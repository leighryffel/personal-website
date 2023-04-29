import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Chicago
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
          <p>Bachelor of Arts in Biology, French Minor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Harvard Graduate School of Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cambridge, MA</h4>
          <p>Masters of Education, Teaching and Curriculum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Partnerships Manager - Edhesive
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>
            Drove initiatives to get high-quality computer science curriculum into nearly 2500 high school and middle school classrooms.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Product Manager - Project STEM
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>
            Led product development for engaging computer science resources in topics including Python, Java, Scratch, and Artificial Intelligence.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Flatiron School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>Certificate, Full-Stack Software Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
