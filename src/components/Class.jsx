import { Helmet } from "react-helmet-async";
import Cover from "../pages/Shared/Cover";
import classImg from "/images/karate-beach.jpg";
import japanImg from "/images/japan.jpg";
import koreaImg from "/images/korea.jpg";
import chinaImg from "/images/china.jpg";
import bangladeshImg from "/images/bangladesh.jpg";
import taiwanImg from "/images/taiwan.jpg";
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
      <Cover img={classImg} title="our class"></Cover>
      <ClassCategory
        items={japan}
        title={"japan"}
        img={japanImg}
      ></ClassCategory>
      <ClassCategory
        items={korea}
        title={"korea"}
        img={koreaImg}
      ></ClassCategory>
      <ClassCategory
        items={china}
        title={"china"}
        img={chinaImg}
      ></ClassCategory>
      <ClassCategory
        items={bangladesh}
        title={"bangladesh"}
        img={bangladeshImg}
      ></ClassCategory>
      <ClassCategory
        items={taiwan}
        title={"taiwan"}
        img={taiwanImg}
      ></ClassCategory>
    </div>
  );
};

export default Class;
