import React from "react";

const Goal = () => {
  return (
    <div className="h-screen font-sans font-bold bg-gray-700">
      <section className="mt-36 flex justify-center">
        <h1 className="mt-36 text-6xl text-white">WHAT IS YOUR TARGET?</h1>
      </section>
      <section class="text-gray-600 body-font border">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            {/* <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://dummyimage.com/820x340"
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                </a>
              </div>
            </div> */}
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://dummyimage.com/542x460"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                      Shooting Stars
                    </h2>
                    <p class="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://dummyimage.com/542x420"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                      Shooting Stars
                    </h2>
                    <p class="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
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
