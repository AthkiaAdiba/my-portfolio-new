import ProjectsAndBlogsBanner from "@/myComponents/shared/ProjectsAndBlogsBanner";
import { getSingleBlog } from "@/utils/actions/blogs";
import Image from "next/image";
import { FiCalendar, FiFolder, FiTag } from "react-icons/fi";

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

  // Format date without date-fns
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <ProjectsAndBlogsBanner></ProjectsAndBlogsBanner>

      <div className="min-h-screen px-2 lg:px-[13%] bg-[#22252c]">
        <div className="flex gap-6 pt-24">
          <article className="w-full">
            {/* Blog Header */}
            <header className="mb-8">
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde] mb-4 leading-tight">
                  {blog?.title || "No Title Available"}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#00d7bb]">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-[#00d7bb]" />
                    <span>
                      {blog?.createdAt
                        ? formatDate(blog.createdAt)
                        : "No Date Available"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiFolder className="text-[#00d7bb]" />
                    <span className="bg-[#313741] text-[#00d7bb] px-3 py-1 rounded-full">
                      {blog?.category || "UnCategorized"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-[500px] mb-8 overflow-hidden rounded-xl shadow-lg">
                <Image
                  width={900}
                  height={900}
                  src={blog?.image || "/placeholder-image.jpg"}
                  alt={blog?.title || "Blog Image"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </header>

            {/* <div
              style={{ color: "white" }}
              className="prose prose-lg max-w-none prose-invert [&_*]:!text-white [&_a]:!text-[#00d7bb]"
              dangerouslySetInnerHTML={
                blog?.content
                  ? { __html: blog.content }
                  : { __html: "<p>No content available</p>" }
              }
            /> */}

            {/* Blog Content */}
            <div
              style={{ color: "white" }}
              className="prose prose-lg prose-invert [&_*]:!text-white [&_a]:!text-[#00d7bb] prose prose-lg max-w-none prose-a:text-[#00d7bb] prose-img:rounded-lg prose-img:shadow-md [&>p]:text-white [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:text-white [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ol]:text-white [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>blockquote]:text-white [&>blockquote]:border-l-4 [&>blockquote]:border-[#00d7bb] [&>blockquote]:pl-4 [&>blockquote]:italic [&>pre]:text-white [&>pre]:bg-[#313741] [&>pre]:p-4 [&>pre]:rounded-lg [&>code]:text-white [&>code]:bg-[#313741] [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>h1]:text-white [&>h1]:text-5xl [&>h1]:font-bold [&>h1]:mb-6 [&>h2]:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h2]:mb-5 [&>h3]:text-white [&>h3]:text-3xl [&>h3]:font-bold [&>h3]:mb-4 [&>h4]:text-white [&>h4]:text-2xl [&>h4]:font-bold [&>h4]:mb-3 [&>h5]:text-white [&>h5]:text-xl [&>h5]:font-bold [&>h5]:mb-2 [&>h6]:text-white [&>h6]:text-lg [&>h6]:font-bold [&>h6]:mb-2 [&>strong]:text-white [&>em]:text-white [&>li]:text-white [&>li>p]:text-white [&>li>strong]:text-white [&>li>em]:text-white [&>blockquote>p]:text-white [&>blockquote>strong]:text-white [&>blockquote>em]:text-white [&>pre>code]:text-white"
              dangerouslySetInnerHTML={
                blog?.content
                  ? { __html: blog.content }
                  : { __html: "<p>No content available</p>" }
              }
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#313741]">
              <div className="flex items-center gap-3">
                <FiTag className="text-[#00d7bb] text-xl" />
                <div className="flex flex-wrap gap-2">
                  {blog?.tags?.length > 0 ? (
                    blog.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#313741] text-[#00d7bb] rounded-full text-sm font-medium hover:bg-[#1fb385] hover:text-white transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#00d7bb]">No tags available</span>
                  )}
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-8 pt-6 border-t border-[#313741]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#313741] flex items-center justify-center">
                  <span className="text-[#00d7bb] font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde]">
                    Admin
                  </h3>
                  <p className="text-sm text-[#00d7bb]">Content Writer</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
