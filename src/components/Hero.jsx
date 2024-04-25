import React from "react";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/images/hero.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content font-sans">
            <div className="max-w-md">
              <SectionTitle heading={"Karate Info"}></SectionTitle>

              <p
                className="mb-5"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Karate is a traditional Japanese martial art that has gained
                worldwide recognition and popularity for its focus on
                discipline, self-defense, and physical fitness. The word
                "karate" itself means "empty hand" in Japanese, emphasizing the
                art's primary philosophy of unarmed combat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
