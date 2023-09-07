import "./resume.styles.scss";
import LettersAnimate from "../animation/animation.components";
import Loader from "react-loaders";
import { useState, useEffect } from "react";
import Timeline from "../Timeline/timeline.component";
const Resume = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  /// useEffect Hook
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container portfolio-page">
        <div className="resume-text-zone">
          <h1>
            <LettersAnimate
              letterClass={letterClass}
              strArray={["M", "y", "", "R", "e", "s", "u", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="main-box">
            <div className="left-box">
              <h2 className="resumeH2">
                <LettersAnimate
                  letterClass={letterClass}
                  strArray={["E", "d", "u", "c", "a", "t", "i", "o", "n"]}
                  idx={15}
                />
              </h2>
              <Timeline
                degree={"BSC. INFORMATION TECHNOLOGY."}
                grade={"FIRST CLASS HONORS."}
                date={"2022 - 2023"}
                location={"Middlesex University, London."}
              />
              <Timeline
                degree={"Advanced Diploma, Software Engineering."}
                grade={"Distinction."}
                date={"2020 - 2022"}
                location={"Aptech Meridian, Lagos, Nigeria."}
              />
            </div>
            <div className="right-box">
              <h2 className="resumeH2">
                <LettersAnimate
                  letterClass={letterClass}
                  strArray={[
                    "P",
                    "r",
                    "o",
                    "f",
                    "e",
                    "s",
                    "s",
                    "i",
                    "o",
                    "n",
                    "a",
                    "l",
                    "",
                    "E",
                    "x",
                    "p",
                    "e",
                    "r",
                    "i",
                    "e",
                    "n",
                    "c",
                    "e",
                  ]}
                  idx={15}
                />
              </h2>
              <Timeline
                degree={"FULLSTACK DEVELOPER"}
                date={"Feb 2022 - Jan 2023"}
                location={"Lane Limited"}
                experience={true}
                experienceDetails={[
                  "Successfully transformed design mock-ups into fully functional web applications by leveraging diverse web app services. Demonstrated proficient integration and consumption of REST web services to enhance application functionality.",
                  "Spearheaded the design, development, and maintenance of software applications utilising Java, Spring Boot, JavaScript, Node.js, Express.js, & React.js. Employed a Test-driven Development (TDD) approach to drive the reliability and resilience of applications.",
                  "Bolstered the organisation's testing code model, ensuring alignment with established requirements. Delivered dependable backend components and dynamic client solutions that aligned with project objectives.",
                  "Drove process enhancements across technical designs, user experience, and functional aspects. Facilitated an expansion of the continuous integration system and refined developer tools through insightful inputs and creative ideas.",
                  "Collaborated with interdisciplinary teams encompassing project managers, designers, and quality assurance engineers. Navigated cross-functional dynamics to craft and deliver high-calibre software solutions tailored to client specifications.",
                  "Adhered to coding standards and industry best practices, producing immaculate, streamlined, and maintainable code. Focused on code quality and efficiency to optimise application performance.",
                  "Leveraged strong client engagement skills to elicit and comprehend intricate business requirements. Formulated innovative software solutions that effectively addressed client needs, fostering lasting partnerships and satisfaction.",
                ]}
              />
              <Timeline
                degree={"SOFTWARE DEVELOPMENT INTERN"}
                date={"Aug 2021 - Feb 2022"}
                location={"Lane Limited"}
                experience={true}
                experienceDetails={[
                  "Facilitated the complete application lifecycle, with a primary focus on coding, debugging, troubleshooting, and enhancing the company's existing software.",
                  "Championed and successfully executed the migration from robust, monolithic backend applications to an efficient Microservices architecture, resulting in improved scalability and performance.",
                  "Gained hands-on experience in designing and developing service-oriented Java-based backend applications utilising RESTful APIs, enhancing overall system efficiency.",
                  "Contributed to the design, development, and testing of innovative solutions, including backend applications that streamlined front-end user interactions, enhancing user experience.",
                  "Expertly integrated third-party APIs and collaborated closely with backend engineers to define and implement RESTful API services, enhancing overall system functionality.",
                  "Executed the creation of novel features in alignment with the product roadmap while adhering to coding standards in collaboration with fellow backend engineers.",
                  "Conducted a comprehensive review of application requirements and project documentation, proactively seeking clarifications to ensure a thorough understanding of project specifications.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Resume;
