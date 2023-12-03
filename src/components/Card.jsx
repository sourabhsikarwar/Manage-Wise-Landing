import { motion } from "framer-motion";
const Card = ({ img, title, desc }) => {
  return (
    <motion.div
      className="flex-1 border-[1px] border-gray-100 rounded-xl"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <img src={img} alt="" />
      <div className="p-8 flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-textHead">{title}</h1>
        <p className="text-textPara font-medium text-md">{desc}</p>
      </div>
    </motion.div>
  );
};

export default Card;
