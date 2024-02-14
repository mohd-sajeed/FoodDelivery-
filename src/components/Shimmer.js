import React from "react";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(9)
        .fill("")
        .map((e, index) => (
           <div key={index} className="shimmer-effect"></div>
      ))}
    </div>
  );
};

export default Shimmer;

