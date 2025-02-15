"use client";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import Modal from "../modals/NavModal";

// text-[20px]
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
      <div className="absolute inset-0 z-20 text-white px-2 lg:px-32">
        <div className="pt-[5%] flex justify-between">
          {/* item */}
          <div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/AthkiaAdiba" target="_blank">
                <FaGithub className="font-medium text-3xl" />
              </Link>
              {/* <FaFacebookF className='font-medium text-3xl' />
                            <IoLogoTwitter className='font-medium text-3xl' /> */}
              <Link
                href="https://www.linkedin.com/in/athkia-adiba-tonne/"
                target="_blank"
              >
                <FaLinkedinIn className="font-medium text-3xl" />
              </Link>
            </div>
            <div className="mt-[5%] text-start">
              <h1 className="text-[80px] md:text-[120px] lg:text-[120px] font-extralight">
                Hello!
              </h1>
              <p className="text-[150%] md:text-[300%] lg:text-[400%] font-normal">
                I am Athkia Adiba Tonne
              </p>
              <p className="text-3xl font-light">
                <Typewriter
                  words={[
                    "Front-end Developer",
                    "Junior Full-Stack",
                    "Junior React Developer",
                  ]}
                  loop={5}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
          </div>
          {/* icon */}
          <div>
            <RiMenu3Fill
              onClick={() => setShowModal(true)}
              className="font-medium text-3xl"
            />
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Video;
