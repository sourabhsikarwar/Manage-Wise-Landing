import React from "react";
import Badge from "../Badge";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="bg-white my-16" id="pricing">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col gap-8 items-center justify-center">
          <Badge icon="&#128178;" title="pricing" />
          <h1 className="text-textHead text-4xl md:text-5xl font-semibold text-center">
            Select your ideal <span className="text-orange">Pricing</span> plan
          </h1>
          <p className="text-xl text-textPara font-semibold text-center w-auto md:w-2/5">
            At Manage Wise, we believe in providing you with pricing plans that
            adapt to your unique needs.
          </p>
        </div>
        <div className="my-16 flex flex-col md:flex-row gap-8 items-center justify-center">
            <PriceCard type="1"/>
            <PriceCard type="2"/>
            <PriceCard type="3"/>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
