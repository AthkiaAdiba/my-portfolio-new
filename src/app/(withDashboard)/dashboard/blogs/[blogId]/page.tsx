import { getSingleBlog } from "@/utils/actions/blogs";
import Image from "next/image";
import moment from "moment";
import UpdateBlogModal from "@/myComponents/modals/UpdateBlogModal";

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
  const { blogId } = await params;
  const blogData = await getSingleBlog(blogId);
  const blog = blogData?.data;

  return (
    <div>
      <div className="flex justify-end lg:px-14 pb-10">
        <UpdateBlogModal blogId={blogId} />
      </div>

      <div className="flex justify-center lg:px-14 pb-10">
        <div>
          <Image
            src={blog?.image}
            alt="Blog Image"
            height={900}
            width={900}
            className="w-full h-[500px]"
          />

          <div className="mt-7 space-y-5 px-6">
            <h1 className="text-5xl font-bold">{blog?.title}</h1>
            <p className="text-xl font-semibold">
              {moment(blog?.postDate).format("DD MMMM, YYYY").toUpperCase()} /
              <span className="ml-2">{blog?.category}</span>
            </p>
            <div>
              {blog?.content.split("\n").map((line: string, index: number) => (
                <p key={index} className="mb-4 text-xl">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
