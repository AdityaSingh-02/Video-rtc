"use client";
import React, { useState } from "react";
import { useAuth } from "@/Context/index";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/login";
import { AuthRequiredError } from "@/lib/AuthRequired";

const Login = () => {
  const { authStatus } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  if (error) {
    throw new AuthRequiredError();
  }

  if (authStatus) {
    router.replace("/profile");
    return <></>;
  }
  return (
    <>
      <div className="flex w-[80%] md:w-[40%] bg-gray-700 mx-auto justify-center items-center mt-24 py-10 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-red-500">
            Login - VideoCalls
          </h1>
          <p className="text-gray-400">
            Don't Have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-red-500"
            >
              signup
            </button>
          </p>
          <div className="py-10">
            <LoginForm setError={setError} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
