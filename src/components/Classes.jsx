import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setclasses] = useState([]);
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
                <tr
                  key={data._id}
                  className={data.seats === 0 ? "bg-red-500" : ""}
                >
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Classes;
