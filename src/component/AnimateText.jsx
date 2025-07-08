import React, { useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const animations = {
  "fade-in": { opacity: 0, y: 20, duration: 0.5, ease: "power1.out", stagger: 0.05 },
  "slide-left": { opacity: 0, x: -50, duration: 0.5, ease: "power3.out", stagger: 0.05 },
  "slide-right": { opacity: 0, x: 50, duration: 0.5, ease: "power3.out", stagger: 0.05 },
  "slide-up": { opacity: 0, y: 50, duration: 0.5, ease: "power2.out", stagger: 0.05 },
  "slide-down": { opacity: 0, y: -50, duration: 0.8, ease: "power2.out", stagger: 0.09 },
  "scale-up": { opacity: 0, scale: 0.5, duration: 0.6, ease: "back.out(1.7)", stagger: 0.05 },
  "scale-down": { opacity: 0, scale: 1.5, duration: 0.3, ease: "back.out()", stagger: 0.1 },
  "rotate": { opacity: 0, rotate: 180, duration: 0.6, ease: "expo.out", stagger: 0.05 },
  "flip-x": { opacity: 0, rotateX: 90, duration: 0.6, ease: "circ.out", stagger: 0.05, transformOrigin: "center" },
  "flip-y": { opacity: 0, rotateY: 90, duration: 0.6, ease: "circ.out", stagger: 0.05, transformOrigin: "center" },
  "skew": { opacity: 0, skewX: 45, duration: 0.6, ease: "sine.out", stagger: 0.05 },
  "bounce": { opacity: 0, y: -100, duration: 1, ease: "bounce.out", stagger: 0.05 },
    "bounce2": { opacity: 0, y: -250,delay: 1, duration: 1, ease: "bounce.out", stagger: 0.05 }
};

const AnimateText = ({
  text,
  triggerId = null,
  animation = "fade-in",
  splitType = "words",
  fromStart = "top 30%",
  tagType = "h"
}) => {
  const textRef = useRef();

  useLayoutEffect(() => {
    const anim = animations[animation] || animations["fade-in"];
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: splitType });
    const targets =
      splitType === "chars" ? split.chars :
        splitType === "line" ? split.lines :
          split.words;

    const tl = gsap.from(targets, {
      ...anim,
      scrollTrigger: triggerId ? {
        trigger: `#${triggerId}`,
        start: fromStart,
      } : undefined
    });

    return () => {
      split.revert();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [triggerId, animation, splitType, fromStart]);

  return (
    <p className={`${tagType == "p" ? "text-2xl" : tagType == "h" ? "md:text-[7vw] text-[12vw] font-bold whitespace-pre-wrap leading-relaxed" : ""} text-center`} ref={textRef}>{text}</p>
  );
};

export default AnimateText;
