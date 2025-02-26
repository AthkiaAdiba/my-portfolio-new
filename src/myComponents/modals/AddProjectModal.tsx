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
import { Textarea } from "@/components/ui/textarea";
import { createProject } from "@/utils/actions/project";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddProjectModal = () => {
  const [open, setOpen] = useState(false);
  const [featureValues, setFeatureValues] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const upload_preset = "stationary_shop";
  const cloud_name = "dv6fgvj2c";

  //   add projects to database
  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading("Adding Project", { duration: 2000 });

    if (images.length === 0) {
      toast.error("At least one project image is required!", { id: toastId });
      return;
    }

    formData.features = featureValues;
    formData.images = images;
    console.log(formData);

    const uploadedImages = await Promise.all(
      formData.images.map(async (imageFile: File) => {
        const imageData = new FormData();
        imageData.append("file", imageFile);
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
        return uploadedImage.url;
      })
    );

    // Prepare data for the backend
    const projectData = {
      projectName: formData.name,
      image: uploadedImages,
      projectDescription: formData.description,
      features: featureValues,
      technologies: formData.technologies,
      liveLink: formData.liveLink,
      serverCodeLink: formData.serverCodeLink,
      clientCodeLink: formData.clientCodeLink,
    };

    try {
      const res = await createProject(projectData);
      // console.log(res);

      if (!res.success) {
        toast.error(res?.message, { id: toastId });
        reset();
        setImages([]);
        setFeatureValues([]);
        setOpen(false);
      } else if (res.success) {
        toast.success(res?.message, { id: toastId });
        reset();
        setImages([]);
        setFeatureValues([]);
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("Something went wrong!", { id: toastId });
      reset();
      setImages([]);
      setFeatureValues([]);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 dark:bg-white dark:text-black text-white rounded-none">
          Add Project
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
              <Label htmlFor="name" className="text-right font-semibold">
                Project Name:
              </Label>
              <Input
                id="name"
                type="text"
                className="col-span-3"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500">Project Name is required!</p>
              )}
            </div>
            {/* field 2 */}
            <div>
              <Label htmlFor="description" className="text-right font-semibold">
                Description:
              </Label>
              <Textarea
                rows={6}
                placeholder="Write Project description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-red-500">Project description is required!</p>
              )}
            </div>
            {/* field 3 */}
            <div>
              <Label htmlFor="brand" className="text-right font-semibold">
                Features:
              </Label>
              <Textarea
                id="features"
                placeholder="Enter features separated by fullstop"
                rows={3}
                className="col-span-3"
                {...register("features", {
                  required: "Features are required!",
                  onChange: (e) => {
                    const inputValues = e.target.value
                      .split(".")
                      .map((val: string) => val.trim())
                      .filter((val: string) => val !== "");
                    setFeatureValues(inputValues);
                  },
                })}
              />
              {errors.features && (
                <p className="text-red-500">Project features are required!</p>
              )}
            </div>
            {/* field 5 */}
            <div>
              <Label htmlFor="file" className="text-right font-semibold">
                Project Image:
              </Label>
              <Input
                accept="image/*"
                multiple
                required
                type="file"
                id="file"
                className="col-span-3"
                onChange={(event) => {
                  const files = event.target.files;
                  if (files) {
                    setImages((prevImages) => [
                      ...prevImages,
                      ...Array.from(files),
                    ]);
                  }
                }}
              />
            </div>

            {/* field 6 */}
            <div>
              <Label
                htmlFor="technologies"
                className="text-right font-semibold"
              >
                Technologies:
              </Label>
              <Textarea
                id="technologies"
                placeholder="Enter technologies"
                rows={2}
                className="col-span-3"
                {...register("technologies", {
                  required: true,
                })}
              />
              {errors.technologies && (
                <p className="text-red-500">Technologies are required!</p>
              )}
            </div>

            {/* field 7 */}
            <div>
              <Label htmlFor="liveLink" className="text-right font-semibold">
                Live Link:
              </Label>
              <Input
                id="liveLink"
                type="text"
                className="col-span-3"
                {...register("liveLink", { required: true })}
              />
              {errors.liveLink && (
                <p className="text-red-500">Live link is required!</p>
              )}
            </div>

            {/* field 8 */}
            <div>
              <Label
                htmlFor="serverCodeLink"
                className="text-right font-semibold"
              >
                Server Code Link:
              </Label>
              <Input
                id="serverCodeLink"
                type="text"
                className="col-span-3"
                {...register("serverCodeLink", { required: true })}
              />
              {errors.serverCodeLink && (
                <p className="text-red-500">Server Code Link is required!</p>
              )}
            </div>

            {/* field 9 */}
            <div>
              <Label
                htmlFor="clientCodeLink"
                className="text-right font-semibold"
              >
                Client Code Link:
              </Label>
              <Input
                id="clientCodeLink"
                type="text"
                className="col-span-3"
                {...register("clientCodeLink", { required: true })}
              />
              {errors.clientCodeLink && (
                <p className="text-red-500">Client Code Link is required!</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectModal;
