/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createEmail } from "@/utils/actions/email";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading("Sending Message", { duration: 2000 });

    const emailData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await createEmail(emailData);
      console.log(res);
      if (!res.success) {
        toast.error(res?.message, { id: toastId });
        reset();
      } else if (res.success) {
        toast.success(res?.message, { id: toastId });
        reset();
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("Something went wrong!", { id: toastId });
      reset();
    }
  };

  return (
    <div className="text-white bg-[#22252c]">
      <h4
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mb-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde] text-center aos-init"
      >
        CONTACT ME
      </h4>
      <section className="py-6 px-2 lg:px-[13%] pb-20 lg:pb-36">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 aos-init"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <label className="block flex-1">
              <span className="mb-1">Name</span>
              <input
                type="text"
                placeholder="Name"
                className="block w-full rounded-md border-2 border-gray-500 py-2 pl-2 shadow-sm focus:ring focus:ring-[#02cfb4] bg-gray-500"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500">Name is required!</p>}
            </label>
            <label className="block flex-1">
              <span className="mb-1">Email</span>
              <input
                type="email"
                placeholder="Email"
                className="block w-full rounded-md border-2 border-gray-500 py-2 pl-2 shadow-sm focus:ring focus:ring-[#02cfb4] bg-gray-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Name is required!</p>
              )}
            </label>
          </div>
          <label className="block">
            <span className="mb-1">Subject</span>
            <input
              type="text"
              placeholder="Subject"
              className="block w-full rounded-md border-2 border-gray-500 py-2 pl-2 shadow-sm focus:ring focus:ring-[#02cfb4] bg-gray-500"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <p className="text-red-500">Name is required!</p>
            )}
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows={10}
              className="block w-full rounded-md focus:ring focus:ring-[#02cfb4] bg-gray-500"
              {...register("message", { required: true })}
            ></textarea>
            {errors.subject && (
              <p className="text-red-500">Name is required!</p>
            )}
          </label>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg bg-[#22252c] border border-[#02cfb4] hover:text-[#22252c] hover:bg-[#02cfb4]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
