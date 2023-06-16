import React, { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      "https://2-21-a12-summer-camp-server-tanveer19.vercel.app/instructors"
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {/* instructors section */}
      <div>
        <h4 className="text-5xl text-center my-3"> Popular Instructors</h4>
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
    </div>
  );
};

export default Instructors;
