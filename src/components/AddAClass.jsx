import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/postClasses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input
      className="border rounded p-2 my-2"
      {...register("exampleRequired", { required: true })}
    /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAClass;
