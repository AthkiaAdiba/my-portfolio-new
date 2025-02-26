import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-[#22252c] pt-32 pb-28 flex flex-col lg:flex-row items-center justify-center lg:gap-16 xl:gap-28 px-2 lg:px-32 mx-auto">
      <div data-aos="fade-right" data-aos-duration="2000" className="aos-init">
        <div className="relative h-[400px] w-full lg:w-[350px] border-8 border-[#1fb385]">
          <div className="absolute top-10 right-10 -left-8">
            <Image
              width={320}
              height={320}
              alt="Part image"
              src={"/my_image.jpg"}
            />
          </div>
        </div>
        <div className="mt-16 lg:mt-32">
          <Link
            href="https://drive.google.com/file/d/1-T1VxmEPtXcxZwey6qT41rxcZHy2YrZc/view?usp=sharing"
            target="_blank"
          >
            <button className="px-8 py-4 text-xl font-semibold text-center text-white transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
              <p className="flex items-center gap-2">
                <FaCloudDownloadAlt /> Download Resume
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="space-y-4 text-white mt-0 lg:-mt-28 w-full lg:w-[500px] aos-init"
      >
        <h4 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde]">
          About Me
        </h4>
        <p>
          Hello! I am a passionate web developer skilled in creating dynamic and
          seamless web experiences. Proficient in React.js, JavaScript, HTML,
          CSS, and Tailwind CSS, I bring innovative ideas to life. My backend
          expertise includes Express.js, Node.js, JWT, Firebase, and MongoDB.
          Now, I am exploring Next.js, and as proof, I made this portfolio with
          Next.js.
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">NAME:</span> Athkia Adiba
          Tonne
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">DATE OF BIRTH:</span> 30
          November 1996
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">NATIONALITY:</span> Citizen
          Of Bangladesh
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">ADDRESS:</span>{" "}
          Brahmanbaria, Bangladesh
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">PHONE:</span> +880
          1988118962
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">E-MAIL:</span>{" "}
          athkiaadiba@gmail.com
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
