import React from "react";
import Badge from "../Badge";
import Slider from "./Slider";
import { feedback } from "../../constants/feedbacks";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-8" id="testimonial">
      <div className="max-w-7xl m-auto flex flex-col gap-4 items-start px-16 w-full">
        <Badge title="Testimonials" icon="&#128178;" />
        <h1 className="text-4xl md:text-5xl text-textHead font-semibold">
          Hear from our <span className="text-orange">Satisfied</span> clients
        </h1>
        <p className="text-lg text-textPara font-medium">
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </p>
      </div>

      {/* slider */}
      <Slider data={feedback} />
    </div>
  );
};

export default Testimonial;
