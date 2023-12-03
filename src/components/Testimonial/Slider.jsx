import { useEffect, useState } from "react";
import Ticker from "framer-motion-ticker";
import ClientCard from "./ClientCard";
import { overlay } from "../../assets/images";

const Slider = ({ data }) => {
  return (
    <div className="flex gap-8 my-8 relative">
      <Ticker duration={40} className="absolute bottom-0 overflow-hidden">
        {data.map((item) => (
          <ClientCard item={item} />
        ))}
      </Ticker>
      <img src={overlay} alt="overlay" className="absolute hidden md:block bottom-0 w-full" />
    </div>
  );
};

export default Slider;
