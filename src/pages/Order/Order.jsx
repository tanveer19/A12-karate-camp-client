import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useClasses from "../../hooks/useClasses";
import ClassCard from "../../components/ClassCard";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import orderCoverImg from "/images/order.jpg";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["japan", "korea", "china", "bangladesh", "taiwan"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTtabIndex] = useState(initialIndex);
  const [classes] = useClasses();

  const japan = classes.filter((item) => item.category === "japan");
  const korea = classes.filter((item) => item.category === "korea");
  const china = classes.filter((item) => item.category === "china");
  const bangladesh = classes.filter((item) => item.category === "bangladesh");
  const taiwan = classes.filter((item) => item.category === "taiwan");
  return (
    <div>
      <Helmet>
        <title>Karate Camp | Order </title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Class"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTtabIndex(index)}>
        <TabList className="flex justify-center bg-[#06b6d4]">
          <Tab>Japan</Tab>
          <Tab>Korea</Tab>
          <Tab>China</Tab>
          <Tab>Bangladesh</Tab>
          <Tab>Taiwan</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={japan}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={korea}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={china}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={bangladesh}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={taiwan}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
