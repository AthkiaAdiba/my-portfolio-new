"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import ProfilePopOver from "../modals/ProfilePopOver";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { ModeToggle } from "./ModeToggle";
import NavModal from "../modals/NavModal";
import { UserProps } from "@/types/projectType";
import Navbar from "./Navbar";

const ProjectsAndBlogsBanner = ({ session }: { session: UserProps | null }) => {
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
    <div className="relative h-[400px]">
      {scrollY > 200 && <Navbar session={session}></Navbar>}
      <Image
        className="h-[400px] w-full absolute"
        src="/projectsBanner.jpg"
        alt="banner image"
        width={1400}
        height={100}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030507] to-[#070708] opacity-80 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 text-white">
        <div className="py-[2%] fixed flex justify-between bg-[#22252c] w-full shadow-lg px-2 lg:px-32">
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
          </div>
          {/* icon */}
          <div className="flex items-center h-10 gap-3">
            <div>
              <RiMenu3Fill
                onClick={() => setShowModal(true)}
                className="font-medium text-3xl"
              />
            </div>
            <div>
              {session?.user ? (
                <div>
                  <ProfilePopOver session={session}></ProfilePopOver>
                </div>
              ) : (
                <div>
                  <FcGoogle
                    onClick={() =>
                      signIn("google", {
                        callbackUrl: "http://localhost:3000/dashboard",
                      })
                    }
                    className="font-medium text-3xl"
                  />
                </div>
              )}
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 mt-40 ml-32">
        <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#1fb385] to-[#24dfde] bg-clip-text text-transparent">
          Portfolios
        </h1>
        <p className="text-white w-4/5 mt-2">
          Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <NavModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ProjectsAndBlogsBanner;
