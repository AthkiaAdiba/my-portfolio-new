import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

const HireMe = () => {
  return (
    <div className="py-20 px-2 lg:px-[13%] mx-auto bg-[#02cfb4]">
      <div className="flex justify-center gap-0 md:gap-0 lg:gap-1 xl:gap-6">
        <div className="flex gap-0 md:gap-2 lg:gap-1 xl:gap-6">
          <div>
            <FaPaperPlane className="text-5xl" />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-center">
              HIRE ME FOR YOUR AWESOME PROJECT
            </h1>
          </div>
        </div>
        <Link
          href="https://www.linkedin.com/in/athkia-adiba-tonne/"
          target="_blank"
        >
          <button
            // variant="outline"
            className="hidden lg:block px-8 py-3 text-lg bg-[#22252c] text-[#02cfb4] hover:bg-[#02cfb4] hover:border-2  hover:border-[#22252c] hover:text-white"
          >
            Hire Me
          </button>
        </Link>
      </div>
      <p className="text-center text-lg">The button bellow will make it easy</p>
      <Link
        href="https://www.linkedin.com/in/athkia-adiba-tonne/"
        target="_blank"
      >
        <button className="block lg:hidden px-8 py-3 text-lg bg-[#22252c] text-[#02cfb4] hover:bg-[#02cfb4] hover:border-2  hover:border-[#22252c] hover:text-white">
          HIRE ME
        </button>
      </Link>
    </div>
  );
};

export default HireMe;
