import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase"> {title}</h1>
            <p className="mb-5 text-xl">
              Kyokushin is a full-contact style of martial arts that is known
              for its rigorous training, disciplined philosophy, and emphasis on
              powerful, high-impact techniques. It is one of the most
              well-respected and challenging forms of karate, often referred to
              as "The Strongest Karate."
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
