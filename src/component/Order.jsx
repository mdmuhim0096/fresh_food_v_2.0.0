import React from "react";
import AnimateText from "./AnimateText";

const platforms = [
    {
        name: "Foodpanda",
        url: "#",
        logo: "./assets/foodpanda.jpeg",
    },
    {
        name: "Uber Eats",
        url: "#",
        logo: "./assets/uber.png",
    },
];

const Order = () => {
    return (
        <section className="bg-white dark:bg-gray-900 dark:text-white" id="onlineorder">
            <div className="container mx-auto px-4 text-center">

                <AnimateText text={"🛵 Order Online"} triggerId={"onlineorder"} tagType="p" />
        
                <div className="my-7">
                    <AnimateText text={"Enjoy our food from the comfort of your home. Order now via your favorite platform:"} triggerId={"onlineorder"} tagType="p" animation="slide-left" />
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 mb-12 my-3">
                    {platforms.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-20 h-20"
                        >
                            <img
                                src={platform.logo}
                                alt={platform.name}
                                className="rounded-full hover:rounded-2xl duration-300 transition-transform"
                            />
                        </a>
                    ))}
                </div>

                <div>
                    <h3 className="my-4">
                        <AnimateText text={"Or order directly from us:"} triggerId={"onlineorder"} animation="slide-up" tagType="p"/>
                    </h3>
                    <button className="mt-3 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Order;
