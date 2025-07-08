import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const Slider = ({ images = [], index = 0}) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isDirectionRight, setIsDirectionRight] = useState(true);
  const imageRef = useRef(null);
  const firstRender = useRef(true);

  const totalImages = images.length;
  
  useEffect(() => {
        setCurrentIndex(index);
  }, [index]);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsDirectionRight(false);
    }
  };

  const slideRight = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsDirectionRight(true);
    }
  };

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          x: isDirectionRight ? '100%' : '-100%',
          opacity: 0
        },
        {
          x: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out'
        }
      );
    }
  }, [currentIndex, isDirectionRight]);

  if (totalImages === 0) {
    return <div className="text-center text-red-500">No images to display</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full h-[70vh] sm:h-screen relative flex justify-center items-center overflow-hidden">
      <div className="w-full h-full">
        <img
          ref={imageRef}
          src={`./assets/food/${currentImage}`}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex justify-between items-center absolute z-10 w-full px-4">
        <button
          onClick={slideLeft}
          disabled={currentIndex === 0}
          className="border p-2 cursor-pointer rounded-full duration-150 hover:bg-gray-400 disabled:opacity-30"
        >
          <ArrowLeft className="hover:scale-110 duration-200 text-blue-500" />
        </button>

        <button
          onClick={slideRight}
          disabled={currentIndex === totalImages - 1}
          className="border p-2 cursor-pointer rounded-full duration-150 hover:bg-gray-400 disabled:opacity-30"
        >
          <ArrowRight className="hover:scale-110 duration-200 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
