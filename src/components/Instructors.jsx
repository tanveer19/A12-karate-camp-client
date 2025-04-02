import React, { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://2-21-a12-summer-camp-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {/* instructors section */}
      <div>
        <h4 className="text-5xl text-center my-3"> All Instructors</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-full m-2 bg-base-100 shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure>
                <img
                  className="w-full h-96"
                  src={instructor.Picture}
                  alt="instructors"
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
  );
};

export default Instructors;
