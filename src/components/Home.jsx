import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Facts from "./Facts";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Contact from "./Contact";
import GridSection from "./Grid";
import useInstructors from "../hooks/useInstructors";

const Home = () => {
  const [instructors] = useInstructors();
  const popular = instructors.filter((item) => item.category === "popular");
  // const [instructors, setInstructors] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/instructors")
  //     .then((res) => res.json())

  //     .then((data) => {
  //       const popularInstructors = data.filter(
  //         (item) => item.Category === "popular"
  //       );

  //       setInstructors(popularInstructors);
  //     });
  // }, []);

  return (
    <div>
      {/* Carousel */}

      <Carousel></Carousel>

      {/*POPULAR instructors section */}
      <div className="">
        <SectionTitle heading={"Popular Instructors"}></SectionTitle>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3">
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
