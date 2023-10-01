import React from "react";

const ClassItem = ({ item }) => {
  const { name, image, price } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="karate" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {name}</h2>
        <p>Description: {}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
