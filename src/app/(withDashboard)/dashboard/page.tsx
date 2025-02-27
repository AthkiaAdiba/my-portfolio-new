import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Dashboard",
  description:
    "Athkia Adiba Tonne – a passionate Full-Stack developer specializing in Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Crafting dynamic and scalable web applications with a focus on performance and user experience.",
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-0 lg:mt-10 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl w-full md:w-3/4 lg:w-4/5 xl:w-2/4">
        <Image
          alt="profile"
          src="/profilebg.jpg"
          width={100}
          height={100}
          className="w-full mb-4 rounded-t-lg h-64"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
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
          </a>

          <p className="p-2 uppercase px-4 text-xs text-white bg-gray-900 rounded-full">
            ADMIN
          </p>
          <div className="w-full space-y-2 p-2 mt-4 rounded-lg">
            {/* first row */}
            <div className="text-lg text-black">
              <p className="flex justify-center flex-col md:flex-row lg:flex-row font-semibold">
                Name:
                <span className="text-gray-600 dark:text-gray-800 ml-2">
                  {session?.user?.name}
                </span>
              </p>
              <p className="flex justify-center flex-col md:flex-row lg:flex-row font-semibold">
                Email:
                <span className="text-gray-600 dark:text-gray-800 ml-2">
                  {session?.user?.email}
                </span>
              </p>
            </div>
            {/* second row */}
            {/* <div className="flex flex-wrap items-center justify-between text-lg text-black dark:text-white">
              <p className="flex flex-col md:flex-row lg:flex-row font-semibold">
                Address:
                <span className="text-gray-600 ml-2 dark:text-white">
                  {singleUser?.data?.address}
                </span>
              </p>
              <p className="flex flex-col md:flex-row lg:flex-row font-semibold">
                Phone:
                <span className="text-start text-gray-600 ml-2 dark:text-white">
                  {singleUser?.data?.phone}
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
