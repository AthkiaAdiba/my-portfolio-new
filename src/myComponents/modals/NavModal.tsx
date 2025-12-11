"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

type NavModalProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const NavModal = ({ showModal, setShowModal }: NavModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(() => setIsVisible(false), 500); // Match this duration with your transition
      return () => clearTimeout(timeoutId);
    }
  }, [showModal]);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative w-full h-full my-6 bg-black opacity-80 text-white shadow-lg transform transition-transform duration-500 ease-in-out ${
              showModal ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
            }`}
          >
            <div className="flex justify-end p-5">
              <button
                className="float-right font-light leading-none bg-transparent border-0 outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="block text-2xl text-white bg-transparent outline-none focus:outline-none">
                  <RxCross1 className="text-5xl"></RxCross1>
                </span>
              </button>
            </div>
            <div className="relative flex-auto text-center space-y-3">
              <Link href="/" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  HOMEa
                </p>
              </Link>
              <Link href="#aboutMe" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  ABOUT
                </p>
              </Link>
              <Link href="#education" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  EDUCATION
                </p>
              </Link>
              <Link href="#services" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  SERVICES
                </p>
              </Link>
              <Link href="#skills" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  SKILLS
                </p>
              </Link>
              <Link href="#projects" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  PROJECTS
                </p>
              </Link>
              <Link href="#contact" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  CONTACT ME
                </p>
              </Link>
              <Link href="#hireMe" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  HIRE ME
                </p>
              </Link>
              <Link href="/projects" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  PROJECTS
                </p>
              </Link>
              <Link href="/blogs" onClick={() => setShowModal(false)}>
                <p className="text-3xl leading-relaxed text-white hover:text-[#00d7bb]">
                  BLOGS
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavModal;
