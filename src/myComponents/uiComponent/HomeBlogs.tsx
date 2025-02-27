import { TFetchedBlog } from "@/types/projectType";
import { getAllBlogs } from "@/utils/actions/blogs";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";

const HomeBlogs = async () => {
  const blogsData = await getAllBlogs();
  const blogs = blogsData?.data;

  return (
    <div className="bg-[#22252c] pt-28">
      <h1
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f298] to-[#07f7f7] text-center aos-init"
      >
        Blog Posts
      </h1>

      <div className="px-2 lg:px-[4%] xl:px-[13%] mx-auto pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs?.slice(0, 3).map((blog: TFetchedBlog) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={blog?._id}
              className="bg-[#313741] flex flex-col h-full aos-init"
            >
              <Image
                className="h-[250px]"
                src={blog?.image}
                alt="project image"
                width={500}
                height={800}
              />

              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-[#00d7bb] text-2xl font-semibold">
                  {blog?.title}
                </h1>
                <p className="font-medium text-white mt-3">
                  {moment(blog?.postDate).format("DD MMMM, YYYY").toUpperCase()}{" "}
                  /<span className="ml-2">{blog?.category}</span>
                </p>
                <p className="text-slate-200 mt-3 mb-5">
                  {blog?.content.slice(0, 158)}...
                </p>
                <Link href={`/blogs/${blog?._id}`} className="mt-auto">
                  <button className="px-5 py-3 text-center text-white hover:text-black transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
                    <p className="flex items-center gap-2">
                      READ MORE <IoIosArrowForward />
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center">
          <Link href="/blogs">
            <button className="px-8 py-4 text-xl font-semibold text-center text-white transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
              <p className="flex items-center gap-2">LOAD MORE</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
