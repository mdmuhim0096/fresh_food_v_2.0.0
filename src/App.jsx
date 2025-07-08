import React, { useEffect, useState, usestate } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Testimonials from "./component/Testimonials";
import ContactAdvance from "./component/ContactAdvance";
import About from "./component/About";
import Blog from "./component/Blog";
import Service from "./component/Service";
import Menu from "./component/Menu";
import { MoveUp } from "lucide-react";

const App = () => {

  const [isToTop, setIsTotop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsTotop(true);
      }else{
           setIsTotop(false);
      }
    })
  }, []);

  const totopButton = () => {
    document.body.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // optional for smooth scrolling
      });
    };
  };

  return (
    <div className="h-auto dark:bg-gray-900 dark:text-white overflow-x-hidden">
      <BrowserRouter basename="/fresh_food_v_2.0.0/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactAdvance />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>

      <div className={`${isToTop ? "flex" : "hidden"} w-10 h-10 bg-green-400 justify-center items-center rounded-md shadow-lg fixed z-[100] bottom-3 left-3`} onClick={() => { totopButton() }}><MoveUp /></div>
    </div>
  )
}

export default App;