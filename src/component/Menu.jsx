import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Textrender from "./Textrender";
import { testCateory } from "../data/data";
import Tilt from "react-parallax-tilt";
import Navbar from './Navbar';
import { useLayoutEffect } from 'react';
import Book from './Book';

const Menu = () => {
    const path_2 = "./assets/food/";
    const [cateGoryName, setCategoryName] = useState("Sweet");
    const [foods, setFoods] = useState([]);
    const [cateGoryName_Client, setCategoryName_Client] = useState([]);

    useEffect(() => {
        let testName = [];
        testCateory.forEach((data) => {
            testName.push(data.categoryName);
        });

        setCategoryName_Client(testName);
        setCategoryName(testName[0]);
        setFoods(testCateory[0].testList);

    }, []);

    const seeCategoeizedFood = (foodName, index) => {
        setCategoryName(foodName);
        setFoods(testCateory[index].testList);
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from("#foodcard", {
                x: -120,
                opacity: 0,
                scale: 0.4,
                ease: "elastic",
                stagger: 0.2
            })
            gsap.from("#categoryName", {
                opacity: 0,
                scale: 0.4,
                ease: "elastic",
            })
        })
        return () => { ctx.kill() }
    }, [foods]);


    return (
        <div>
            <Navbar />
            <section className='w-full h-screen'>
                <Book data={testCateory}/>
            </section>
            <section className='overflow-hidden'>
                <h1 className="">
                    <Textrender text={"Our Menu"} variant="skew" triggerId="dnfvn" />
                </h1>
                <h1 id="categoryName" className="text-center text-3xl">{cateGoryName}</h1>
                <div className="flex justify-center items-center gap-3 my-5 lg:my-10 flex-wrap">{cateGoryName_Client.map((data, index) => (
                    <div onClick={() => { seeCategoeizedFood(data, index) }} key={index} className="sm:w-20 sm:h-auto rounded-md sm:py-2 text-center bg-green-400 hover:bg-green-700 cursor-pointer w-16 text-sm py-1">{data}</div>
                ))}</div>

                <div className="w-full h-auto duration-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-3 sm:p-2">{
                    foods.map((data, index) => (
                        <Tilt key={index}>
                            <div id="foodcard" className="w-full h-[300px] rounded-md dark:border-none dark:bg-gray-700 border-2 shadow-lg p-1 sm:p-2 relative">
                                <span className="absolute rotate-45 top-0 right-0 text-green-400">{data.isPopular ? "populer" : ""}</span>
                                <img className="w-full object-fill h-[140px] mb-4 rounded-md" src={path_2 + data.image} alt="" />
                                <div className="mt-2 flex flex-col justify-between h-32 gap-2">
                                    <span className="flex justify-between">
                                        <h5 className="italic">{data.name}</h5>
                                        <h5 className="">{data.price}$</h5>
                                    </span>
                                    <span className="">{data.description}</span>
                                    <div className="bg-red-500 text-white sm:px-2 sm:py-1 rounded-2xl hover:bg-red-600 transition-all w-32 text-center cursor-pointer">order now</div>
                                </div>
                            </div>
                        </Tilt>
                    ))
                }</div>
            </section>
        </div>
    )
}

export default Menu;