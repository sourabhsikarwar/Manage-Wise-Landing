import React from "react";
import CTA from "./CTA";
import { logo } from "../../assets/images";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-softBg to-90% to-white">
      <div className="max-w-7xl mx-auto p-8">
        <CTA />

        {/* footer component */}
        <footer className="flex flex-col gap-8 mt-24">
          <div className="flex flex-col md:flex-row gap-16 justify-between mb-8">
            <div className="w-56">
              <img src={logo} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <a href="#explore" className="text-lg text-textHead hover:text-textPara cursor-pointer">Features</a>
              <a href="#faq" className="text-lg text-textHead hover:text-textPara cursor-pointer">FAQ</a>
              <a href="#pricing" className="text-lg text-textHead hover:text-textPara cursor-pointer">Pricing</a>
              <a href="#testimonial" className="text-lg text-textHead hover:text-textPara cursor-pointer">Testimonials</a>
            </div>
          </div>
          <div className="flex justify-between border-t-[0.5px] border-gray-300 py-8">
            <div>© 2022 ManageWise, Inc.</div>
            <div className="flex gap-2">
              <p className="md:text-xl text-lg hover:text-textPara cursor-pointer">&#9930;</p>
              <p className="md:text-xl text-lg hover:text-textPara cursor-pointer">&#9930;</p>
              <p className="md:text-xl text-lg hover:text-textPara cursor-pointer">&#9930;</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
