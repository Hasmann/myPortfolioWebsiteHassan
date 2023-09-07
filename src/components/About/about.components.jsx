import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  faJava,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import LettersAnimate from "../animation/animation.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.styles.scss";
import "./about.styles.scss";
import SkillsContainer from "../Skills-Container/skillsContainer.components";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="about-text-zone">
          <h1>
            <LettersAnimate
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p className="about-text">
            Innovative and solutions-driven Full Stack Software Developer
            (JavaScript, TypeScript, Java) offering a proven background in the
            full software development lifecycle – from concept through delivery
            of next-generation applications and customisable solutions.
          </p>
          <p className="about-text" align="LEFT">
            Passionate about designing and building scalable software systems,
            delivering delightful experiences, and leadership through thoughtful
            collaboration. Expert in advanced development methodologies, tools
            and processes contributing to the design and rollout of cutting-edge
            web applications
          </p>
          <p className="about-text">
            I'm confident, naturally curious, and perpetually working on
            improving my chops one endpoint, and design problem at a time. If I
            need to define myself in one sentence that would be a go-getter, an
            outdoors lover, and tech-obsessed!!!
          </p>
          <SkillsContainer
            name={"JavaScript"}
            Icon={faJsSquare}
            color={"#EFD81D"}
          />
          <SkillsContainer name={"TypeScript"} />
          <SkillsContainer name={"Java"} Icon={faJava} color={"red"} />
          <SkillsContainer name={"NodeJs"} Icon={faNodeJs} color={"#00FF00"} />
          <SkillsContainer name={"ReactJs"} Icon={faReact} color={"blue"} />
          <SkillsContainer name={"Redux"} />
          <SkillsContainer name={"HTML"} Icon={faHtml5} color={"red"} />
          <SkillsContainer name={"CSS"} Icon={faCss3} color={"blue"} />
          <SkillsContainer name={"Microservices"} />
          <SkillsContainer name={"Docker"} Icon={faDocker} color={"blue"} />
          <SkillsContainer name={"Git"} Icon={faGitAlt} color={"red"} />
          <SkillsContainer name={"AWS"} Icon={faAws} color={"gold"} />
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#00FF00" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#ff0000" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
