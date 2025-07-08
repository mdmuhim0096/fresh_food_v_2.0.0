import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Moon, Sun, X, Menu } from "lucide-react";
import logo from "/assets/sitelogoa.png";

const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false);
    const [isDarkMode, setDarkMode] = useState(localStorage.getItem("darkmode"));
    useEffect(() => {
        const root = document.getElementById("root");
        if (isDarkMode === true || isDarkMode === "true") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark")
        }
    }, [isDarkMode]);

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        const ctx = gsap.context(() => {
            tl.from("#sitetile", { y: -40, opacity: 0 });
            tl.from("nav #navitem li", { y: -40, opacity: 0, stagger: 0.15 })
        })

        return () => ctx.revert();
    }, [isMenu])

    const setDarkModeHnadel = () => {
        localStorage.setItem("darkmode", isDarkMode === true || isDarkMode === "true" ? false : true);
        setDarkMode(isDarkMode === true || isDarkMode === "true" ? false : true)
    }

    return (
        <nav className='flex justify-between items-center sm:items-start p-2 sticky top-0 left-0 z-50 dark:bg-gray-900 bg-white'>
            <ul id='sitetile' className='flex items-center gap-7'>
                <li className='text-2xl font-bold text-transparent capitalize'>
                    <img src={logo} className='w-32 h-16 object-fill' />
                </li>
                <li onClick={() => { setDarkModeHnadel() }}>{isDarkMode === true || isDarkMode === "true" ? <Sun /> : <Moon />}</li>
            </ul>
            <Menu className='sm:hidden' onClick={() => { setIsMenu(true) }} />
            <ul id='navitem' className={`${isMenu ? "flex" : "hidden"} flex-col w-full h-screen md:h-auto items-start gap-5 fixed z-30 top-0 left-0 backdrop-blur-lg duration-200 p-2 sm:static sm:flex-row sm:w-auto sm:bg-transparent sm:flex text-xl leading-loose md:text-[18px]`}>
                <X className='sm:hidden float-end' onClick={() => { setIsMenu(false) }} />
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/blog"}>Blog</Link>
                </li>
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/menu"}>Menu</Link>
                </li>
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/about"}>About</Link>
                </li>
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/service"}>Services</Link>
                </li>
                <li className='hover:text-gray-400 md:hover:pt-2'>
                    <Link to={"/testimonials"}>testimoials</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;