import { Link } from "react-router-dom";
import ClassItem from "./ClassItem";
import Cover from "../pages/Shared/Cover";

const ClassCategory = ({ items, title, img }) => {
  return (
    <div>
      <div className="pt-8">
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {items.map((item) => (
            <div className="mx-auto my-auto">
              <ClassItem key={item._id} item={item}></ClassItem>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-2 my-4">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCategory;
