import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi! I'm Leigh.</h2>
        <div className="prompt">
          <p>
            I'm a full-stack software engineer who loves learning and creating.
          </p>
          <p>
            {" "}
            My career has taken me from teaching high school science to
            developing computer science curriculum, and I've now fully
            transitioned to web development with a passion for creating products
            that engage and delight users. I'd love to connect with people and
            organizations who are committed to advancing outcomes for women and
            minorities in tech.
          </p>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/leigh-ryffel/")
            }
          />
          <EmailIcon
            onClick={() => window.open("mailto:leightryffel@gmail.com")}
          />
          <GithubIcon
            onClick={() => window.open("https://github.com/leighryffel")}
          />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Ruby on Rails, MySQL, PostgreSQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Ruby, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
