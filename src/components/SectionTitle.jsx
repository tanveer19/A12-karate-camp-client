import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-1/3 m-2 p-2 ">
      <h3 className="text-5xl">{heading}</h3>
      <p className="text-3xl">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
