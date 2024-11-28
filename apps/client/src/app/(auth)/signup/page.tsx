"use client";
import React, { useState } from "react";
import { useAuth } from "@/Context/index";
import { useRouter } from "next/navigation";
import SignupForm from "@/components/signup";
import { AuthRequiredError } from "@/lib/AuthRequired";

const Signup = () => {
  const router = useRouter();
  const { authStatus } = useAuth();
  const [error, setError] = useState("");

  if (error) {
    throw new AuthRequiredError(error);
  }

  if (authStatus) {
    router.replace("/profile");
    return <></>;
  }

  return (
    <>
      <div className="flex w-[80%] md:w-[40%] bg-gray-700 mx-auto justify-center mt-24 py-10 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-red-500">
            SignUp - VideoCalls
          </h1>
          <p className="text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-red-500"
            >
              Login
            </button>
          </p>
          <div className="py-10">
            <SignupForm setError={setError} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
