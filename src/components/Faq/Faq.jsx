import React from "react";
import Accordion from "./Accordion";
import Badge from "../Badge";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, scale: 0.9 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      id="faq"
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <div className="max-w-7xl mx-auto p-8 my-16">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-2 flex flex-col gap-4">
            <Badge title="FAQ" icon="&#128587;" />
            <h1 className="text-4xl md:text-5xl text-textHead font-semibold">
              Need <span className="text-orange">Answers?</span>
            </h1>
            <p className="text-textPara text-lg font-medium">
              Check out our most commonly asked questions below to find the
              information you need.
            </p>
          </div>
          <Accordion />
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
