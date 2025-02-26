/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/utils/actions/blogs";
import { toast } from "sonner";

const DeleteBlogButton = ({ blogId }: any) => {
  const handleDeleteBlog = async (blogId: string) => {
    const toastId = toast.loading("Deleting Blog..", { duration: 2000 });

    try {
      const res = await deleteBlog(blogId);

      if (!res.success) {
        toast.error(res?.message, { id: toastId });
      } else if (res.success) {
        toast.success(res?.message, { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred while deleting the project.");
      console.error(error);
    }
  };

  return (
    <Button
      onClick={() => handleDeleteBlog(blogId)}
      className="mt-5 p-3 dark:text-black font-semibold tracking-wide rounded-none text-white"
    >
      Delete Blog
    </Button>
  );
};

export default DeleteBlogButton;
