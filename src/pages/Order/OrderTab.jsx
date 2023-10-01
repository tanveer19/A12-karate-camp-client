import React from "react";
import ClassCard from "../../components/ClassCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3">
        {items.map((item) => (
          <div className="flex justify-center items-center" key={item._id}>
            <ClassCard item={item}></ClassCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
