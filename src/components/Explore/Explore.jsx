import React from "react";
import Features from "./Features";
import Integration from "./Integration";

const Explore = () => {
  return (
    <div className="bg-darkBg" id="explore">
      <div className="max-w-7xl mx-auto p-8">
        <Features />
        <Integration />
      </div>
    </div>
  );
};

export default Explore;
