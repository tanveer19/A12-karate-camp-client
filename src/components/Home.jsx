import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Facts from "./Facts";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Contact from "./Contact";
import GridSection from "./Grid";

const Home = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())

      .then((data) => {
        const popularInstructors = data.filter(
          (item) => item.Category === "popular"
        );

        setInstructors(popularInstructors);
      });
  }, []);

  return (
    <div>
      {/* Carousel */}
      {/* <div className="carousel w-full">
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
      </div> */}
      <Carousel></Carousel>

      {/*POPULAR instructors section */}
      <div className="">
        <SectionTitle heading={"Popular Instructors"}></SectionTitle>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
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
      {/* <GridSection></GridSection> */}
      <Facts></Facts>
      <Hero></Hero>
      <Contact></Contact>
    </div>
  );
};

export default Home;
