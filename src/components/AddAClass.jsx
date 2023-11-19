import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    // fetch("http://localhost:5000/classes", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);

    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Class Added successfully.",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   });

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
       if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name, price, category} = data;
        const newItem = {name, price: parseFloat(price), category, image:imgURL}
        console.log(newItem)
       }
      })
  };

  // console.log(errors);
  // console.log(img_hosting_token);

  return (
    <div>
      <Helmet>
        <title>Karate Camp | Add a Class</title>
      </Helmet>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <div className="flex">
        <img src="/images/admission.jpg" className="w-1/2 h-[800px]" alt="" />

        <form
          className="flex flex-col gap-2 w-1/3 mx-auto justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}

          <input
            className="border rounded p-2 my-2"
            placeholder="Class Name "
            {...register("name")}
          />

          {/* <input
            className="border rounded p-2 my-2"
            placeholder="Class image "
            {...register("image")}
          /> */}

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
          <input
            className="border rounded p-2 my-2"
            placeholder="Instructor  Name "
            {...register("InstructorName")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Instructor  Email "
            value={user.email}
            {...register("InstructorEmail")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Available seats "
            {...register("seats")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Price "
            {...register("price")}
          />
          <input
            className="border rounded p-2 my-2"
            value="pending"
            placeholder="status"
            {...register("status")}
          />

          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image")}
          />

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
