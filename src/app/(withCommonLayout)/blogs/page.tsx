import ProjectsAndBlogsBanner from "@/myComponents/shared/ProjectsAndBlogsBanner";
import { TFetchedBlog } from "@/types/projectType";
import { getAllBlogs } from "@/utils/actions/blogs";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Blogs",
};

const BlogsPage = async () => {
  const session = await getServerSession(authOptions);
  const blogsData = await getAllBlogs();
  const blogs = blogsData?.data;

  return (
    <div>
      <ProjectsAndBlogsBanner session={session}></ProjectsAndBlogsBanner>
      <div className="min-h-screen px-2 lg:px-[13%] bg-[#22252c]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
          {blogs?.map((blog: TFetchedBlog) => (
            <div key={blog?._id} className="bg-[#313741] flex flex-col h-full">
              <Image
                className="h-[250px]"
                src={blog?.image}
                alt="project image"
                width={500}
                height={800}
              />

              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-[#00d7bb] text-4xl font-semibold">
                  {blog?.title}
                </h1>
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
      </div>
    </div>
  );
};

export default BlogsPage;
