import { timelineData } from "../../data/timelineData";
import TimelineItem from "./TimelineItem";
import "./timeline.css";

const Timeline = ({ year }) =>
  timelineData.length > 0 && (
    <div className="timeline">
      <div className="timeline__wrapper">
        {timelineData
          .filter((data) => data.value >= year[0] && data.value <= year[1])
          .sort((a, b) => b.value - a.value)
          .map((data, index) => (
            <TimelineItem timelineData={data} key={index} />
          ))}
      </div>
    </div>
  );

export default Timeline;
