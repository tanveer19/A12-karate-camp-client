import { Link } from "react-router-dom";
import ClassItem from "./ClassItem";

const ClassCategory = ({ items, title, img }) => {
  return (
    <div>
      <div className="pt-8">
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-3">
          {items.map((item) => (
            <div className="mx-auto my-auto">
              <ClassItem key={item._id} item={item}></ClassItem>
            </div>
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCategory;
