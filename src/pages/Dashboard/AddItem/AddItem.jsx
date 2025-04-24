import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/classes", newItem).then((data) => {
            console.log("after posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class Added successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  // console.log(errors);
  // console.log(img_hosting_token);

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
            />
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick one"
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Details</span>
            </label>
            <textarea
              {...register("details", { required: true })}
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
              {...register("image", { required: true })}
              className="file-input file-input-bordered "
            />
          </div>

          <div className="form-control flex flex-col ">
            <label className="label">
              <span className="label-text">Instructor Name*</span>
            </label>
            <input
              className="border rounded p-2 my-2"
              placeholder="Instructor Name "
              {...register("InstructorName")}
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Instructor Email*</span>
            </label>

            <input
              className="border rounded p-2 my-2"
              placeholder="Instructor Email "
              value={user.email}
              {...register("InstructorEmail")}
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
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Status*</span>
            </label>
            <input
              className="border rounded p-2 my-2"
              value="pending"
              placeholder="status"
              {...register("status")}
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

export default AddItem;
