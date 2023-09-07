import Loader from "react-loaders";
import ModalBox from "../modal-box/modal-box.component";
import LettersAnimate from "../animation/animation.components";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
//redux action
import { fetchDataAction } from "../../redux/projectData/projectData.action";
import "./portfolio.styles.scss";

///////////
const Portfolio = ({ projectdata, data }) => {
  const [searchParams] = useSearchParams();
  /////
  const [query, setQuery] = useState(null);
  /////
  /////
  console.log("SEARCH PARAMS", searchParams.get("type"));
  /////
  console.log("project dataaa", data);
  ////
  const [letterClass, setLetterClass] = useState("text-animate");
  /// useEffect Hook
  useEffect(() => {
    projectdata(searchParams.get("type"));
    setQuery(searchParams.get("type"));
    searchParams.get("type");
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, [searchParams, projectdata]);
  ////
  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-text-zone">
          <h1>
            <LettersAnimate
              letterClass={letterClass}
              strArray={["M", "y", "", "P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
            />
          </h1>
          <div className="query-links">
            <Link
              to="/portfolio"
              className={`${
                query === null ? "quactive flat-button" : "flat-button"
              }`}
            >
              All
            </Link>
            <Link
              to="?type=backend"
              className={`${
                query === "backend" ? "quactive flat-button" : "flat-button"
              }`}
            >
              Back-End
            </Link>
            <Link
              to="?type=frontend"
              className={`${
                query === "frontend" ? "quactive flat-button" : "flat-button"
              }`}
            >
              Front-End
            </Link>
            <Link
              to="?type=fullstack"
              className={`${
                query === "fullstack" ? "quactive flat-button" : "flat-button"
              }`}
            >
              Full-Stack
            </Link>
          </div>
          <div className="modal-container">
            {data.map(({ projectName, image, link }, i) => {
              return (
                <ModalBox
                  key={i}
                  projectName={projectName}
                  image={image}
                  link={link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.portfolio.fetchedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectdata: (type) => dispatch(fetchDataAction(type)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
