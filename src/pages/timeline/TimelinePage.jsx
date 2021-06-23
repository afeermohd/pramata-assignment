import { useState } from "react";
import "./timelinePage.css";
import Timeline from "../../components/timeline/Timeline";
import MultiRangeSlider from "../../components/multiRangeSlider/MultiRangeSlider";

const TimelinePage = () => {
  const [value, setValue] = useState([2005, 2007]);
  return (
    <div className="timelinepage">
      <h1>Timeline</h1>
      <MultiRangeSlider year={value} yearSet={setValue} min={2010} max={2021} />
      <Timeline year={value} />
    </div>
  );
};

export default TimelinePage;
