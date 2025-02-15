"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import Modal from "../modals/NavModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed z-40 shadow-lg top-0 left-0 right-0 py-5 bg-gradient-to-r from-[#1fb486] to-[#28ddd5] text-white text-center px-2 lg:px-32">
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
        <div>
          <RiMenu3Fill
            onClick={() => setShowModal(true)}
            className="font-medium text-3xl"
          />
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Navbar;
