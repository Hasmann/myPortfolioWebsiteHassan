import "./timeline.styles.scss";

const Timeline = ({
  degree,
  grade,
  date,
  location,
  experience,
  experienceDetails,
}) => {
  return (
    <>
      <div className="experience-timeline">
        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <i></i>
          </div>
          <div className="vtimeline-block">
            <div class="vtimeline-content">
              {!experience ? (
                <div>
                  <h2>{degree}</h2> <h3>{grade}</h3>{" "}
                  <p className="timeline-date">{date}</p>
                  <p className="location">{location}</p>{" "}
                </div>
              ) : (
                <div>
                  <h2>{degree}</h2> <p className="timeline-date">{date}</p>
                  <p className="location">{location}</p>{" "}
                </div>
              )}

              {!experience ? (
                ""
              ) : (
                <ul>
                  {" "}
                  {experienceDetails.map((el, i) => {
                    return <li key={i}>{el}</li>;
                  })}{" "}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Timeline;
