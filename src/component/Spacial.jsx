import React from "react";
import { specials } from "../data/data";


const Spacial = () => {
    return (
        <section className="py-16 px-2" id="specials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specials.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden dark:bg-gray-700 border dark:border-none shadow-lg"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-2">
                                {item.tag}
                            </span>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 mb-4 dark:text-white">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-red-500">
                                    $ {item.price}
                                </span>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Spacial;