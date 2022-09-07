import React from "react";

const Accordion = ({ items }) => {
  console.log(items);
  return (
    <div>
      <h1>Accordion {items.length}</h1>
    </div>
  );
};

export default Accordion;
