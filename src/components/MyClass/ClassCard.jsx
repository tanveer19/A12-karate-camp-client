import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMoneyCheck, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ClassCard = (item) => {
  const { _id, name, image, seats } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [classes, setclasses] = useState([]);
  const [control, setControl] = useState("false");

  useEffect(() => {
    fetch("https://2-21-a12-summer-camp-server.vercel.app/allclasses")
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
        fetch(
          `https://2-21-a12-summer-camp-server.vercel.app/allclasses/${id}`,
          {
            method: "DELETE",
          }
        )
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

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        name,
        image,
        email: user.email,
      };
      fetch("https://2-21-a12-summer-camp-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to pay for class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
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
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-outline bg-teal-100 mt-4"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassCard;
