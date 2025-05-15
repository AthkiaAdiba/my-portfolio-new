/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { registerUser } from "@/utils/actions/auth";

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  image: FileList;
}

const RegisterForm = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const password = watch("password");
  const imageFile = watch("image");
  const upload_preset = "stationary_shop";
  const cloud_name = "dv6fgvj2c";

  // Handle image preview
  useEffect(() => {
    if (imageFile?.[0]) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [imageFile]);

  const onSubmit: SubmitHandler<RegisterForm> = async (formData) => {
    const toastId = toast.loading("Registering...", {
      duration: 2000,
    });

    console.log(formData);

    const imageData = new FormData();
    imageData.append("file", formData?.image?.[0]);
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

      if (!uploadedImage.url) {
        toast.error("Image upload failed!", { id: toastId });
        return;
      }

      const registerData = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        phone: formData.phone,
        image: uploadedImage.url, // Use the URL directly here
      };

      const res = await registerUser(registerData);
      if (res.success) {
        toast.success(res?.message, { id: toastId });
        router.push("/login");
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#22252c] p-4">
      <div className="w-full max-w-3xl">
        <div className="bg-[#313741] border border-[#05c7ae] rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#1fb385] to-[#24dfde] bg-clip-text text-transparent">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-400 mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-400 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="image" className="block text-gray-400 mb-2">
                    Profile Image
                  </label>
                  {!previewImage ? (
                    <div className="relative">
                      <input
                        id="image"
                        {...register("image", {
                          required: "Profile image is required",
                        })}
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                      <label
                        htmlFor="image"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#05c7ae] border-dashed rounded-lg cursor-pointer bg-[#22252c] hover:bg-[#2a2f38] transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FaCamera className="w-8 h-8 mb-2 text-[#05c7ae]" />
                          <p className="mb-2 text-sm text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-400">
                            PNG, JPG or JPEG (MAX. 2MB)
                          </p>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="relative w-32 h-32 mx-auto">
                      <Image
                        src={previewImage}
                        alt="Profile preview"
                        fill
                        className="rounded-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setPreviewImage(null)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  {errors.image && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1fb385] to-[#24dfde] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#05c7ae]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#313741] text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://my-portfolio-new-nine.vercel.app",
                })
              }
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#05c7ae] text-white py-4 px-8 rounded-none font-semibold text-lg uppercase text-center hover:bg-[#04b09a] transition-colors"
            >
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
          </div>

          <div className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#00d7bb] hover:text-[#1fb385] transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
