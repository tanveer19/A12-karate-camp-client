import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMoneyBill, FaMoneyCheck, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyClass = () => {
  const [classes, setclasses] = useState([]);
  const [control, setControl] = useState("false");

  useEffect(() => {
    fetch("http://localhost:5000/allclasses")
      .then((res) => res.json())
      .then((result) => {
        setclasses(result);
      });
  }, [control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allclasses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setControl(!control);
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Karate Camp | My Classes </title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>status</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>

          <tbody>
            {classes?.map((data, index) => (
              <tr key={data._id}>
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
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link to="/dashboard/payment">
                    <button className="btn btn-warning">
                      <FaMoneyCheck></FaMoneyCheck>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
