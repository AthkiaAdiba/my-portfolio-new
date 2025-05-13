import ProjectsAndBlogsBanner from "@/myComponents/shared/ProjectsAndBlogsBanner";
import { getSingleBlog } from "@/utils/actions/blogs";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import moment from "moment";

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const blogData = await getSingleBlog(blogId);
  const blog = blogData?.data;

  return {
    title: blog.title,
    description: blog.content,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const session = await getServerSession(authOptions);
  const { blogId } = await params;
  const blogData = await getSingleBlog(blogId);
  const blog = blogData?.data;

  return (
    <div>
      <ProjectsAndBlogsBanner session={session}></ProjectsAndBlogsBanner>

      <div className="min-h-screen px-2 lg:px-[13%] bg-[#22252c]">
        <div className="flex gap-6 pt-24">
          <div>
            <Image
              src={blog?.image}
              alt="Blog Image"
              height={900}
              width={900}
              className="w-full h-[500px]"
            />

            <div className="mt-7 space-y-5 px-6">
              <h1 className="text-3xl md:text-5xl font-bold text-[#00d7bb]">
                {blog?.title}
              </h1>
              <p className="text-lg md:text-xl font-semibold text-[#00d7bb]">
                {moment(blog?.postDate).format("DD MMMM, YYYY").toUpperCase()} /
                <span className="ml-2">{blog?.category}</span>
              </p>
              <div className="text-slate-200">
                {blog?.content
                  .split("\n")
                  .map((line: string, index: number) => (
                    <p key={index} className="mb-4 text-base md:text-xl">
                      {line}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
