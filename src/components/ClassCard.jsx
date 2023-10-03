import React from "react";

const ClassCard = ({ item }) => {
  const { name, image, price, category } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="karate" />
        </figure>
        <p className="bg-teal-600 text-white absolute mt-4 ml-4 px-2 rounded-md">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">Class Name: {name}</h2>
          <p>Description: {}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-l-2 border-r-2 border-0">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
