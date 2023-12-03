import React from "react";
import Badge from "../Badge";
import { styles } from "../../assets/style/styles";
import { cta, overlay } from "../../assets/images";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      className="p-24 shadow-sm rounded-large border border-gray-100 bg-white flex flex-col md:flex-row gap-16 my-16"
      initial={{ opacity: 0, y: 100, z: 0, scale: 0.9, rotateX: 10}}
      animate={{ opacity: 1, y: 0, z: 1, perspective: 400 }}
      exit={{ opacity: 0, y: 100, z: 0, scale: 0.9, perspective: 800 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      // changing the perspective from bottom of the image 
      whileInView={{ opacity: 1, y: 0, scale: 1,  }}
    >
      <div className="flex-1 flex flex-col gap-6">
        <Badge title="Don't Miss Out" icon="&#128075;" />
        <h1 className="text-4xl md:text-5xl font-semibold">
          Unleash your <span className="text-orange">Potential</span> with us
        </h1>
        <p className="text-xl w-4/5 text-textPara">
          Join our community of ambitious individuals and organizations eager to
          make a difference.
        </p>
        <button className={styles.button1}>Try Out Now</button>
      </div>
      <div className="flex-1 flex flex-col gap-4 items-center relative">
        <Badge title="Happy Users" icon="200+" />
        <img src={cta} className="md:absolute w-full bottom-0" />
        <img
          src={overlay}
          alt=""
          className="absolute w-full bottom-0 md:block hidden"
        />
      </div>
    </motion.div>
  );
};

export default CTA;
