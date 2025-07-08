import React from 'react'
import AnimateText from "./AnimateText";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TextReder from './Textrender';
import Space from './Space';
import { story } from "../data/data";

const About = () => {
    return (
        <div>
            <Navbar />
            <div id='advanceAbout' className='w-full h-auto flex justify-center items-center relative'>
                <img src="./assets/about.jpg" className='w-full opacity-80' />
                <div className='absolute animate-bounce'>
                    <AnimateText text={"About Us"} triggerId={"advanceAbout"} splitType='chars' animation='rotate' />
                </div>
            </div>
            <div id='exp' className='text-left px-4'>
                <Space height={30} />
                <AnimateText text={"🍽️ Our Story: From a Humble Kitchen to a Beloved Dining Destination"} triggerId={"advanceAbout"} splitType='chars' animation='rotate' tagType='p' />
                <Space height={7} />

                <AnimateText text={story} triggerId={"advanceAbout"} splitType='word' animation='slide-down' tagType='p' />
            </div>
            <Space height={30}/>
            <Footer />
        </div>
    )
}

export default About