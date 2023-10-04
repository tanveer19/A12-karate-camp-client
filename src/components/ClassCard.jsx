import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ item }) => {
  const { name, image, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("https://2-21-a12-summer-camp-server.vercel.app/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
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
        title: "Please login to order class?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="karate" />
        </figure>
        <p className="bg-teal-600 text-white absolute mt-4 ml-4 px-2 rounded-md">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">Class Name: {name}</h2>
          <p>Description: {}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-l-2 border-r-2 border-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClassCard;
