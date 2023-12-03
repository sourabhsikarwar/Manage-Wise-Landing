import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc, icon }) => {
  return (
    <motion.div
      className="bg-darkBg2 p-8 rounded-3xl text-center flex flex-col gap-4"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, scale: 0.9 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <div className="rounded-xl bg-violet-500 p-4 text-3xl text-white mx-auto w-fit aspect-square">
        {icon}
      </div>
      <h1 className="text-textHead2 text-2xl font-semibold">{title}</h1>
      <p className="text-textPara2 text-[16px] font-medium">{desc}</p>
    </motion.div>
  );
};

export default Card;
