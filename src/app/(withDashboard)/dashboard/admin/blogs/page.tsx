import DeleteBlogButton from "@/myComponents/buttons/DeleteBlogButton";
import AddBlogModal from "@/myComponents/modals/AddBlogModal";
import { TFetchedBlog } from "@/types/projectType";
import { getAllBlogs } from "@/utils/actions/blogs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Blogs",
  description:
    "Read insightful blogs by Athkia Adiba Tonne on web development, Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, Redux, and more. Stay updated with coding tips, best practices, and industry trends.",
};

const DashboardBlogsPage = async () => {
  const blogData = await getAllBlogs();
  const blogs = blogData?.data;

  return (
    <div className="lg:px-14 pb-10">
      <div className="flex justify-end">
        <AddBlogModal />
      </div>

      <div>
        <h1 className="text-4xl font-bold pb-10 text-center">All Blogs</h1>
        <div className="mr-2 lg:mr-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogs.map((blog: TFetchedBlog) => (
              <div key={blog?._id} className="shadow-md flex flex-col h-full">
                <Image
                  className="h-[250px] w-full"
                  src={blog?.image}
                  alt="project image"
                  width={500}
                  height={800}
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h1 className="text-4xl font-semibold">{blog?.title}</h1>
                  <p className="text-lg mt-3 mb-5">
                    {blog?.content.slice(0, 158)}...
                    <Link
                      href={`/dashboard/admin/blogs/${blog._id}`}
                      className="underline font-semibold"
                    >
                      Read more
                    </Link>
                  </p>
                  <div>
                    <DeleteBlogButton blogId={blog?._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogsPage;
