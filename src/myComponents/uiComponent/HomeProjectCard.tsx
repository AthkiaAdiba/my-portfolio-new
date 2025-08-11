/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
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
          {project?.features
            ?.slice(0, 3)
            ?.map((list: string, index: number) => (
              <p key={index} className="flex items-start gap-5">
                <span className="inline-block">
                  <IoIosArrowForward className="text-[#00d7bb]" />
                </span>
                <span className="inline-block">{list}</span>{" "}
              </p>
            ))}

          <Link href={`/projects/${project._id}`}>
            <button className="mt-10 px-4 py-2 text-lg shadow-2xl font-semibold text-center text-white transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
              <p className="flex items-center gap-2">See Details</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectCard;
