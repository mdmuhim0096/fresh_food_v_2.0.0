import Reactfrom, { useState, useLayoutEffect, useRef } from 'react';
import Slider from './Slider';
import { X } from "lucide-react";

const Gallery = ({ images }) => {
    const [isSlider, setIsSlider] = useState(false);
    const [indexOfImage, setIndexOfImage] = useState(0);

    const handelSlider = (index) => {
        setIsSlider(true);
        setIndexOfImage(index);
    }

    return (
        <div>
            <span className={`border p-1 mt-1 mr-1 cursor-pointer rounded-full duration-150 hover:bg-gray-400 absolute z-40 ${isSlider ? "block" : "hidden"} right-0 hover:scale-110 duration-200 text-blue-500`}>
                <X onClick={() => { setIsSlider(false) }} />
            </span>
            <div className='w-full h-[70vh] sm:h-screen overflow-y-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8' id='actualGallery'>
                {Array.isArray(images) && images.length > 0 ? (images.map((img, index) => (
                    <div onClick={() => { handelSlider(index) }} key={index} className='w-full h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-md'>
                        <img src={"./assets/food/" + img} alt="" className='w-full h-full object-fill rounded-md p-2 duration-200 hover:scale-95 ' />
                    </div>
                ))) : ""}
                <div className={`${isSlider ? "block" : "hidden"} absolute w-full`}>
                    <Slider images={images} index={indexOfImage} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;

