import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
// 400px
const AboutMe = () => {
  return (
    <div className="overflow-hidden bg-[#22252c] pt-52 pb-28 flex flex-col lg:flex-row items-center justify-center lg:gap-16 xl:gap-24 px-2 lg:px-[9%] xl:px-[13%] mx-auto">
      <div data-aos="fade-right" data-aos-duration="2000">
        <div className="relative min-h-[300px] md:min-h-[300px] lg:min-h-[400px] w-full lg:w-[350px] border-8 border-[#1fb385]">
          <div className="absolute top-10 right-10 -left-8">
            <Image
              width={320}
              height={320}
              alt="Part image"
              src={"/2 Inchi.jpg"}
              className="min-h-[300px]"
            />
          </div>
        </div>

        <div className="mt-16 lg:mt-[5%] flex items-center gap-5">
          <Link href="/Athkia_adiba_Resume.pdf" target="_blank" download>
            <button className="px-4 py-4 text-lg font-semibold text-center text-white transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
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
        className="space-y-4 text-white mt-10 lg:-mt-28 w-full lg:w-[70%]"
      >
        <h4 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde]">
          About Me
        </h4>
        <p className="">
          I am a Full-Stack Web Developer with hands-on experience in building
          responsive, user-friendly, and dynamic web applications. My tech stack
          includes HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux,
          Node.js, Express.js, MongoDB, Mongoose, SQL, PostgreSQL, Prisma, and
          Tailwind CSS. I’m passionate about transforming ideas into impactful
          digital solutions and continuously expanding my skills. Alongside
          full-stack development, I’m want to explore Docker, Kubernetes, Cloud
          infrastructure, Linux system operations, Microsoft Azure, AWS, Vitest,
          Jest, and GraphQL, to become a well-rounded developer with strong
          DevOps capabilities.
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">NAME:</span> Athkia Adiba
          Tonne
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">NATIONALITY:</span> Citizen
          Of Bangladesh
        </p>
        <p className="text-xl">
          <span className="text-[#00d7bb] font-bold">ADDRESS:</span> Dhaka,
          Bangladesh
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

    // <div className="overflow-hidden bg-[#22252c] py-28 px-4 md:px-8 lg:px-[13%]">
    //   <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between lg:gap-24 mx-auto relative">
    //     {/* Left Section: Image and Border */}
    //     <div
    //       data-aos="fade-right"
    //       data-aos-duration="2000"
    //       className="w-full lg:w-5/12 flex justify-center lg:justify-start mb-16 lg:mb-0 relative aos-init min-h-[400px] md:min-h-[450px] lg:min-h-0"
    //     >
    //       {/* Image Container (positioned to overlap border) */}
    //       <div className="absolute top-0 left-0 w-[320px] h-[370px] md:w-[380px] md:h-[430px] z-10 transform translate-x-8 translate-y-8">
    //         <Image
    //           layout="fill"
    //           objectFit="cover"
    //           alt="About me image"
    //           src={"/2 Inchi.jpg"} // Ensure you have this image in your public folder
    //         />
    //       </div>
    //       {/* Green Border (positioned behind image) */}
    //       <div className="absolute top-0 left-0 w-[320px] h-[370px] md:w-[380px] md:h-[430px] border-8 border-[#00d7bb] z-0 transform -translate-x-8 -translate-y-8"></div>
    //     </div>

    //     {/* Right Section: Content */}
    //     <div
    //       data-aos="fade-left"
    //       data-aos-duration="2000"
    //       className="w-full lg:w-7/12 space-y-6 aos-init"
    //     >
    //       <h4 className="text-5xl font-extrabold text-[#1fb385] mb-8">
    //         ABOUT ME
    //       </h4>
    //       <p className="text-white text-lg font-thin leading-relaxed mb-6">
    //         I am a Full-Stack Web Developer with hands-on experience in building
    //         responsive, user-friendly, and dynamic web applications. My tech
    //         stack includes HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
    //         Redux, Node.js, Express.js, MongoDB, Mongoose, SQL, PostgreSQL,
    //         Prisma, and Tailwind CSS. I&apos;m passionate about transforming
    //         ideas into impactful digital solutions and continuously expanding my
    //         skills. Alongside full-stack development, I&apos;m want to explore
    //         Docker, Kubernetes, Cloud infrastructure, Linux system operations,
    //         Microsoft Azure, AWS, Vitest, Jest, and GraphQL, to become a
    //         well-rounded developer with strong DevOps capabilities.
    //       </p>

    //       <div className="flex flex-col gap-y-4 text-white text-lg mb-8">
    //         <p className="whitespace-nowrap">
    //           <span>
    //             <span className="text-[#00d7bb] font-semibold">NAME:</span>{" "}
    //             Athkia Adiba Tonne
    //           </span>
    //         </p>
    //         <p className="whitespace-nowrap">
    //           <span>
    //             <span className="text-[#00d7bb] font-semibold">
    //               DATE OF BIRTH:
    //             </span>{" "}
    //             14 February 1986
    //           </span>
    //         </p>
    //         <p className="whitespace-nowrap">
    //           <span>
    //             <span className="text-[#00d7bb] font-semibold">
    //               NATIONALITY:
    //             </span>{" "}
    //             Bangladeshi
    //           </span>
    //         </p>
    //         <p className="whitespace-nowrap">
    //           <span>
    //             <span className="text-[#00d7bb] font-semibold">ADDRESS:</span>{" "}
    //             Dhaka, Bangladesh
    //           </span>
    //         </p>
    //         <p className="whitespace-nowrap">
    //           <span>
    //             <span className="text-[#00d7bb] font-semibold">PHONE:</span>{" "}
    //             +8801988118962
    //           </span>
    //         </p>
    //         <p className="whitespace-nowrap">
    //           <span>
    //             <span className="text-[#00d7bb] font-semibold">E-MAIL:</span>{" "}
    //             athkiaadiba@gmail.com
    //           </span>
    //         </p>
    //       </div>

    //       <div>
    //         <Link
    //           href="/Resume2 (2).pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <button className="px-8 py-4 text-xl shadow-2xl font-semibold text-center text-white transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto flex items-center gap-2">
    //             <FaCloudDownloadAlt /> Download Resume
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutMe;
