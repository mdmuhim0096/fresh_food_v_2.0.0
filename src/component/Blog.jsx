import React from "react";
import { blogs } from "../data/data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimateText from "./AnimateText";
import Space from "./Space";
import { MoveRight } from "lucide-react";

const Blog = () => {
    return (
        <div>
            <Navbar />
            <section className="py-20" id="blog">
                <div className="container mx-auto px-4 max-w-7xl">
                    <AnimateText text={"📝 Our Food Stories"} />
                    <Space height={5} />
                    <AnimateText text={"Tips, recipes, behind-the-scenes — straight from our kitchen to you."} tagType="p" />
                    <Space height={15} />
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="shadow rounded-lg overflow-hidden hover:shadow-xl transition text-gray-800 dark:text-white dark:bg-slate-800"
                            >
                                <img
                                    src={"./assets/blog/" + blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-sm dark:text-white dark:bg-slate-800 mb-1">{blog.date}</p>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm mb-4 dark:text-white dark:bg-slate-800">{blog.snippet}</p>
                                    <a
                                        href={blog.link}
                                        className="text-red-500 hover:underline text-sm font-medium"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-2 px-3 rounded-md bg-red-500 cursor-pointer flex w-36 justify-center gap-2 items-center duration-200 hover:gap-4 hover:bg-red-700 my-10 mx-auto"><span>load more</span> <MoveRight/></div>
            </section>
            <Footer />
        </div>
    );
};

export default Blog;
