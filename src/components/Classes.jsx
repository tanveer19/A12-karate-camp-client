import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";

const Classes = () => {
  const [classes, setclasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allclasses")
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
                <th>#</th>
                <th>Class Name</th>
                <th>Class Image</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {classes?.map((data, index) => (
                <tr key={data._id}>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled={data.seats === 0}
                      />
                    </label>
                  </td>
                  <td>{index + 1}</td>
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
                  <td>
                    <button className="btn btn-ghost btn-lg">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
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
