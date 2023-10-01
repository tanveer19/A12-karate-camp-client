import { Helmet } from "react-helmet-async";
import Cover from "../pages/Shared/Cover";
import useClasses from "../hooks/useClasses";
import ClassCategory from "./ClassCategory";

const Class = () => {
  const [classes] = useClasses();
  const japan = classes.filter((item) => item.category === "japan");
  const korea = classes.filter((item) => item.category === "korea");
  const china = classes.filter((item) => item.category === "china");
  const bangladesh = classes.filter((item) => item.category === "bangladesh");
  const taiwan = classes.filter((item) => item.category === "taiwan");
  return (
    <div>
      <Helmet>
        <title>Karate Camp | Class </title>
      </Helmet>
      <Cover img="/public/images/karate-beach.jpg" title="our class"></Cover>
      <ClassCategory items={japan}></ClassCategory>
    </div>
  );
};

export default Class;
