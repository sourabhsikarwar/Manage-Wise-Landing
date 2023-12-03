import { styles } from "../assets/style/styles";
import { hero } from "../assets/images";
import Badge from "./Badge";
import Product from "./Product";
import { motion, useAnimate } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#FEF3ED] to-40% to-white">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex flex-col items-center justify-center px-8 py-16 gap-y-4">
          <Badge title="Welcome to Manage Wise" icon="&#128075;" />
          <h1 className="text-textHead text-5xl md:text-6xl font-semibold text-center leading-normal w-4/5">
            Empower your business with{" "}
            <span className="text-orange">Strategic</span> insights
          </h1>
          <p className="text-center text-textPara text-xl font-medium w-4/5 md:w-1/2">
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success
          </p>
          <div className="flex gap-4 md:flex-row flex-col md:w-auto w-full gap-y-6 mx-auto my-4">
            <button className={styles.button1}>Get Started</button>
            <button className={styles.button2}>Watch Demo</button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
          >
            <img
              src={hero}
              alt="hero_image"
              className="rounded-[28px] my-8 shadow-xl"
            />
          </motion.div>
        </div>

        {/* Product component */}
        <Product />
      </div>
    </div>
  );
};

export default Hero;
