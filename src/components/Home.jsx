import React, { useEffect, useState } from "react";
import Instructors from "./Instructors";

const Home = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      "https://2-21-a12-summer-camp-server-tanveer19.vercel.app/instructors"
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {/* Carousel */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/karate-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/karate-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/karate-3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/karate-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* instructors section */}
      <div>
        <h4 className="text-5xl text-center my-3"> Popular Instructors</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-3/4 mx-auto p-2">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-96 h-96 m-2 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={instructor.Picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor.Name}</h2>
                <h4>Email: {instructor.Email}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
