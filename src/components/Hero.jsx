import React from "react";

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
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Karate is a traditional Japanese martial art that has gained
                worldwide recognition and popularity for its focus on
                discipline, self-defense, and physical fitness. The word
                "karate" itself means "empty hand" in Japanese, emphasizing the
                art's primary philosophy of unarmed combat.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
