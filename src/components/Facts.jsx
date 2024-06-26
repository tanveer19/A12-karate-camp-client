import React from "react";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
const Facts = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  return (
    <div className="w-1/2 mx-auto my-5 font-sans">
      <SectionTitle heading={"KYOKUSHIN FACTS"}></SectionTitle>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
        <div
          className={`collapse collapse-plus bg-base-200 my-5 ${
            openAccordion === 1 ? "bg-sky-500" : ""
          }`}
          onClick={() => setOpenAccordion(1)}
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            kyokushin belt
          </div>
          <div className="collapse-content">
            <p>
              Here is a breakdown of the belt ranks in Kyokushin Karate,
              starting from the beginner level:
            </p>
            <p>
              1. White Belt (10th Kyu): This is the starting rank for all
              students and represents a beginner's level of understanding and
              skill.
            </p>

            <p>
              6. Brown Belt (5th Kyu - 1st Kyu): The brown belt is divided into
              five levels, with 5th Kyu being the lowest and 1st Kyu being the
              highest. Each level represents increasing skill and knowledge,
              with 1st Kyu being the last step before achieving the coveted
              black belt.
            </p>
            <p>
              7. Black Belt (1st Dan and higher): The black belt is the ultimate
              goal for many Kyokushin Karate practitioners. It is divided into
              ten degrees, with 1st Dan being the starting point. Each
              subsequent degree (or dan) represents further mastery and
              expertise in Kyokushin Karate.
            </p>
          </div>
        </div>
        <div
          className={`collapse collapse-plus bg-base-200 my-5 ${
            openAccordion === 2 ? "bg-green-500" : ""
          }`}
          onClick={() => setOpenAccordion(2)}
        >
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
              indomitable will. The training incorporates a wide range of
              strikes, kicks, knee strikes, and throws, with an emphasis on
              delivering powerful and efficient techniques.
            </p>
          </div>
        </div>
        <div
          className={`collapse collapse-plus bg-base-200 my-5 ${
            openAccordion === 3 ? "bg-emerald-500" : ""
          }`}
          onClick={() => setOpenAccordion(3)}
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Branches in Bangladesh{" "}
          </div>
          <div className="collapse-content">
            <p>
              <strong>Bangladesh Kyokushin Karate Organization (BKKO):</strong>{" "}
              BKKO is one of the prominent Kyokushin Karate organizations in
              Bangladesh. It is recognized by the International Karate
              Organization (IKO) and follows the traditional training methods
              and curriculum of Kyokushin Karate.
            </p>

            <p>
              <strong>Bangladesh Kyokushin Karate Association (BKKA):</strong>{" "}
              BKKA is another well-established organization in Bangladesh
              dedicated to promoting Kyokushin Karate. It conducts training,
              competitions, and events to foster the development of
              practitioners across the country.
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
              provides training in various locations and focuses on promoting
              the art of Kyokushin Karate.
            </p>

            <p>
              <strong>Dhaka Kyokushin Karate Dojo:</strong> Located in the
              capital city, Dhaka, this dojo offers Kyokushin Karate training
              for enthusiasts of all ages and skill levels. It follows the
              principles and techniques of Kyokushin Karate under the guidance
              of experienced instructors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
