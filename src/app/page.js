import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="grid grid-row-12">
          <div className="row-span-6 bg-slate-500">
            <div className="p-20 my-20 text-black shadow-2xl bg-blue-50 mx-20">
              <h1 className="flex justify-center text-4xl font-bold">
                Welcome to the CampussConnect 
              </h1>
              <h2 className="flex justify-center text-3xl my-5 font-semibold">
                &quot;Bridge the Gap—Connect, Collaborate, Contribute!&quot;
              </h2>
              <p className="flex justify-center text-2xl my-7 mx-11 font-serif">
                Discover a smarter, streamlined campus life with Campus Connect. Stay up-to-date with real-time announcements, access valuable resources, and engage in a vibrant community. Connect with peers, collaborate on projects, and make the most of every campus opportunity!
              </p>
              <Link href={"/signup"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 border border-blue-700 rounded mx-8 my-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-2">
          Copyrights to CampussConnect
        </div>
      </div>
    </>
  );
}
