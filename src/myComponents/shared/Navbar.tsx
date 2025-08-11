"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import NavModal from "../modals/NavModal";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed z-40 shadow-lg top-0 w-full py-5 bg-gradient-to-r from-[#1fb486] to-[#28ddd5] text-white text-center px-2 lg:px-32">
      <div className="flex justify-between items-center">
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
        {/* icon */}
        <div className="flex items-center h-10 gap-4">
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
      <NavModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Navbar;
