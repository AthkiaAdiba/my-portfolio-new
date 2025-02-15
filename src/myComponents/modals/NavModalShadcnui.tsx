"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

// type NavModalProps = {
//   showModal: boolean;
//   setShowModal: (value: boolean) => void;
// };

// { showModal, setShowModal }: NavModalProps

const NavModal = () => {
  const [showModal, setShowModal] = useState(false);

  const navLists = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "#aboutMe" },
    { label: "EDUCATION", href: "#education" },
    { label: "SERVICES", href: "#services" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT ME", href: "#contact" },
    { label: "HIRE ME", href: "#hireMe" },
  ];

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <RiMenu3Fill className="font-medium text-3xl cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Edit profile</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when re done.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center text-red-500">
          {navLists.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setShowModal(false)}
            >
              <p className="text-3xl text-red-500 hover:text-[#00d7bb]">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <DialogFooter className="sr-only">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    // <>
    //   {isVisible && (
    //     <div
    //       className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ${
    //         showModal ? "opacity-80" : "opacity-0"
    //       }`}
    //     >
    //       <div
    //         className={`fixed inset-0 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
    //           showModal ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
    //         }`}
    //       >
    //         <button
    //           className="absolute top-0 right-0 text-white text-4xl hover:text-gray-400 transition"
    //           onClick={() => setShowModal(false)}
    //         >
    //           <RxCross1 />
    //         </button>

    //         <div className="flex flex-col items-center space-y-6">
    //           {[
    //             { label: "HOME", href: "/" },
    //             { label: "ABOUT", href: "#aboutMe" },
    //             { label: "EDUCATION", href: "#education" },
    //             { label: "SERVICES", href: "#services" },
    //             { label: "SKILLS", href: "#skills" },
    //             { label: "PROJECTS", href: "#projects" },
    //             { label: "CONTACT ME", href: "#contact" },
    //             { label: "HIRE ME", href: "#hireMe" },
    //           ].map((item) => (
    //             <Link
    //               key={item.label}
    //               href={item.href}
    //               onClick={() => setShowModal(false)}
    //             >
    //               <p className="text-3xl text-white hover:text-[#00d7bb] transition">
    //                 {item.label}
    //               </p>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default NavModal;
