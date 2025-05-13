import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-[#22252c] pt-32 pb-28 flex flex-col lg:flex-row justify-center lg:gap-16 xl:gap-28 px-2 lg:px-32 mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="aos-init"
        >
          <div className="relative h-[400px] w-full md:w-[40%] lg:w-[350px] border-8 border-[#1fb385]">
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
              href="/athkia_adiba_tonne_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 text-xl shadow-2xl font-semibold text-center text-white transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
                <p className="flex items-center gap-2">
                  <FaCloudDownloadAlt /> Download Resume
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="aos-init">
          <div className="space-y-4 text-white w-full">
            <h4 className="text-5xl mt-16 md:mt-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde]">
              About Me
            </h4>
            <p className="text-lg font-thin">
              I am a Full-Stack Web Developer with hands-on experience in
              building responsive and dynamic web applications. My tech stack
              includes HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
              Redux, Node.js, Express.js, MongoDB, Mongoose, SQL, PostgreSQL,
              Prisma, and Tailwind CSS. I’m passionate about transforming ideas
              into impactful digital solutions and continuously expanding my
              skills. Alongside full-stack development, I’m actively exploring
              Docker, AWS, Vitest, Jest, and GraphQL, to become a well-rounded
              developer with strong DevOps capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
