import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {
    _id,
    name,
    image,
    InstructorName,
    InstructorEmail,
    seats,
    price,
    status,
    category,
  } = useLoaderData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);

    let imageUrl = image;

    if (data.image && data.image[0]) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      }
    }

    // send class data to server with img url
    const classItem = {
      name: data.name,
      InstructorName: data.InstructorName,
      InstructorEmail: data.InstructorEmail,
      seats: data.seats,
      price: parseFloat(data.price),
      status: data.status,
      category: data.category,
      image: imageUrl,
    };

    const classRes = await axiosSecure.patch(`/class/${_id}`, classItem);
    console.log(classRes.data);
    if (classRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is updated to menu`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Karate Camp | Add a Class</title>
      </Helmet>

      <div className="flex">
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <p className="label-text">Class Name*</p>
            <input
              className="border rounded p-2 my-2 w-full"
              placeholder="Class Name "
              {...register("name")}
              defaultValue={name}
            />
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option value="japan">Japan</option>
              <option value="korea">Korea</option>
              <option value="china">China</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="taiwan">Taiwan</option>
            </select>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              className="border rounded p-2"
              placeholder="Price "
              {...register("price")}
              defaultValue={price}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Details</span>
            </label>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered h-16"
              placeholder="Details"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Item Image*</span>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered "
            />
            {image && (
              <div className="mt-2">
                <p>Previously uploaded image</p>
                <img src={image} alt="" className="w-32 h-32 object-cover" />
              </div>
            )}
          </div>

          <div className="form-control flex flex-col ">
            <label className="label">
              <span className="label-text">Instructor Name*</span>
            </label>
            <input
              className="border rounded p-2 my-2"
              placeholder="Instructor Name "
              {...register("InstructorName")}
              defaultValue={InstructorName}
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Instructor Email*</span>
            </label>

            <input
              className="border rounded p-2 my-2"
              placeholder="Instructor Email "
              {...register("InstructorEmail")}
              defaultValue={InstructorEmail}
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Available Seats*</span>
            </label>
            <input
              className="border rounded p-2 my-2"
              placeholder="Available seats "
              {...register("seats")}
              defaultValue={seats}
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Status*</span>
            </label>
            <input
              className="border rounded p-2 my-2"
              placeholder="status"
              {...register("status")}
              defaultValue={status}
            />
          </div>

          <input
            className="btn btn-sm w-1/3 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
