import React from "react";

const ClassItem = ({ item }) => {
  const { name, image, price } = item;

  return (
    // <div className="card card-compact w-96 bg-base-100 shadow-xl ">
    //   <figure>
    //     <img src={image} alt="karate" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Class Name: {name}</h2>
    //     <p>Description: {}</p>
    //     <p>Price: {price}</p>
    //     {/* <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Add to Cart</button>
    //     </div> */}
    //   </div>
    // </div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Class Name: {name}</h2>
        {/* <p className="card-title">Description: {}</p> */}
        <p className="card-title">Price: {price}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default ClassItem;
