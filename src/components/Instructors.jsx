import React from "react";

const Instructors = ({ instructor }) => {
  return (
    <div>
      <div className="card w-96 h-96 m-2 bg-base-100 shadow-xl">
        <figure>
          <img src={instructor.Picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.Name}</h2>
          <h4>Email: {instructor.Email}</h4>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
