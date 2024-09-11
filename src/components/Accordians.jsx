/* eslint-disable react/prop-types */
import { useState } from "react";
import Faq from "./Faq";

const Accordians = ({ data }) => {
  const [showIndex, setShowIndex] = useState(-1);
  const handleClick = (index) => {
    setShowIndex((prevIndex) => {
      if (prevIndex === index) {
        return -1;
      }
      return index;
    });
  };

  return (
    <div>
      {data.faqs.map((faq, index) => (
        <Faq
          key={index}
          showAns={index === showIndex}
          index={index}
          faq={faq}
          handleCLick={handleClick}
        />
      ))}
    </div>
  );
};

export default Accordians;
