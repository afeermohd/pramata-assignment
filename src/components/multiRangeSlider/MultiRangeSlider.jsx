import React from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./multiRangeSlider.css";
import { timelineData } from "../../data/timelineData";
const SliderComp = withStyles({
  root: {
    color: "#5eb3cc",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const MultiRangeSlider = ({ year, yearSet }) => {
  const handleChange = (event, newValue) => {
    yearSet(newValue);
  };

  const minYear = timelineData.sort((a, b) => a.value - b.value)[0].value;
  const maxYear = timelineData.sort((a, b) => b.value - a.value)[0].value;

  return (
    <div className="multiRangeSlider">
      <div className="multiRangerSlider__wrapper">
        <div style={{ fontStyle: "italic", color: "#b9b9b9  " }}>
          Select focus year
        </div>
        <SliderComp
          value={year}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={minYear}
          max={maxYear}
          marks={timelineData}
          step="1"
        />
      </div>
    </div>
  );
};

export default MultiRangeSlider;
