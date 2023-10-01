import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useClasses from "../../hooks/useClasses";
import ClassCard from "../../components/ClassCard";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [tabIndex, setTtabIndex] = useState(0);
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
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTtabIndex(index)}>
        <TabList>
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
