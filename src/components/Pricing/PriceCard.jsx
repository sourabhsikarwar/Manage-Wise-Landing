import React from "react";
import { styles } from "../../assets/style/styles";
import { motion } from "framer-motion";

const PriceCard = ({ type }) => {
  switch (type) {
    case "1":
      return (
        <motion.div
          className="flex-1 bg-softBg2 rounded-large p-8 flex flex-col gap-4 w-full"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="px-2 py-1 text-sm text-orange font-semibold bg-white w-fit rounded-xl">
            Free
          </div>
          <h1 className="text-textHead text-5xl font-semibold">
            $0 <span className="text-lg">/month</span>
          </h1>
          <ul className="mb-8">
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Access to
              all basic features
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Reporting
              and analytics
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Up to 5
              individual users
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Chat and
              email support
            </li>
          </ul>
          <button className={styles.button2}>Get Started</button>
        </motion.div>
      );
    case "2":
      return (
        <motion.div
          className="flex-1 bg-darkBg2 rounded-large p-8 flex flex-col gap-4 w-full"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="px-2 py-1 text-sm text-orange font-semibold bg-white w-fit rounded-xl">
            Standard
          </div>
          <h1 className="text-textHead2 text-5xl font-semibold">
            $25 <span className="text-lg">/month</span>
          </h1>
          <ul className="mb-8">
            <li className="text-textPara2 text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Access to
              all basic features
            </li>
            <li className="text-textPara2 text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Reporting
              and analytics
            </li>
            <li className="text-textPara2 text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Up to 5
              individual users
            </li>
            <li className="text-textPara2 text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Chat and
              email support
            </li>
            <li className="text-textPara2 text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> 3+
              integrations
            </li>
            <li className="text-textPara2 text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Account
              performance reporting
            </li>
          </ul>
          <button className={styles.button1}>Get Started</button>
        </motion.div>
      );
    case "3":
      return (
        <motion.div
          className="flex-1 bg-softBg2 rounded-large p-8 flex flex-col gap-4 w-full"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="px-2 py-1 text-sm text-orange font-semibold bg-white w-fit rounded-xl">
            Business
          </div>
          <h1 className="text-textHead text-5xl font-semibold">
            $42 <span className="text-lg">/month</span>
          </h1>
          <ul className="mb-8">
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Access to
              all basic features
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Up to 5
              individual users
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Reporting
              and analytics
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> Chat and
              email support
            </li>
            <li className="text-textPara text-md font-medium mb-2">
              <span className="text-green-500 mr-2">&#10004;</span> 3+
              integrations
            </li>
          </ul>
          <button className={styles.button2}>Get Started</button>
        </motion.div>
      );
    default:
      return <div className="">No Card</div>;
  }
};

export default PriceCard;
