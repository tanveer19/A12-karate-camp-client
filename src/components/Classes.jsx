import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSpring, animated } from "react-spring";

const Classes = () => {
  const [classes, setclasses] = useState([]);

  const springStyles = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-10px)" },
    delay: 200, // Optional delay before the animation starts
  });

  useEffect(() => {
    fetch("https://2-21-a12-summer-camp-server-tanveer19.vercel.app/allclasses")
      .then((res) => res.json())
      .then((result) => {
        setclasses(result);
      });
  }, []); // <-- Added an empty dependency array to execute the effect only once
  return (
    <div>
      <Helmet>
        <title>Karate Camp | All classes </title>
      </Helmet>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Select</th>
                <th>Class Name</th>
                <th>Class Image</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>status</th>
              </tr>
            </thead>

            <tbody>
              {classes?.map((data) => (
                <animated.tr
                  key={data._id}
                  style={{
                    ...springStyles,
                    backgroundColor: data.seats === 0 ? "red" : "",
                  }}
                >
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled={data.seats === 0}
                      />
                    </label>
                  </th>
                  <td>{data.name}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.InstructorName}</td>
                  <td>{data.InstructorEmail}</td>
                  <td>{data.seats}</td>
                  <td>{data.price}</td>
                  <td>{data.status}</td>
                </animated.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Classes;
