/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const HomeProjectCard = ({ project }: any) => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="pb-16 aos-init">
      <div className="flex flex-col lg:flex-row bg-[#22252c] text-white shadow-xl">
        <figure className="flex-1">
          <Image
            height={450}
            width={430}
            src={project?.image[0]}
            alt={project?.projectName}
            className="h-[300px] md:h-[400px] lg:h-[600px] xl:h-[550px] w-[900px]"
          />
        </figure>
        <div className="card-body flex-1 p-5 space-y-2">
          <h2 className="card-title text-3xl font-bold text-[#00d7bb]">
            {project?.projectName}
          </h2>
          <p className="text-slate-400">{project?.projectDescription}</p>
          <p className="">Features:</p>
          {project?.features.map((list: string, index: number) => (
            <p key={index} className="flex items-start gap-5">
              <span className="inline-block">
                <IoIosArrowForward className="text-[#00d7bb]" />
              </span>
              <span className="inline-block">{list}</span>
            </p>
          ))}
          <p className="flex gap-4">
            <GrTechnology className="text-6xl text-[#00d7bb]" />
            {project?.technologies}
          </p>
          <div className=" flex items-center gap-10 mt-5">
            <Link href={project?.liveLink} target="_blank">
              <p className="flex items-center gap-2">
                <FaLink className="text-[#00d7bb]" /> Live Link
              </p>
            </Link>
            <Link href={project?.serverCodeLink} target="_blank">
              <p className="flex items-center gap-2">
                <FaLink className="text-[#00d7bb]" /> Server Code Link
              </p>
            </Link>
            <Link href={project?.clientCodeLink} target="_blank">
              <p className="flex items-center gap-2">
                <FaLink className="text-[#00d7bb]" /> Client Code Link
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectCard;
