import { ArrowBackIos, KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import "./sidebarExt.css";

const SidebarExt = () => {
  return (
    <div className="sidebarExt">
      <h3 className="sidebarExt__title">Relationship</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "lightgray",
          margin: "0 5px",
        }}
      >
        <ArrowBackIos />
        <h3 className="sidebarExt__titlesub">National Bank</h3>
        <KeyboardArrowDown />
      </div>
      <div className="sidebarExt__menu">
        <ul className="sidebarExt__list">
          <li className="sidebarExt__listItem">Overview</li>
          <li className="sidebarExt__listItem">Document Family</li>
          <li className="sidebarExt__listItem active">Timeline</li>
          <li className="sidebarExt__listItem">Documents</li>
          <li className="sidebarExt__listItem">Alerts</li>
        </ul>
        {/* <hr></hr> */}
      </div>
      <div className="">
        <ul className="">
          <li className="sidebarExt__listItem">
            <strong>Solutions</strong>
          </li>
          <li className="sidebarExt__listItem">
            Account Research and Renegotiation
          </li>
          <li className="sidebarExt__listItem">Billing Accuracy</li>
        </ul>
        {/* <hr></hr> */}
      </div>
    </div>
  );
};

export default SidebarExt;
