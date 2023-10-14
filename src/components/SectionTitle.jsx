import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center m-2 p-2 ">
      <p className="text-3xl m-4 subHeading">{subHeading}</p>
      <h3 className="text-4xl font-bold mx-auto w-fit m-8 border-y-8 border-cyan-500 border-x-0">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
