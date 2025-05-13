/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { loginUser } from "@/utils/actions/auth";
import { useUser } from "@/context/UserContext";

interface SignInForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();
  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    const toastId = toast.loading("Logging...", {
      duration: 2000,
    });
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res.success) {
        toast.success(res?.message, { id: toastId });
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err: any) {
      toast.error(err, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#22252c] p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#313741] border border-[#05c7ae] rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#1fb385] to-[#24dfde] bg-clip-text text-transparent">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Password"
                className="w-full bg-[#22252c] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00d7bb] border border-[#05c7ae] text-white"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1fb385] to-[#24dfde] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Sign In
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
                  callbackUrl: "http://localhost:3000",
                  // "https://my-portfolio-new-nine.vercel.app/dashboard",
                })
              }
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#05c7ae] text-white py-4 px-8 rounded-none font-semibold text-lg uppercase text-center hover:bg-[#04b09a] transition-colors"
            >
              <FcGoogle className="text-2xl" />
              Login
            </button>
          </div>

          <div className="mt-6 text-center text-gray-400">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="text-[#00d7bb] hover:text-[#1fb385] transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
