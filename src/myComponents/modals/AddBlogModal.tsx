/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import { format } from "date-fns";
import { toast } from "sonner";
import { createBlog } from "@/utils/actions/blogs";

const AddBlogModal = () => {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const upload_preset = "stationary_shop";
  const cloud_name = "dv6fgvj2c";

  //   add projects to database
  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading("Adding Blog", { duration: 2000 });
    formData.tags = tags;
    formData.postDate = new Date(formData.postDate).toISOString();
    // console.log(formData);

    const imageData = new FormData();
    const rowImage = formData?.image[0];
    imageData.append("file", rowImage);
    imageData.append("upload_preset", upload_preset);
    imageData.append("cloud_name", cloud_name);

    const imageUploadResult = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: imageData,
      }
    );

    const uploadedImage = await imageUploadResult.json();

    // uploading blog data
    if (uploadedImage.url) {
      formData.image = uploadedImage.url;
      const blogData = {
        title: formData.title,
        content: formData.content,
        image: formData.image,
        category: formData.category,
        tags: formData.tags,
        postDate: formData.postDate,
      };

      // console.log("blogData", blogData);

      // uploading Blog
      try {
        const res = await createBlog(blogData);
        console.log(res);
        if (!res.success) {
          toast.error(res?.message, { id: toastId });
          reset();
          setOpen(false);
        } else if (res.success) {
          toast.success(res?.message, { id: toastId });
          reset();
          setOpen(false);
        }
      } catch (err: any) {
        console.error(err.message);
        toast.error("Something went wrong!", { id: toastId });
        reset();
        setOpen(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 dark:bg-white dark:text-black text-white rounded-none">
          Add Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Add Project</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            {/* field 1 */}
            <div>
              <Label htmlFor="title" className="text-right font-semibold">
                Blog Title:
              </Label>
              <Input
                id="title"
                type="text"
                className="col-span-3"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500">Blog title is required!</p>
              )}
            </div>
            {/* field 2 */}
            <div>
              <Label htmlFor="content" className="text-right font-semibold">
                Blog Content:
              </Label>
              <Textarea
                rows={6}
                placeholder="Write Blog content"
                {...register("content", { required: true })}
              />
              {errors.content && (
                <p className="text-red-500">Blog content is required!</p>
              )}
            </div>
            {/* field 3 */}
            <div>
              <Label htmlFor="tags" className="text-right font-semibold">
                Tags:
              </Label>
              <Textarea
                id="tags"
                placeholder="Enter tags separated by coma"
                rows={2}
                className="col-span-3"
                {...register("tags", {
                  required: "Tags are required!",
                  onChange: (e) => {
                    const inputValues = e.target.value
                      .split(",")
                      .map((val: string) => val.trim())
                      .filter((val: string) => val !== "");
                    setTags(inputValues);
                  },
                })}
              />
              {errors.tags && (
                <p className="text-red-500">Blog tags are required!</p>
              )}
            </div>
            {/* field 5 */}
            <div>
              <Label htmlFor="file" className="text-right font-semibold">
                Blog Image:
              </Label>
              <Input
                accept="image/*"
                required
                type="file"
                id="file"
                className="col-span-3"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500">Blog image is required!</p>
              )}
            </div>

            {/* field 6 */}
            <div>
              <Label htmlFor="category" className="text-right font-semibold">
                Blog Category:
              </Label>
              <Input
                id="category"
                type="text"
                className="col-span-3"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500">Category is required!</p>
              )}
            </div>

            {/* field 7 */}
            <div>
              <Label
                htmlFor="postDate"
                className="text-right font-semibold flex mb-2"
              >
                Blog Post Date:
              </Label>
              <Controller
                name="postDate"
                control={control}
                defaultValue={null}
                rules={{ required: "Blog date is required!" }}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${
                          !field.value && "text-muted-foreground"
                        }`}
                      >
                        <CalendarIcon className="mr-2" />
                        {field.value
                          ? format(
                              new Date(field.value),
                              "dd MMMM, yyyy"
                            ).toUpperCase()
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) =>
                          field.onChange(
                            date ? format(date, "yyyy-MM-dd") : null
                          )
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.postDate && (
                <p className="text-red-500">
                  {errors.postDate.message?.toString()}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Blog</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBlogModal;
