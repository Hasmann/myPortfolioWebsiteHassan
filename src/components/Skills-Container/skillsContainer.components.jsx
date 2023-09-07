import "./skillsContainer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SkillsContainer = ({ name, Icon, color }) => {
  return (
    <>
      <div class="skills-container">
        <span>
          {name} <FontAwesomeIcon icon={Icon || ""} color={color || "blue"} />
        </span>
      </div>
    </>
  );
};

export default SkillsContainer;
