import React from "react";
import SectionTitle from "./SectionTitle";

const Goal = () => {
  return (
    <div className="md:h-screen font-sans font-bold bg-gray-700">
      <section className="mt-36 flex justify-center text-center">
        <SectionTitle heading={"What is your Target?"}></SectionTitle>
      </section>
      <section
        className="text-gray-600 body-font "
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-full mx-auto ">
            <div className="flex flex-wrap gap-5 md:gap-0 -mx-2  ">
              <div className="px-2 w-full md:w-1/3 transition-all duration-1000 grayscale hover:grayscale-0">
                <div className="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  absolute inset-0 rounded-3xl"
                    src="./images/karate-3.jpg"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-8">
                      Be strong
                    </h2>
                    <p className="text-white leading-relaxed text-3xl">
                      Weight lifting
                    </p>
                    <a className="mt-3 text-white inline-flex items-center bg-black p-5 rounded-xl">
                      See packages
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2  w-full md:w-1/3 transition-all duration-1000 grayscale hover:grayscale-0">
                <div className="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  absolute inset-0 rounded-3xl"
                    src="./images/karate-2.jpg"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-8">
                      Be strong
                    </h2>
                    <p className="text-white leading-relaxed text-3xl">
                      Weight lifting
                    </p>
                    <a className="mt-3 text-white inline-flex items-center bg-black p-5 rounded-xl">
                      See packages
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2  w-full md:w-1/3 transition-all duration-1000 grayscale hover:grayscale-0">
                <div className="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  absolute inset-0 rounded-3xl"
                    src="./images/karate-3.jpg"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-8">
                      Be strong
                    </h2>
                    <p className="text-white leading-relaxed text-3xl">
                      Weight lifting
                    </p>
                    <a className="mt-3 text-white inline-flex items-center bg-black p-5 rounded-xl">
                      See packages
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goal;
