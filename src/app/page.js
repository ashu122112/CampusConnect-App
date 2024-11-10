"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // This is to delay animations until after mounting, to prevent layout shift
    setHasMounted(true);
  }, []);

  return (
    <>
      <div>
        <Navbar />

        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 from-gray-900 via-gray-800 to-black bg-gradient-to-br z-0"></div>

          {/* Centered transparent logo */}
          <div className="absolute inset-0 flex items-center justify-center z-10 opacity-10">
            <Image src="/logo.png" alt="Logo" width={300} height={300} className="opacity-40" />
          </div>

          {/* Content */}
          <div className="relative p-20 my-20 text-white shadow-2xl bg-transparent bg-opacity-50 mx-20 z-20 backdrop-blur-md rounded-lg">
            <h1
              className={`flex justify-center text-4xl font-bold transition-transform duration-1000 transform ${
                hasMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              } hover:translate-x-4 hover:text-blue-500`}
            >
              Welcome to CampusConnect
            </h1>
            <h2
              className={`flex justify-center text-3xl my-5 font-semibold transition-transform duration-1000 transform delay-200 ${
                hasMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              } hover:translate-y-4 hover:text-blue-500`}
            >
              &quot;Bridge the Gap—Connect, Collaborate, Contribute! &quot;
            </h2>
            <p
              className={`flex justify-center text-2xl my-7 mx-11 font-serif transition-transform duration-1000 transform delay-300 ${
                hasMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              } hover:translate-x-4 hover:text-blue-500`}
            >
              Discover a smarter, streamlined campus life with Campus Connect. Stay up-to-date with real-time announcements, access valuable resources, and engage in a vibrant community. Connect with peers, collaborate on projects, and make the most of every campus opportunity!
            </p>
            <Link href={"/signup"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 border border-blue-700 rounded mx-8 my-5 transition duration-500 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center my-2 text-white">
          Copyright © CampusConnect
        </div>
      </div>
    </>
  );
}
