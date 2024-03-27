import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center mt-24 p-2 font-sans">
      <p className="text-3xl m-4 subHeading">{subHeading}</p>
      <h3 className="text-4xl font-bold mx-auto w-fit m-8 border-y-8 border-cyan-500 border-x-0 uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
