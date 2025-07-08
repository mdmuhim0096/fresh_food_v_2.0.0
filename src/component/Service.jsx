import React from "react";
import { Services } from "../data/data";
import Tilt from "react-parallax-tilt";
import AnimateText from "./AnimateText";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Service = () => {
  return (
    <div>
      <Navbar />
      <section id="services" className="py-20" >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimateText text={"Our Services"} triggerId={"services"} animation="slide-up" splitType="chars" />
          <AnimateText text={"More than just food — we offer a complete culinary experience."} triggerId={"services"} animation="slide-right" splitType="chars" tagType="p" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {Services.map((Service, i) => (
              <Tilt
                key={i}
                className="dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl text-red-500 mb-4 flex justify-center">
                  {<Service.Icon />}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {Service.title}
                </h3>
                <p className="text-gray-600 dark:text-white text-sm">{Service.description}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;
