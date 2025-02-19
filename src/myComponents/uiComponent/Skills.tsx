"use client";

import { useState } from "react";
import { FaCss3Alt, FaHtml5, FaReact, FaStripeS } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongoose, SiRedux, SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <IoLogoFirebase />, name: "Firebase" },
    { icon: <FaReact />, name: "ReactJs" },
    { icon: <FaStripeS />, name: "Stripe" },
    { icon: <SiExpress />, name: "ExpressJs" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiMongoose />, name: "Mongoose" },
    { icon: <SiRedux />, name: "Redux" },
  ];

  return (
    <div className="text-white py-16 text-center px-[5%] md:px-16 lg:px-[30%] mx-auto bg-[#313741]">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            key={index}
            className="border-2 rounded-full border-[#00d7bb] p-7 md:p-7 lg:p-5 xl:p-7 hover:bg-gradient-to-r-custom relative aos-init"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="text-6xl md:text-6xl lg:text-3xl xl:text-6xl text-[#00d7bb] hover:text-white">
              {skill.icon}
            </div>
            {hoveredSkill === index && (
              <div className="absolute bottom-0 left-0 w-full text-center bg-gray-800 text-white py-1 rounded-b-full">
                {skill.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
