"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-gradient-to-l text-slate-200 from-gray-700 via-gray-900 to-black flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo3.png"
        width="200"
        height="200"
        alt="logo"
        className="rounded-full p-10"
      />

      <button
        onClick={() => signIn("google")}
        className="p-4 border-2 rounded-lg hover:bg-indigo-800"
      >
        Sign In to use BetterGPT
      </button>
      <div className="mt-10 flex items-center justify-center">
        <h1>
          Developed by{" "}
          <a
            href="https://www.piotrmaciejewski.com"
            target="_blank"
            className="text-red-500 font-bold"
          >
            Piotr.
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Login;
