/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { updateBlog } from "@/utils/actions/blogs";

const UpdateBlogModal = ({ blogId }: any) => {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const { register, handleSubmit, control, reset } = useForm();

  const upload_preset = "stationary_shop";
  const cloud_name = "dv6fgvj2c";

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading("Updating Information...", {
      duration: 2000,
    });

    if (tags.length > 0) {
      formData.tags = tags;
    }

    if (formData.postDate) {
      formData.postDate = new Date(formData.postDate).toISOString();
    }
    // console.log(formData);

    // Remove empty fields
    const updatedData: Record<string, any> = {};
    Object.keys(formData).forEach((key) => {
      if (key === "file") {
        // Check if file exists and has at least one file
        if (formData.file instanceof FileList && formData.file.length > 0) {
          updatedData[key] = formData[key];
        }
      } else if (
        formData[key] !== "" &&
        formData[key] !== undefined &&
        formData[key] !== null
      ) {
        updatedData[key] = formData[key];
      }
    });

    // console.log(updatedData);

    // Handle Image Upload if file exists
    if (updatedData.file) {
      const imageData = new FormData();
      const rowImage = updatedData.file[0];
      imageData.append("file", rowImage);
      imageData.append("upload_preset", upload_preset);
      imageData.append("cloud_name", cloud_name);

      try {
        const imageUploadResult = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          {
            method: "POST",
            body: imageData,
          }
        );
        const uploadedImage = await imageUploadResult.json();

        if (uploadedImage.url) {
          updatedData.image = uploadedImage.url; // Store uploaded image URL
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error: any) {
        toast.error("Image upload failed!", { id: toastId });
        return;
      }

      delete updatedData.file; // Remove the file field from final data
    }

    // Prepare blog data
    const blogData = {
      blogId,
      data: updatedData,
    };

    try {
      const res = await updateBlog(blogData);

      if (!res.success) {
        toast.error(res?.message, { id: toastId });
        reset();
        setTags([]);
        setOpen(false);
      } else if (res.success) {
        toast.success(res?.message, { id: toastId });
        reset();
        setTags([]);
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("Something went wrong!", { id: toastId });
      reset();
      setTags([]);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 dark:bg-white dark:text-black text-white rounded-none">
          Update Blog
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
                {...register("title")}
              />
            </div>
            {/* field 2 */}
            <div>
              <Label htmlFor="content" className="text-right font-semibold">
                Blog Content:
              </Label>
              <Textarea
                rows={6}
                placeholder="Write Blog content"
                {...register("content")}
              />
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
                  onChange: (e) => {
                    const inputValues = e.target.value
                      .split(",")
                      .map((val: string) => val.trim())
                      .filter((val: string) => val !== "");
                    setTags(inputValues);
                  },
                })}
              />
            </div>
            {/* field 5 */}
            <div>
              <Label htmlFor="file" className="text-right font-semibold">
                Blog Image:
              </Label>
              <Input
                accept="image/*"
                type="file"
                id="file"
                className="col-span-3"
                {...register("file")}
              />
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
                {...register("category")}
              />
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
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Update Blog</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBlogModal;
