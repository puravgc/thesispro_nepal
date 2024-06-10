import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { FaPython } from "react-icons/fa";

const Categories = () => {
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl my-5">Categories</h2>
      <div className="flex justify-between mx-10">
        <Card>
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-2 w-32 h-32 items-center justify-center">
            <FaPython className="w-10 h-10"/>
            <h3>Python</h3>
          </CardContent>
        </Card>
        <Card>
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
