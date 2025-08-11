"use client";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import NavModal from "../modals/NavModal";
import { ModeToggle } from "./ModeToggle";

const Video = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {scrollY > 200 && <Navbar></Navbar>}
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1fb486] to-[#28ddd5] opacity-80 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 text-white px-2 lg:px-[5%]">
        <div className="flex justify-between items-center mt-[5%]">
          {/* write side */}
          <div className="flex items-center gap-4">
            <Link href="https://github.com/AthkiaAdiba" target="_blank">
              <FaGithub className="font-medium text-3xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/athkia-adiba-tonne/"
              target="_blank"
            >
              <FaLinkedinIn className="font-medium text-3xl" />
            </Link>
          </div>
          {/* left side */}
          <div className="flex items-center h-10 gap-3">
            <div>
              <RiMenu3Fill
                onClick={() => setShowModal(true)}
                className="font-medium text-3xl"
              />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="mt-[1%] text-start">
          <h1 className="text-[70px] md:text-[120px] lg:text-[120px] font-extralight">
            Hello!
          </h1>
          <p className="text-[200%] md:-mt-7 md:text-[300%] lg:text-[400%] font-normal">
            I am Athkia Adiba Tonne
          </p>
          <p className="text-2xl md:text-4xl mt-3 font-light">
            <Typewriter
              words={[
                "Front-end Developer",
                "Full-Stack Developer",
                "React Developer",
                "Backend Developer",
              ]}
              loop={5}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
      <NavModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Video;
