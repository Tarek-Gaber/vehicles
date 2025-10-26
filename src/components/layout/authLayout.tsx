import type { ReactNode } from "react";
import secImage from "@/assets/images/sec.jpg";
import { ShieldHalf } from "lucide-react";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className=" h-screen w-screen flex ">
      <div className=" h-full  w-full md:w-1/2 lg:w-[45%] flex flex-col">
        <div className="w-full p-6">
          {" "}
          <ShieldHalf className=" h-16 w-16  text-blue-500" />
        </div>

        <div className=" grow w-full flex items-center justify-start px-6 flex-col ">
          {children}
        </div>
      </div>
      <div
        className=" h-full hidden md:flex  w-1/2 relative  bg-cover bg-center flex-col justify-end items-start px-10 pb-16 lg:w-[55%] "
        style={{ backgroundImage: `url(${secImage})` }}
      >
        <div
          className="absolute inset-0 bg-[#183874]/80  pointer-events-none"
          aria-hidden="true"
        />
        <div className=" z-10 text-white flex items-start flex-col gap-5 w-full">
          <ShieldHalf className=" h-24 w-24 mb-4" />
          <h2 className="text-5xl font-bold mb-2">
            Your gateway to investment <br /> and sustainable growth
          </h2>
          <p className="text-lg">
            Together we grow. BENA connects you to industrial and investment
            opportunities for Vision 2030.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
