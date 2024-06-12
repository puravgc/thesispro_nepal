import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { FaPython } from "react-icons/fa";

const Categories = () => {
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl my-4 relative z-20">Categories</h2>
      <div className="flex justify-between mx-10 my-10">
        <Card className="bg-[#706565] cursor-pointer hover:scale-150 hover:text-white hover:bg-sky-400 hover:font-semibold transition duration-300 ease-in-out">
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card className="bg-[#706565] cursor-pointer hover:scale-150 transition duration-300 ease-in-out  hover:text-white hover:bg-sky-400 hover:font-semibold">
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card className="bg-[#706565] cursor-pointer hover:scale-150 transition duration-300 ease-in-out  hover:text-white hover:bg-sky-400 hover:font-semibold">
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card className="bg-[#706565] cursor-pointer hover:scale-150 transition duration-300 ease-in-out  hover:text-white hover:bg-sky-400 hover:font-semibold">
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card className="bg-[#706565] cursor-pointer hover:scale-150 transition duration-300 ease-in-out  hover:text-white hover:bg-sky-400 hover:font-semibold">
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card className="bg-[#706565] cursor-pointer hover:scale-150 transition duration-300 ease-in-out  hover:text-white hover:bg-sky-400 hover:font-semibold">
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default Categories;
