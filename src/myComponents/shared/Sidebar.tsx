"use client";

import { MdDashboard, MdOutlineClose } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaHome, FaMicroblog } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Sidebar = ({ session }: { session: UserProps | null }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const userRoutes = [
    {
      path: `/dashboard`,
      name: "Dashboard",
      id: 1,
      icon: <MdDashboard />,
    },
    {
      path: `/dashboard/blogs`,
      name: "Blog Management",
      id: 2,
      icon: <FaMicroblog />,
    },
    {
      path: `/dashboard/projects`,
      name: "Project Management",
      id: 3,
      icon: <GrProjects />,
    },
    {
      path: `/dashboard/messages`,
      name: "Message Management ",
      id: 4,
      icon: <FiMessageSquare />,
    },
    {
      path: `/`,
      name: "Home",
      id: 5,
      icon: <FaHome />,
    },
  ];

  return (
    <>
      {/* Sidebar Toggle Button for Mobile (Hidden when Sidebar is Open) */}
      {!openSidebar && (
        <button
          onClick={() => setOpenSidebar(true)}
          className="lg:hidden p-1 text-3xl text-white bg-gray-900 fixed z-50 rounded-md"
        >
          <IoMdMenu />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`h-full p-3 pt-8 space-y-2 w-64 bg-gray-900 text-white fixed lg:relative top-0 left-0 transform transition-transform duration-300 ease-in-out z-50 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setOpenSidebar(false)}
          className="lg:hidden absolute text-4xl top-0 right-0 text-white rounded-md"
        >
          <MdOutlineClose />
        </button>

        {/* User Info */}
        <div className="flex items-center p-2 space-x-4">
          <Image
            src={
              session?.user?.image ||
              "https://res.cloudinary.com/dv6fgvj2c/image/upload/v1738848037/aw31zjonlmq96og1bm3k.png"
            }
            alt="user image"
            width={50}
            height={50}
            className="rounded-full bg-white"
          />
          <div>
            <h2 className="text-lg font-semibold">{session?.user?.name}</h2>
            <span className="flex items-center space-x-1">
              <Link
                href="/dashboard"
                className="text-base hover:underline text-gray-400"
              >
                View profile
              </Link>
            </span>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 pl-4 space-y-4 text-sm">
            {userRoutes.map((route) => (
              <li key={route.id} className="flex items-center gap-2 text-lg">
                {route.icon}
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
