import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://2-21-a12-summer-camp-server.vercel.app/postClasses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Added successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Karate Camp | Add a Class</title>
      </Helmet>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form
        className="flex flex-col w-1/3 mx-auto my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}

        <input
          className="border rounded p-2 my-2"
          placeholder="Name "
          {...register("name")}
        />

        <input
          className="border rounded p-2 my-2"
          placeholder="image "
          {...register("image")}
        />
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAClass;
