import React from "react";
import { events } from "../data/data";
import TextReder from "./Textrender";
import AnimateText from "./AnimateText";

const Events = () => {
  return (
    <section id="events">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <TextReder text={"Events & Offers"} triggerId="events_" from="top 10%"/>
    
        <AnimateText
            text={"Join our special events or host your own. Enjoy unforgettable nights with food, music, and great company."}
            triggerId={"events"}
            tagType="p"

        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow hover:shadow-lg transition-all text-left"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-black dark:text-white mb-1">
                📆 {event.date}
              </p>
              <p className="text-sm text-black dark:text-white mb-3">
                🕒 {event.time}
              </p>
              <p className="text-black dark:text-indigo-500  mb-6">{event.description}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                {event.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
