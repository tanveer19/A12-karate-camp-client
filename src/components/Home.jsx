import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const Home = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      "https://2-21-a12-summer-camp-server-tanveer19.vercel.app/instructors"
    )
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
        <SectionTitle
          heading={"Popular Instructors"}
          subHeading={"for cool students"}
        ></SectionTitle>

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

      {/* accordion  */}

      <SectionTitle heading={"Kyokushin Facts"}></SectionTitle>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">kyokushin belt</div>
        <div className="collapse-content">
          <p>
            Here is a breakdown of the belt ranks in Kyokushin Karate, starting
            from the beginner level:
          </p>
          <p>
            1. White Belt (10th Kyu): This is the starting rank for all students
            and represents a beginner's level of understanding and skill.
          </p>
          <p>
            2. Yellow Belt (9th Kyu): The yellow belt indicates that the student
            has progressed in their training and has acquired a basic
            understanding of Kyokushin techniques.
          </p>
          <p>
            3. Orange Belt (8th Kyu): The orange belt represents an intermediate
            level of proficiency and shows that the student has developed a
            solid foundation of fundamental techniques.
          </p>
          <p>
            4. Green Belt (7th Kyu): The green belt signifies further progress
            in training, demonstrating that the student has improved their
            skills and is advancing in their knowledge of Kyokushin Karate.
          </p>
          <p>
            5. Blue Belt (6th Kyu): The blue belt indicates that the student has
            reached an intermediate level of expertise and has demonstrated
            proficiency in a wide range of techniques.
          </p>
          <p>
            6. Brown Belt (5th Kyu - 1st Kyu): The brown belt is divided into
            five levels, with 5th Kyu being the lowest and 1st Kyu being the
            highest. Each level represents increasing skill and knowledge, with
            1st Kyu being the last step before achieving the coveted black belt.
          </p>
          <p>
            7. Black Belt (1st Dan and higher): The black belt is the ultimate
            goal for many Kyokushin Karate practitioners. It is divided into ten
            degrees, with 1st Dan being the starting point. Each subsequent
            degree (or dan) represents further mastery and expertise in
            Kyokushin Karate.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Some info about kyokushin
        </div>
        <div className="collapse-content">
          <p>
            <strong>Kyokushin Karate:</strong> Kyokushin Karate, also known as
            "The Ultimate Truth," is a full-contact style of karate founded by
            Masutatsu Oyama in the 1960s. It is renowned for its rigorous
            training methods, emphasizing physical conditioning, intense
            sparring, and practical self-defense skills.
          </p>

          <p>
            In Kyokushin Karate, practitioners strive to develop strong
            techniques, physical power, mental fortitude, and a spirit of
            indomitable will. The training incorporates a wide range of strikes,
            kicks, knee strikes, and throws, with an emphasis on delivering
            powerful and efficient techniques.
          </p>

          <p>
            One distinctive feature of Kyokushin Karate is its full-contact
            sparring, where practitioners engage in intense bouts with limited
            protective gear, excluding strikes to the head. This approach
            cultivates toughness, resilience, and adaptability in real-life
            combat situations.
          </p>

          <p>
            Additionally, Kyokushin Karate places significance on kata training,
            which involves practicing choreographed sequences of movements to
            develop balance, coordination, technique precision, and mental
            focus.
          </p>

          <p>
            The belt ranking system is used in Kyokushin to mark progress and
            skill levels. Starting from the white belt, students advance through
            various colored belts until reaching the prestigious black belt,
            which is further divided into ten degrees or dans.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Branches in Bangladesh{" "}
        </div>
        <div className="collapse-content">
          <p>
            <strong>Bangladesh Kyokushin Karate Organization (BKKO):</strong>{" "}
            BKKO is one of the prominent Kyokushin Karate organizations in
            Bangladesh. It is recognized by the International Karate
            Organization (IKO) and follows the traditional training methods and
            curriculum of Kyokushin Karate.
          </p>

          <p>
            <strong>Bangladesh Kyokushin Karate Association (BKKA):</strong>{" "}
            BKKA is another well-established organization in Bangladesh
            dedicated to promoting Kyokushin Karate. It conducts training,
            competitions, and events to foster the development of practitioners
            across the country.
          </p>

          <p>
            <strong>
              International Kyokushin Karate Organization (IKKO) Bangladesh:
            </strong>{" "}
            IKKO Bangladesh is affiliated with the International Kyokushin
            Karate Organization, which has a global presence. It operates
            branches and dojos across Bangladesh, offering training and
            opportunities for students to advance in Kyokushin Karate.
          </p>

          <p>
            <strong>Bangladesh Karate Kyokushin (BKK):</strong> BKK is a
            Kyokushin Karate organization that operates in Bangladesh. It
            provides training in various locations and focuses on promoting the
            art of Kyokushin Karate.
          </p>

          <p>
            <strong>Dhaka Kyokushin Karate Dojo:</strong> Located in the capital
            city, Dhaka, this dojo offers Kyokushin Karate training for
            enthusiasts of all ages and skill levels. It follows the principles
            and techniques of Kyokushin Karate under the guidance of experienced
            instructors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
