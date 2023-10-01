import React from "react";

const ClassCard = ({ item }) => {
  const { name, image, price, category } = item;
  return (
    <div>
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
    </div>
  );
};

export default ClassCard;
