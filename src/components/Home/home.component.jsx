import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import LettersAnimate from "./../animation/animation.components";
import LogoS from "./../../assets/images/HinHassanUpdate.png";
import Logo from "./Logo/logo.components";
import "./home.styles.scss";
import "./../animation/animations.styles.scss";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["a", "s", "s", "a", "n", ", "];
  const jobArray = [
    "F",
    "u",
    "l",
    "l",
    "-",
    "S",
    "t",
    "a",
    "c",
    "k",
    "",
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="Home-H1">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              className="logo-rotate"
              src={LogoS}
              alt="first letter of my first name"
            />
            <LettersAnimate
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <LettersAnimate
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full-Stack Developer / Backend-Developer / FrontEnd-Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo className={"logo-large"} />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
