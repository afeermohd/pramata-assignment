import React from "react";
import "./timelineItem.css";

const TimelineItem = ({ timelineData }) => {
  return (
    <div className="timelineItem__container">
      {timelineData.content &&
        timelineData.content.map((data) => (
          <div className="timelineItem">
            <div className="timelineItem__time">
              <div className="timelineItem__dotted"></div>
              <div className="timelineItem__time">
                <time className="timelineItem__year">{timelineData.value}</time>
                <time className="timelineItem__date">{data.date}</time>
              </div>
            </div>
            <div className="timelineItem__wrapper">
              <div>
                <h3>{data.title}</h3>
                {data.info && data.info.add.map((item) => <div>+{item}</div>)}
                {data.info &&
                  data.info.change.map((item) => <div>~{item}</div>)}
                {data.info &&
                  data.info.delete.map((item) => <div>x{item}</div>)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TimelineItem;
