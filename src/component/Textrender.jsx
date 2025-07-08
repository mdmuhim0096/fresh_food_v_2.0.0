import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { getBrowserName } from "./ready";
gsap.registerPlugin(ScrollTrigger);

// All animation presets
const animations = {
  "fade-in": { opacity: 0, y: 20, duration: 0.5, ease: "power1.out", stagger: 0.05 },
  "fade-out": { opacity: 0, y: 40, duration: 1, ease: "power1.in", stagger: 1 },
  "slide-left": { opacity: 0, x: -50, duration: 0.5, ease: "power3.out", stagger: 0.05 },
  "slide-right": { opacity: 0, x: 50, duration: 0.5, ease: "power3.out", stagger: 0.05 },
  "slide-up": { opacity: 0, y: 50, duration: 0.5, ease: "power2.out", stagger: 0.05 },
  "slide-down": { opacity: 0, y: -50, duration: 0.5, ease: "power2.out", stagger: 0.05 },
  "scale-up": { opacity: 0, scale: 0.5, duration: 0.6, ease: "back.out(1.7)", stagger: 0.05 },
  "scale-down": { opacity: 0, scale: 1.5, duration: 0.6, ease: "back.out(1.7)", stagger: 0.05 },
  "rotate": { opacity: 0, rotate: 180, duration: 0.6, ease: "expo.out", stagger: 0.05 },
  "flip-x": { opacity: 0, rotateX: 90, duration: 0.6, ease: "circ.out", stagger: 0.05, transformOrigin: "center" },
  "flip-y": { opacity: 0, rotateY: 90, duration: 0.6, ease: "circ.out", stagger: 0.05, transformOrigin: "center" },
  "skew": { opacity: 0, skewX: 45, duration: 0.6, ease: "sine.out", stagger: 0.05 },
  "bounce": { opacity: 0, y: -130, rotate: -25, duration: 1, ease: "elastic", stagger: 0.7 },
  "corner-top-left": { opacity: 0, y: -100, x: -100, rotate: 45, duration: 1, ease: "sine.in", stagger: 0.05 },
  "corner-top-right": { opacity: 0, y: -100, x: 100, rotate: -45, duration: 1, ease: "expo.out" },
  "random": { opacity: 0, margin: 50, rotate: 360, duration: 1.5, ease: "power" }
};

const TextReder = ({ text, triggerId = "typebox", variant = "fade-in", from = "top 30%" }) => {
  const browser = getBrowserName()
  const textRef = useRef();

  useLayoutEffect(() => {
    const split = new SplitType(textRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    const animation = animations[variant] || animations["fade-in"];
    requestAnimationFrame(() => {
      gsap.from(textRef.current.querySelectorAll(".char"), {
        ...animation,
        scrollTrigger: {
          trigger: `#${triggerId}`,
          start: browser === "Firefox" ? "top 80%" : from,
          end: browser === "Firefox" ? "bottom 50%" : null,
          scrub: true,
          pin: browser === "Firefox" ? false : true,
          pinReparent: true
        },
      });
      ScrollTrigger.refresh();
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      split.revert();
    };
    
  }, []);

  return (
    <section
      id={triggerId}
      className="h-[52vh] flex justify-center items-center dark:text-white text-black"
    >
      <h1
        ref={textRef}
        className="text-5xl sm:text-6xl md:text-8xl font-bold text-center max-w-4xl leading-relaxed"
      >
        {text}
      </h1>
    </section>
  );
};

export default TextReder;
