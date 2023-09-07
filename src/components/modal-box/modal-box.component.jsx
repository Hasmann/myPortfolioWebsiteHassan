import "./modal-box.styles.scss";
import { Link } from "react-router-dom";
const ModalBox = ({ projectName, image, link }) => {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src={image} alt="modal-img" />
          <div className="overlay-container">
            <p>{projectName}</p>
          </div>
        </div>
        <div className="text-container">
          <span className="project-name">{projectName}</span>
          <span className="view-button">
            <Link to={link}>
              <button>View</button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalBox;
