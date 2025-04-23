import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
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
        axiosSecure.delete(`/classes/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Karate Camp | Manage Classes </title>
      </Helmet>
      <SectionTitle heading="Manage Classes" subHeading="Manage"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.category}
                  <br />
                </td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-ghost btn-lg">
                      <FaEdit className="text-red-600"></FaEdit>
                    </button>
                  </Link>
                  {/* <select className="select btn btn-active">
                    <option value="Pending" className="btn btn-warning">
                      Pending
                    </option>
                    <option value="Approved" className="btn btn-info">
                      Approved
                    </option>
                    <option value="Rejected" className="btn btn-error">
                      Rejected
                    </option>
                  </select> */}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
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

export default ManageItems;
