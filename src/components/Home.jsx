import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Facts from "./Facts";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Contact from "./Contact";
import useInstructors from "../hooks/useInstructors";
import Testimonial from "./Testimonial";
import Goal from "./Goal";

const Home = () => {
  // const [instructors] = useInstructors();
  const [instructors, setInstructors] = useState([]);
  // const popular = instructors.filter((item) => item.category === "popular");

  useEffect(() => {
    fetch("https://2-21-a12-summer-camp-server.vercel.app/instructors")
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
      <Carousel></Carousel>

      {/*POPULAR instructors section */}
      <div>
        <SectionTitle heading={"Popular Instructors"}></SectionTitle>

        <div className="flex justify-center font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {instructors.map((instructor) => (
              <div
                key={instructor._id}
                className="card w-96 h-96 m-2 bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <figure>
                  <img
                    src={instructor.Picture}
                    alt="instructor"
                    className="h-72"
                  />
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
      <Goal></Goal>
      <Facts></Facts>
      <Hero></Hero>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
