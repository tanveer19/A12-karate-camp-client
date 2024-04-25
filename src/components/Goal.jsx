import React from "react";
import SectionTitle from "./SectionTitle";

const Goal = () => {
  return (
    <div className="md:h-screen font-sans font-bold bg-gray-700">
      <section className="mt-36 flex justify-center text-center">
        <SectionTitle heading={"What is your Target?"}></SectionTitle>
      </section>
      <section
        class="text-gray-600 body-font "
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-full mx-auto ">
            <div class="flex flex-wrap gap-5 md:gap-0 -mx-2  ">
              <div class="px-2 w-full md:w-1/3 transition-all duration-1000 grayscale hover:grayscale-0">
                <div class="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative ">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block  absolute inset-0 rounded-3xl"
                    src="./images/karate-3.jpg"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-white font-medium title-font mb-8">
                      Be strong
                    </h2>
                    <p class="text-white leading-relaxed text-3xl">
                      Weight lifting
                    </p>
                    <a class="mt-3 text-white inline-flex items-center bg-black p-5 rounded-xl">
                      See packages
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-2  w-full md:w-1/3 transition-all duration-1000 grayscale hover:grayscale-0">
                <div class="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative  ">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block  absolute inset-0 rounded-3xl"
                    src="./images/karate-2.jpg"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-white font-medium title-font mb-8">
                      Be strong
                    </h2>
                    <p class="text-white leading-relaxed text-3xl">
                      Weight lifting
                    </p>
                    <a class="mt-3 text-white inline-flex items-center bg-black p-5 rounded-xl">
                      See packages
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-2  w-full md:w-1/3 transition-all duration-1000 grayscale hover:grayscale-0">
                <div class="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative  ">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block  absolute inset-0 rounded-3xl"
                    src="./images/karate-3.jpg"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-white font-medium title-font mb-8">
                      Be strong
                    </h2>
                    <p class="text-white leading-relaxed text-3xl">
                      Weight lifting
                    </p>
                    <a class="mt-3 text-white inline-flex items-center bg-black p-5 rounded-xl">
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
