import Badge from "./Badge";
import Card from "./Card";
import { product, pc1, pc2, pc3 } from "../assets/images";
import {motion} from "framer-motion";

const Product = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-16 py-8">
      <Badge title="Premium Features" icon="&#128293;" />
      <div className="flex flex-col gap-4">
        <h1 className="text-textHead text-4xl md:text-5xl font-semibold text-center leading-normal">
          Discover our product's{" "}
          <span className="text-orange">Capabilities</span>
        </h1>
        <p className="text-center text-textPara text-lg font-medium w-4/5 md:w-3/5 mx-auto">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>
      <div className="flex flex-col gap-12 my-8">
        <motion.div className="flex gap-y-12 md:gap-x-12 md:flex-row flex-col"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="flex-1 flex flex-col gap-4 bg-[#EDEDFA] p-8 rounded-xl">
            <Badge title="" icon="&#11088;" />
            <p className="text-gray-700 md:text-[44px] text-[36px] font-semibold leading-relaxed">
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </p>
          </div>
          <div className="flex-1">
            <Card
              title="Smart Task Management"
              desc="Say goodbye to chaos with our smart task management system"
              img={product}
            />
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12">
          <Card
            img={pc1}
            title="Flexible Scheduling"
            desc="Stay productive with our flexible scheduling system"
          />
          <Card
            img={pc2}
            title="Easy Communication"
            desc="Collaborate seamlessly with your team in real-time"
          />
          <Card
            img={pc3}
            title="Analytics"
            desc="Gain valuable insights with our advanced analytics feature"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
