import Badge from "../Badge";
import { integration } from "../../assets/images";
import { motion } from "framer-motion";

const Integration = () => {
  return (
    <div className="mt-8 flex flex-col gap-4 justify-center items-center relative">
      <Badge title="Integration" icon="&#128296;" />
      <h1 className="text-textHead2 text-4xl md:text-5xl font-semibold text-center w-auto md:w-1/2 leading-tight">
        Enable <span className="text-orange">integration</span> with other
        popular tools and platforms
      </h1>
      <p className="text-textPara2 text-lg font-medium text-center w-auto md:w-1/2">
        Seamlessly connect and amplify your workflow by enabling integration
        with a diverse array of widely-used tools and platforms.
      </p>
      <motion.img
        src={integration}
        alt="integration"
        className="-mb-8 mt-8 w-1/2"
        initial={{ opacity: 0, y: 100, scale: 1 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      />
    </div>
  );
};

export default Integration;
