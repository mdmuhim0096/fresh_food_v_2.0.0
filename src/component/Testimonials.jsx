import React, { useLayoutEffect, useRef } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data/data";
import AnimateText from "./AnimateText";
import TextReder from "./Textrender";
import Space from "./Space";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
gsap.registerPlugin(ScrollTrigger);
import Footer from "./Footer";
import useIsMobile from "./responsive";
import Tilt from "react-parallax-tilt";

const Testimonials = () => {
  const containerRef = useRef();
  const isMobile = useIsMobile();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#testimoihead", {
        x: "-63%",
        scrollTrigger: {
          trigger: "#testimoiheadcontainer",
          scrub: true,
          pin: true,
          start: "top 10%",
          pinSpacing: false
        }
      })
    })

    return () => { ctx.revert() };

  }, []);

  return (
    <div>
      <Navbar />
      <section className="text-black dark:text-white" id="testimonials">
        <div className="container mx-auto text-center max-w-screen-xl">
          <div id="testimoiheadcontainer" className="flex items-center h-[70vh] sm:h-screen">
            <h1 id="testimoihead" className="text-black dark:text-white text-[30vw] font-extrabold whitespace-nowrap text-transparent" style={{ background: "url('./assets/cvg.jpg')" }}>OUR TESTIMIALS</h1>
          </div>
          <Space height={100} />
          <TextReder
            text={"⭐ What Our Customers Say"}
            triggerId="restimialsaction_"
            variant="corner-top-left"
          />
          <Space height={20} />
          <div id="service" className="px-3 sm:px-16 md:px-28">
            <AnimateText text={"Heartfelt experiences and genuine feedback from our valued customers who have tasted the difference in our food and felt the warmth of our service. These are the voices that inspire us every day."} splitType="word" animation="scale-up" fromStart="top 40%" triggerId={"service"} tagType="p" />
          </div>
          <Space height={50} />
          <div id="feedBoxContainer">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bottom-1 md:overflow-hidden p-5"
              ref={containerRef}
            >
              {testimonials.map((item, index) => (
                <Tilt
                  key={index}
                  className="feedBox dark:bg-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
                    />
                    <div className="text-left">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm text-black dark:text-white">{item.platform}</p>
                    </div>
                  </div>

                  <p className="text-gray-900 dark:text-white text-base mb-4 italic">
                    "{item.review}"
                  </p>

                  <div className="flex justify-center md:justify-start gap-1">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <Star key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
          {isMobile ? <Space height={70} /> : <Space height={20} />}
          {/* Review Platform Logos */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Find us on:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-red-500"
              >
                {/* Google Reviews Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.4 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l6-6C34.1 5.1 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.5-.4-3.5z" />
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.2 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l6-6C34.1 5.1 29.3 3 24 3 16 3 9 7.9 6.3 14.7z" />
                  <path fill="#4CAF50" d="M24 45c5.2 0 10-1.8 13.6-4.9l-6.3-5.2C29.2 36.4 26.7 37 24 37c-5.2 0-9.6-3.6-11.2-8.4l-6.5 5C9.1 41.7 16 45 24 45z" />
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.7-4.9 6-9.3 6-5.2 0-9.6-3.6-11.2-8.4l-6.5 5C11.4 39.6 17.2 44 24 44c11.6 0 21-9.4 21-21 0-1.2-.1-2.5-.4-3.5z" />
                </svg>
                <span className="font-medium text-lg">Google Reviews</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                {/* Facebook Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.325 1.325 1.325H12.82V14.7h-3.1v-3.6h3.1V8.1c0-3.07 1.873-4.744 4.6-4.744 1.31 0 2.437.098 2.767.142v3.205l-1.9.001c-1.49 0-1.78.708-1.78 1.747v2.29h3.56l-.465 3.6h-3.095V24h6.075c.73 0 1.325-.592 1.325-1.325V1.326C24 .593 23.405 0 22.675 0z" />
                </svg>
                <span className="font-medium text-lg">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Space height={40} />
      <Footer />
    </div>
  );
};

export default Testimonials;

