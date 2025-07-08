import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateText from "./AnimateText";
import Textrender from "./Textrender";
import { categoryByCountry, testCateory } from "../data/data";
import Gallery from "./Gallery";
import Reservation from "./Resevation";
import Order from "./Order";
import Event from "./Event"
import Contact from "./Contact";
import Footer from "./Footer";
import Spacial from "./Spacial"
import { ArrowLeft, ArrowRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {

    const [img, setImg] = useState([]);

    const [currenIndex, setcurrentIndex] = useState(0);
    const arrayLength = categoryByCountry.length;
    const [data, setData] = useState(0);

    useEffect(() => {
        setData(categoryByCountry[currenIndex]);
    }, [currenIndex]);

    const moveRight = () => {
        if (currenIndex < arrayLength - 1) {
            setcurrentIndex(currenIndex + 1);
        }
    }

    const moveLeft = () => {
        if (currenIndex > 0) {
            setcurrentIndex(currenIndex - 1);
        }
    }

    useEffect(() => {
        let galleryImage = [];
        testCateory.forEach((data) => {

            Array.isArray(data.testList) && data.testList.map(imageData => {
                galleryImage.push(imageData.image);
            })
        });
        setImg(galleryImage);
    }, []);

    return (
        <div className="w-full h-auto">
            <Navbar />
            <div id="hero" className="relative flex justify-center items-center h-[60vh] md:h-screen overflow-hidden">
                <div className="absolute pointer-events-none z-20">
                    <AnimateText
                        text={"Eat well, Stay well"}
                        animation={"bounce2"}
                        splitType="words"
                        tagType="h"
                    />
                </div>
                <video src="./assets/hero.mp4" loop playsInline muted autoPlay className="w-full h-full object-fill abolute"></video>
            </div>
            <Textrender text={"About Us"} triggerId="aboutus" variant="fade-out" />
            <section id="about_us" className="px-7">

                <AnimateText text={"Brief Story or Background of the Restaurant Founded with passion and tradition, our restaurant began as a small family kitchen where generations shared recipes and love for authentic flavors. What started as humble home-cooked meals for neighbors soon grew into a beloved dining destination. Every dish on our menu reflects a journey—rooted in cultural heritage, refined by experience, and served with heart. Today, we continue to honor our origins by offering guests not just a meal, but a taste of our story."}
                    triggerId={"about_us"}
                    animation="slide-right"
                    splitType="word"
                    tagType="p"
                />

                <div>
                    <img className="my-5 rounded-3xl" src="./assets/about.jpg" alt="" />
                </div>
            </section>

            <Textrender text={"Our Varius Foods"} variant="bounce" />
            <section id="box2" className="w-full">

                <h1 className="text-center text-3xl mb-10 px-2">
                    <AnimateText
                        text={"An experience where delicious food meets elegant design and inviting ambiance."}
                        animation={"scale-up"}
                        splitType="word"
                        triggerId={"box2"}
                        tagType="p"
                    />
                </h1>

                <section id="horizental" className="overflow-hidden w-full h-screen flex justify-between items-center relative z-50">
                    <ArrowLeft onClick={moveLeft} className="w-8 h-8 rounded-full hover:bg-gray-500 flex justify-center items-center" />
                    <div id="card" className="absolute w-full h-full -z-10">
                        <img className="absolute -z-[3] w-full h-full object-fill" src={"./assets/variusimage/" + data.image} alt="" />
                        <div className="flex flex-col w-full h-full items-start justify-end p-6">
                            <h3 className="text-3xl my-1">{data.cuntryName}</h3>
                            <h3 className=" my-1">{data.food}</h3>
                            <button className="px-2 py-1 bg-blue-500 rounded-md my-2">View more</button>
                        </div>
                    </div>
                    <ArrowRight onClick={moveRight} className="w-7 h-7 rounded-full hover:bg-gray-500 felx justify-center items-center" />
                </section>

            </section>
            <section>
                <Textrender text={"Gallery"} variant="slide-down" triggerId="ralgviomlndom" />
                <Gallery images={img} />
            </section>
            <section>
                <Textrender text={"Spacials"} variant="slide-down" triggerId="Spacialsdkfo" />
                <Spacial />
            </section>
            <section>
                <Textrender text={"Reservation"} variant="fade-up" triggerId="ralgvmlndom" />
                <Reservation />
            </section>
            <section>
                <Textrender text={"Order"} variant="fade-up" triggerId="rabnldom" />
                <Order />
            </section>
            <section>
                <Event />
            </section>
            <section>
                <Textrender text={"Contact"} variant="fade-up" triggerId="ragvndom" />
                <Contact />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default LandingPage;


