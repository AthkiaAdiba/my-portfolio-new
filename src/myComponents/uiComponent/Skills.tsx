/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { FaAws, FaCss3Alt, FaHtml5, FaReact, FaStripeS } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoDocker, IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiMongoose,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSqlBold } from "react-icons/pi";
import { FaPython } from "react-icons/fa";

// icon map
const iconMap: any = {
  HTML: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  tailwindcss: <RiTailwindCssFill />,
  JavaScript: <IoLogoJavascript />,
  Firebase: <IoLogoFirebase />,
  ReactJs: <FaReact />,
  Stripe: <FaStripeS />,
  ExpressJs: <SiExpress />,
  MongoDB: <SiMongodb />,
  TypeScript: <SiTypescript />,
  Mongoose: <SiMongoose />,
  Redux: <SiRedux />,
  "Next.js": <RiNextjsFill />,
  Postgresql: <BiLogoPostgresql />,
  Prisma: <SiPrisma />,
  Sql: <PiFileSqlBold />,
  Docker: <IoLogoDocker />,
  AWS: <FaAws />,
  Python: <FaPython />,
};

const Skills = () => {
  const [skills, setSkills] = useState<{ name: string }[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`);
        const data = await res.json();
        setSkills(data?.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="text-white py-16 text-center px-[5%] md:px-16 lg:px-[25%] mx-auto bg-[#313741]">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
        {skills?.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="border-2 rounded-full border-[#00d7bb] p-12 md:p-7 lg:p-5 xl:p-7 hover:bg-gradient-to-r-custom relative"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="text-6xl md:text-6xl lg:text-3xl xl:text-6xl text-[#00d7bb] hover:text-white text-center">
              {iconMap[skill?.name] || "?"}
            </div>
            {hoveredSkill === index && (
              <div className="absolute bottom-0 left-0 w-full text-center bg-gray-800 text-white py-1 rounded-b-full">
                {skill?.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
