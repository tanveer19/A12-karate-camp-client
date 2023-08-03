import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center m-2 p-2 ">
      <p className="text-3xl m-4 subHeading">--{subHeading}--</p>
      <h3 className="text-5xl m-4 heading">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
