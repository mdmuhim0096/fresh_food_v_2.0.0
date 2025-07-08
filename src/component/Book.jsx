import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { doReadyForBook } from './ready';
import AnimatedText from "./AnimateText";
import { MoveRight } from "lucide-react";

const Book = ({ data }) => {
    const bookRef = useRef();
    const bookData = doReadyForBook(data) || [];
    const [pages, setPages] = useState(bookData);

    return (
        <div id="menubook" className="w-full h-screen flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[1000px] h-full px-2 md:px-10 flex justify-center items-center">
                <HTMLFlipBook
                    ref={bookRef}
                    width={450}
                    height={550}
                    minWidth={250}
                    minHeight={400}
                    maxWidth={800}
                    maxHeight={1000}
                    size="stretch"
                    showCover={true}
                    mobileScrollSupport={true}
                    className="w-full h-full"
                >
                    {/* Front Cover */}
                    <div className="bg-white dark:bg-gray-700 p-4 text-center text-lg font-bold shadow">
                        <div className="flex flex-col justify-between gap-6 lg:gap-20">
                            <h1 className="font-extrabold italic text-3xl underline">Menu Book</h1>
                            <div className="w-full h-56 flex justify-center items-center">
                                <img src="./assets/fab.webp" className="lg:w-64 lg:h-64"/>
                            </div>
                            <h1 className="text-2xl">Open</h1>
                        </div>
                    </div>

                    {/* Pages */}
                    {pages.map((data, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 text-base shadow-md flex flex-col items-center justify-center"
                        >
                            <div className="w-full h-40 sm:h-52 md:h-[48%] lg:h-72 mb-4 rounded-md">
                                <img src={`./assets/food/${data.image}`} alt="" className="h-full object-fill w-full" />
                            </div>
                            <div className="flex flex-col justify-between h-[48%] lg:h-[42.4%]">
                                <div>
                                    <div className="flex justify-between items-center my-3">
                                        <strong className="text-xl sm:text-2xl">{data.categoryName}</strong>
                                        <i>${data.price}</i>
                                    </div>
                                    <p className="my-2">{data.description}</p>
                                    <div className="bg-rose-500 w-32 rounded-sm hover:bg-red-600 cursor-pointer text-center my-5 capitalize">view more <MoveRight className="inline mx-2" /></div>
                                </div>
                                <q>page - {index + 1}</q>
                            </div>
                        </div>
                    ))}

                    {/* Back Cover */}
                    <div className="bg-white dark:bg-gray-700 p-4 text-center text-lg font-bold shadow">
                        📕 Back Cover
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default Book;
